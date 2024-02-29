import { Router, Request, Response } from 'express';
import controller from './remazon.controller';
import { methodNotAllowed } from '../../utils/middlewares';
// import Todo from './remazon.model';

const router = Router();

router
  .route("/")
  .get(controller.initialLoad)
  .all(methodNotAllowed);

router
  .route("/motd")
  .get(controller.getMotd)
  .put(controller.updateMotd)
  .all(methodNotAllowed);

router
  .route("/projects")
  .get(controller.listProjects)
  .post(controller.createProject)
  .put(controller.updateProject)
  .all(methodNotAllowed);

router
  .route("/projects/:id")
  .delete(controller.deleteProject)
  .all(methodNotAllowed);
  
router
  .route("/employees")
  .get(controller.listEmployees)
  .post(controller.createEmployee)
  .put(controller.updateEmployee)
  .all(methodNotAllowed);

router
.route("/employees/:uid")
.get(controller.getEmployee)
.all(methodNotAllowed);
  
router
  .route("/ranks")
  .get(controller.listRanks)
  .post(controller.createRank)
  .put(controller.updateRank)
  .all(methodNotAllowed);

router
  .route("/ranks/:id")
  .delete(controller.deleteRank)
  .all(methodNotAllowed);

router
  .route("/awards")
  .get(controller.listAwards)
  .put(controller.updateAward)
  .post(controller.createAward)
  .all(methodNotAllowed);

router
  .route("/awards/:id")
  .delete(controller.deleteAward)
  .all(methodNotAllowed);

router
  .route("/notifications")
  .post(controller.createNotification)
  .all(methodNotAllowed);
  
router
  .route("/notifications/:uid")
  .get(controller.listNotifications)
  .all(methodNotAllowed);
  
router
  .route("/notifications/:uid/:id")
  .put(controller.adjustNotification)
  .all(methodNotAllowed);

  // router
  //   .get('/todos', (req: Request, res: Response<Todo[]>) => {
  //     res.json([{
  //       content: 'Learn Typescript',
  //       done: false,
  //     }]);
  //   })

export default router;