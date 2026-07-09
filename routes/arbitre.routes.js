import arbitreLogic from "../controllers/arbitre.controller.js";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";
import { validationArbitre } from "../middlewares/validate.middleware.js";
import express from "express"

const router = express.Router();

router.get("/", arbitreLogic.getAll);
router.post("/",authenticate, authorize("consultation", "admin"), validationArbitre, arbitreLogic.createArbitre);
router.get("/:id", arbitreLogic.getArbitreId)
router.put("/:id",authenticate, authorize("consultation", "admin"), validationArbitre, arbitreLogic.updateArbitre)
router.delete("/:id",authenticate,authorize("admin"), arbitreLogic.deleteArbitre)

export default router;
