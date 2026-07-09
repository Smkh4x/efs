import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"

const Match = sequelize.define("match", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    equipeDomicile: {
        type: DataTypes.STRING,
        allowNull: false
    },
    equipeExterieur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    villeHote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateMatch: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phase: {
        type: DataTypes.ENUM(
            "Groupes",
            "8e",
            "Quart",
            "Demi",
            "Finale"
        ),
        allowNull: false
    }
},
    {
        tableName: "matchs",
        timestamps: false,

    })
export default Match;