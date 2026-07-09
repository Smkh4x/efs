import affecationLogic from "../controllers/affectation.controller.js";
import express from "express";
import routerAr from "./arbitre.routes.js";
import { validationAffecation } from "../middlewares/validate.middleware.js";
import authorize from "../middlewares/authorize.js";
import authenticate from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/", affecationLogic.getAll);
router.post("/",authenticate, authorize("consultation", "admin"), validationAffecation, affecationLogic.createAffecation);
router.get("/:id", affecationLogic.getAffecationId);
router.put("/:id", validationAffecation, affecationLogic.updateAffecation);
router.delete("/:id",authenticate, authorize("consultation", "admin"), affecationLogic.deleteAffecation);

export default router;