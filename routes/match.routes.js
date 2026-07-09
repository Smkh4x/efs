import matchLogic from "../controllers/match.controller.js";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";
import { validationMatch } from "../middlewares/validate.middleware.js";
import express from "express"

const router = express.Router()

router.get("/", matchLogic.getAll);
router.post("/",authenticate, authorize("consultation", "admin"), validationMatch, matchLogic.createMatch);
router.get("/:id", matchLogic.getMatchId);
router.put("/:id", validationMatch, matchLogic.updateMatchId);
router.delete("/:id", matchLogic.deleteMatchId);

export default router;