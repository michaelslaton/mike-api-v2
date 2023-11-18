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
    "rem_employees.name as host",
    "rem_projects.host as hostId",
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

// Applications ---------------------------------------------------------->

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

module.exports = {
  // Projects -------------------------------------------------------------->
  listProjects,
  createProject,
  updateProject,
  // Employees ------------------------------------------------------------->
  getEmployee,
  listEmployees,
  createEmployee,
  updateEmployee,
  // Ranks ----------------------------------------------------------------->
  listRanks,
  createRank,
  updateRank,
  // Notifications ---------------------------------------------------------->
  listNotifications,
  createNotification,
};