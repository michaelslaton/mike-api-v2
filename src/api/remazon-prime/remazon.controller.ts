const service = require("./remazon.service");
import { asyncErrorBoundary } from '../../utils/middlewares';
import { Request, Response } from 'express';

// Projects -------------------------------------------------------------->

async function listProjects(req: Request, res: Response) {
  let data = await service.listProjects();
  console.log('working')
  return res.json({data});
};

async function createProject(req: Request, res: Response) {
  let newProject = req.body;
  const data = await service.createProject(newProject);
  res.status(201).json({ data });
};

async function updateProject(req: Request, res: Response) {
  const updatedProject = req.body;
  const data = await service.updateProject(updatedProject.id, updatedProject);
  res.status(200).json({ data });
};

// Employees ------------------------------------------------------------->

async function getEmployee(req: Request, res: Response) {
  const { uid } = req.params;
  const data = await service.getEmployee(uid);
  res.status(200).json({ data });
};

async function listEmployees(req: Request, res: Response) {
  let data = await service.listEmployees();
  return res.json({data})
};

async function createEmployee(req: Request, res: Response) {
  let newEmployee = req.body;
  const data = await service.createEmployee(newEmployee);
  res.status(201).json({ data });
};

async function updateEmployee(req: Request, res: Response) {
  const updatedEmployee = req.body;
  const data = await service.updateEmployee(updatedEmployee.id, updatedEmployee);
  res.status(200).json({ data });
};

// Ranks ------------------------------------------------------------------>

async function listRanks(req: Request, res: Response) {
  let data = await service.listRanks();
  return res.json({data})
};

async function createRank(req: Request, res: Response) {
  let newRank = req.body;
  const data = await service.createRank(newRank);
  res.status(201).json({ data });
};

async function updateRank(req: Request, res: Response) {
  const updatedRank = req.body;
  const data = await service.updateRank(updatedRank.id, updatedRank);
  res.status(200).json({ data });
};

// Applications ------------------------------------------------------------------->

async function listNotifications(req: Request, res: Response) {
  let data = await service.listNotifications();
  return res.json({data})
};

async function createNotification(req: Request, res: Response) {
  let newNotification = req.body;
  const data = await service.createNotification(newNotification);
  res.status(201).json({ data });
};

export default {
  // Projects -------------------------------------------------------------->
  listProjects: [asyncErrorBoundary(listProjects)],
  createProject: [asyncErrorBoundary(createProject)],
  updateProject: [asyncErrorBoundary(updateProject)],
  // Employees ------------------------------------------------------------->
  getEmployee: [asyncErrorBoundary(getEmployee)],
  listEmployees: [asyncErrorBoundary(listEmployees)],
  createEmployee: [asyncErrorBoundary(createEmployee)],
  updateEmployee: [asyncErrorBoundary(updateEmployee)],
  // Ranks ------------------------------------------------------------------>
  listRanks: [asyncErrorBoundary(listRanks)],
  createRank: [asyncErrorBoundary(createRank)],
  updateRank: [asyncErrorBoundary(updateRank)],
  // Notifications ----------------------------------------------------------->
  listNotifications: [asyncErrorBoundary(listNotifications)],
  createNotification: [asyncErrorBoundary(createNotification)],
};