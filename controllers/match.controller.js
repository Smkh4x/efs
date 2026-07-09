import Match from "../models/match.model.js";

class matchLogic {
    getAll = async (req, res, next) => {
        try {
            const match = await Match.findAll();
            if (match.length === 0) {
                return res.status(200).json([]);
            }
            res.status(200).json(match);

        } catch (err) {
            next(err);
        }
    }
    createMatch = async (req, res, next) => {
        try {
            const match = await Match.findOne({
                where: {
                    nom: req.body.nom,
                    prenom: req.body.prenom
                }
            });
            if (match) {
                res.status(500).json({
                    message: "match has already exits"
                })
            }
            res.status(201).json(match)

        } catch (err) {
            next(err);
        }
    }
    getMatchId = async (req, res, next) => {
        try {
            const { id } = req.params;
            const match = await Match.findByPk(id);
            if (!match) {
                return res.status(404).json({ message: "match id not found" })
            }
            res.status(200).json(match);

        } catch (err) {
            next(err);
        }
    }
    updateMatchId = async (req, res, next) => {
        try {
            const { id } = req.params;
            const match = await Match.findByPk(id);
            if (!match) {
                return res.status(404).json({ message: "match id not found" })
            }
            await match.update(req.body);
            res.status(201).json(match);

        } catch (err) {
            next(err);
        }
    }
    deleteMatchId = async (req, res, next) => {
        try {
            const { id } = req.params;
            const match = await Match.findByPk(id);
            if (!match) {
                return res.status(404).json({ message: "match id not found" })
            }
            await match.destroy();
            res.status(201).json(match);

        } catch (err) {
            next(err);
        }
    }
}
export default new matchLogic();