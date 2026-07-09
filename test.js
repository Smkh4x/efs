// this is a answer then 85/100 point
const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('fifa2026', 'root', '', { dialect: 'mysql' });

const Arbitre = sequelize.define('Arbitre', {
    nom: { type: DataTypes.STRING, allowNull: false },
    nationalite: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'actif' }
}, { tableName: 'arbitres', timestamps: false });

router.get('/api/arbitres', async (req, res) => {
    const arbitres = await Arbitre.findAll({ where: { status: 'actif' } });
    res.json(arbitres);
});

module.exports = router;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Arbitre = sequelize.define('Arbitre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationalite: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM(
            "actif",
            "suspendu",
            "blessé",
            "retraité"
        ),
        defaultValue: "actif"
    },
}, { tableName: 'arbitres', timestamps: false });

module.exports = Arbitre;

const Arbitre = require('../models/Arbitre');
export const getAll = async (req, res, next) => {
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

const express = require('express');
const router = express.Router();
router.get("/", createArbitre);


module.exports = router;
