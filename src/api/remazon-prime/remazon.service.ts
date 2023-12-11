import knex from '../../db/connections';
import EmployeeType, { NewEmployeeType } from '../../types/employeeType';
import ProjectType, { NewProjectType } from '../../types/projectType';
import RankType, { NewRankType } from '../../types/rankType';

// Projects -------------------------------------------------------------->

function listProjects(): ProjectType[] {
  return knex("rem_projects")
  .select(
    "rem_projects.id",
    "rem_projects.name",
    "rem_projects.host as host",
    "rem_projects.type",
    "rem_projects.description",
    "rem_projects.status"
    )
    .innerJoin("rem_employees", "rem_projects.host", "rem_employees.id")
    .orderBy("rem_projects.id");
  };
  
  function createProject(project: NewProjectType): ProjectType {
    return knex("rem_projects")
    .insert(project)
    .returning("*")
    .then((data: ProjectType[]) => data[0]);
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
  
// Notifications ---------------------------------------------------------->

function listNotifications(){
  return knex("rem_notifications")
  .select("*")
  .orderBy("id");
};

function createNotification(newNotification: any) {
  return knex("rem_notifications")
  .insert(newNotification)
  .returning("*")
  .then((data: any) => data[0]);
};

// Utility --------------------------------------------------------------->

async function initialLoad() {
  const employees = await listEmployees();
  const projects = await listProjects();
  const ranks = await listRanks();
  return { employees, projects, ranks };
};
  
module.exports = {
  // Utility --------------------------------------------------------------->
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
  // Notifications ---------------------------------------------------------->
  listNotifications,
  createNotification,
};