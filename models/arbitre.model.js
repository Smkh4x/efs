import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"


const Arbitre = sequelize.define("arbitre", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationalite: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confederation: {
        type: DataTypes.ENUM(
            "UEFA",
            "CONMEBOL",
            "CAF",
            "AFC",
            "CONCACAF",
            "OFC"
        ),
        allowNull: false
    },
    categorie: {
        type: DataTypes.ENUM(
            "Central",
            "Assistant",
            "VAR",
            "AVAR",
            "Fourth"
        ),
        allowNull: false
    },
    experience: {
        type: DataTypes.INTEGER,
        defaultValue: 0
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
},
    {
        tableName: "arbitres",
        timestamps: false,

    })
export default Arbitre;
