import knex from '../../db/connections';
import AwardType, { NewAwardType } from '../../types/award.type';
import EmployeeType, { NewEmployeeType } from '../../types/employee.type';
import NotificationType, { NotificationPostType } from '../../types/notification.type';
import ProjectType, { NewProjectType } from '../../types/project.type';
import RankType, { NewRankType } from '../../types/rank.type';

// Notifications ---------------------------------------------------------->

async function listNotifications(uid: string){
  const data = await knex("rem_notifications")
  .select("*")
  .orderBy("id");

  return data.filter((notification: NotificationType)=> notification.users.split(",").includes(uid));
};

function createNotification(newNotification: NotificationPostType) {
  return knex("rem_notifications")
  .insert(newNotification)
  .returning("*")
  .then((data: NotificationType[]) => data[0]);
};

// adjustNotification removes a user listed on a notification.
// If there are no users left on the notification, the notification is deleted.
// It then returns an updated list of notifications for the client to display.
async function adjustNotification(uid: string, id: number) {
  let updatedNotificationsList: NotificationType[] = []
  const notification: NotificationType = await knex("rem_notifications")
  .select("*")
  .where({ id })
  .first();

  const attendingList: string[] = notification.users.split(",").filter((currentUid)=> currentUid !== uid);
  if(attendingList.length < 1) {
    await knex("rem_notifications")
    .where({ id })
    .del();

    updatedNotificationsList = await listNotifications(uid);
    return updatedNotificationsList;
  };

  const users: string = [...attendingList].toString();
  await knex("rem_notifications")
    .where({ id })
    .update({ users });

    updatedNotificationsList = await listNotifications(uid);
    return updatedNotificationsList;
};

// Projects -------------------------------------------------------------->

function listProjects(): ProjectType[] {
  return knex("rem_projects")
  .select(
    "rem_projects.id",
    "rem_projects.name",
    "rem_projects.type",
    "rem_projects.date",
    "rem_projects.host as host",
    "rem_projects.attending",
    "rem_projects.regularity",
    "rem_projects.description",
    "rem_projects.status"
    )
    .innerJoin("rem_employees", "rem_projects.host", "rem_employees.id")
    .orderBy("rem_projects.id");
  };
  
  async function createProject(project: NewProjectType): Promise<ProjectType> {
    const newProject = await knex("rem_projects")
    .insert(project)
    .returning("*")
    .then((data: ProjectType[]) => data[0]);
    
    const employeeList: EmployeeType[] = await listEmployees();
    const projectHost: EmployeeType | undefined = employeeList.find((employee)=> employee.id === project.host);
    
    const newNotification: NotificationPostType = {
      type: 'project',
      title: `New Project: ${project.name}`,
      users: `${employeeList.map((employee)=> employee.uid).toString()}`,
      message: `${projectHost!.name} has hosted a new project: ${project.name}`,
    };

    await createNotification(newNotification);

    return newProject;
  };
  
  function updateProject(id: number, updatedProject: ProjectType): ProjectType {
    return knex("rem_projects")
    .where({ id })
    .update(updatedProject)
    .returning("*")
    .then((data: ProjectType[]) => data[0]);
  };
  
  function deleteProject(id: Number) {
    return knex("rem_projects")
    .where({ id })
    .del();
  };
  
  // Employees ------------------------------------------------------------->
  
  function getEmployee(uid: string): EmployeeType {
    return knex("rem_employees")
    .where({ uid })
    .then((data: EmployeeType[]) => data[0]);
  };
  
  function listEmployees(): EmployeeType[] {
    return knex("rem_employees")
    .select("*")
    .orderBy("rank");
  };
  
  function createEmployee(employee: NewEmployeeType): EmployeeType {
    return knex("rem_employees")
    .insert(employee)
    .returning("*")
    .then((data: EmployeeType[]) => data[0]);
  };
  
  function updateEmployee(id: number, updatedEmployee: EmployeeType) {
    return knex("rem_employees")
    .where({ id })
    .update(updatedEmployee)
    .returning("*")
    .then((data: EmployeeType[]) => data[0]);
  };

// Ranks ----------------------------------------------------------------->

function listRanks(): RankType[] {
  return knex("rem_ranks")
  .select("*")
  .orderBy("rank");
};

function createRank(newRank: NewRankType) {
  return knex("rem_ranks")
  .insert(newRank)
  .returning("*")
  .then((data: RankType[]) => data[0]);
};

function updateRank(id: number, updatedRank: RankType) {
  return knex("rem_ranks")
  .where({ id })
  .update(updatedRank)
  .returning("*")
  .then((data: RankType[]) => data[0]);
};

function deleteRank(id: Number) {
  return knex("rem_ranks")
  .where({ id })
  .del();
};

// Awards ----------------------------------------------------------------->

function listAwards(){
  return knex("rem_awards")
  .select("*")
  .orderBy("name");
};

function createAward(newAward: NewAwardType) {
  return knex("rem_awards")
  .insert(newAward)
  .returning("*")
  .then((data: EmployeeType[]) => data[0]);
};

function updateAward(id: number, updatedAward: AwardType) {
  return knex("rem_awards")
  .where({ id })
  .update(updatedAward)
  .returning("*")
  .then((data: AwardType[]) => data[0]);
};

function deleteAward(id: Number) {
  return knex("rem_awards")
  .where({ id })
  .del();
};

// Utility --------------------------------------------------------------->

function getMotd() {
  return knex("rem_settings")
  .where("id", 1)
  .then((data: any) => data[0].motd);
};

function updateMotd(updatedMotd: string) {
  return knex("rem_settings")
  .where("id", 1)
  .update(updatedMotd)
  .returning("*")
  .then((data: any) => data[0].motd);
};

async function initialLoad() {
  const motd = await getMotd();
  const employees = await listEmployees();
  const awards = await listAwards();
  const projects = await listProjects();
  const ranks = await listRanks();
  return { motd, employees, projects, ranks, awards };
};
  
module.exports = {
  // Settings --------------------------------------------------------------->
  getMotd,
  updateMotd,
  initialLoad,
  // Projects -------------------------------------------------------------->
  listProjects,
  createProject,
  updateProject,
  deleteProject,
  // Employees ------------------------------------------------------------->
  getEmployee,
  listEmployees,
  createEmployee,
  updateEmployee,
  // Ranks ----------------------------------------------------------------->
  listRanks,
  createRank,
  updateRank,
  deleteRank,
  // Notifications --------------------------------------------------------->
  listNotifications,
  createNotification,
  adjustNotification,
  // Awards ---------------------------------------------------------------->
  listAwards,
  createAward,
  updateAward,
  deleteAward,
};