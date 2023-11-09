import knex from '../../db/connections';

// Projects -------------------------------------------------------------->

function listProjects(){
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

function createProject(project: any) {
  return knex("rem_projects")
    .insert(project)
    .returning("*")
    .then((data: any) => data[0]);
};

function updateProject(id: any, updateProject: any) {
  return knex("rem_projects")
    .where({ id })
    .update(updateProject)
    .returning("*")
    .then((data: any) => data[0]);
};

// Employees ------------------------------------------------------------->

function getEmployee(uid: any) {
  return knex("rem_employees")
    .where({ uid })
    .then((data: any) => data[0]);
};

function listEmployees(){
  return knex("rem_employees")
  .select("*")
  .orderBy("rank");
};

function createEmployee(employee: any) {
  return knex("rem_employees")
    .insert(employee)
    .returning("*")
    .then((data: any) => data[0]);
};

function updateEmployee(id: any, updatedEmployee: any) {
  return knex("rem_employees")
    .where({ id })
    .update(updatedEmployee)
    .returning("*")
    .then((data: any) => data[0]);
};

// Ranks ----------------------------------------------------------------->

function listRanks(){
  return knex("rem_ranks")
  .select("*")
  .orderBy("rank");
};

function createRank(newRank: any) {
  return knex("rem_ranks")
    .insert(newRank)
    .returning("*")
    .then((data: any) => data[0]);
};

function updateRank(id: any, updatedRank: any) {
  return knex("rem_ranks")
    .where({ id })
    .update(updatedRank)
    .returning("*")
    .then((data: any) => data[0]);
};

// Users ----------------------------------------------------------------->

function createUser(newUser: any) {
  return knex("rem_users")
    .insert(newUser)
    .returning("*")
    .then((data: any) => data[0]);
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