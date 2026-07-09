import Arbitre from "../models/arbitre.model.js";


class arbitreLogic {
    getAll = async (req, res, next) => {
        try {
            const arbit = await Arbitre.findAll();
            if (arbit.length === 0) {
                return res.status(200).json([])
            }
            res.status(200).json(arbit)
        } catch (err) {
            next(err);
        }
    }
    createArbitre = async (req, res, next) => {
        try {
            const arbit = await Arbitre.findOne({
                where: {
                    nom: req.body.nom,
                    prenom: req.body.prenom
                }
            });
            if(arbit) {
                return res.status(400).json({
                    message: "arbitrs already exits"
                })
            }
            res.status(200).json({
                message: "add succefully"
            });
        } catch (err) {
            next(err);
        }
    }
    getArbitreId = async (req, res, next) => {
        try {
            const { id } = req.params;
            const arbit = await Arbitre.findByPk(id);
            if (!arbit) {
                return res.status(400).json({ message: "id not found" })
            }
            res.status(200).json(arbit);

        } catch (err) {
            next(err);
        }
    }
    updateArbitre = async (req, res, next) => {
        try {
            const { id } = req.params;
            const arbit = await Arbitre.findByPk(id);

            if (!arbit) {
                return res.status(400).json({ message: "id not found" });
            }
            await arbit.update(req.body);
            res.status(201).json(arbit);

        } catch (err) {
            next(err);
        }
    }
    deleteArbitre = async (req, res, next) => {
        try {
            const { id } = req.params;
            const arbit = await Arbitre.findByPk(id);
            if (!arbit) {
                return res.status(400).json({ message: "id not found" });
            }
            await arbit.destroy();
            res.status(201).json({ message: "deleted succesffly" });
        } catch (err) {
            next(err);
        }
    }

}
export default new arbitreLogic();

