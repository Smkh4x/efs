import errMidlleare from "../middlewares/error.middleware.js";
import Affectation from "../models/affectation.model.js";

class affecationLogic {
    getAll = async (req, res, next) => {
        try {
            const affecation = await Affectation.findAll();
            if (affecation.length === 0) {
                return res.status(200).json([])
            }
            res.status(200).json(affecation);

        } catch (err) {
            next(err);
        }
    }
    createAffecation = async (req, res, next) => {
        try {
            const affecation = await Affectation.create(req.body);
            if (affecation) {
                res.status(500).json({
                    message: "deja kyn had aff"
                })
            }
            res.status(201).json(affecation)
        } catch (err) {
            next(err);
        }

    }
    getAffecationId = async (req, res, next) => {
        try {
            const { id } = req.params;
            const affecation = await Affectation.findByPk(id);
            if (!affecation) {
                return res.status(404).json({ message: "id not found" });
            }
            res.status(200).json(affecation);

        } catch (err) {
            next(err);
        }

    }
    updateAffecation = async (req, res, next) => {
        try {
            const { id } = req.params;
            const affecation = await Affectation.findByPk(id);
            if (!affecation) {
                return res.status(404).json({ message: "id not found" })
            }
            await affecation.update(req.body);
            res.status(200).json({
                message: "update affectaion"
            });

        } catch (err) {
            next(err);
        }
    }
    deleteAffecation = async (req, res, next) => {
        try {
            const { id } = req.params;
            const affecation = await Affectation.findByPk(id);
            if (!affecation) {
                return res.status(404).json({ message: "id not found" });
            }
            await affecation.destroy();
            res.status(200).json({
                message: "deleted succesffuly"
            })

        } catch (err) {
            next(err);
        }

    }
}
export default new affecationLogic();