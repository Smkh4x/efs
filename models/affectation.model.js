import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"

const Affectation = sequelize.define("affecation", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: DataTypes.ENUM(
            "Central",
            "Assistant",
            "VAR",
            "AVAR",
            "Fourth"
        ),
        allowNull: false
    },
    matchId: {
        type: DataTypes.INTEGER, // id dial wa7ad data dial waa7d match
        allowNull: false
    },
    arbitreId: {
        type: DataTypes.INTEGER, //  id wa7ad hakam
        allowNull: false
    },
}, {
    tableName: "Affectation",
    timestamps: false,

})
export default Affectation
