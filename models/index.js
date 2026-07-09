import Affectation from "./affectation.model.js";
import arbitre from "./arbitre.model.js";
import match from "./match.model.js";

arbitre.hasMany(Affectation, {
    foreignKey: "arbitreId",
});
Affectation.belongsTo(arbitre, {
    foreignKey: "arbitreId",
});

match.hasMany(Affectation, {
    foreignKey: "matchId",
});

Affectation.belongsTo(match, {
    foreignKey: "matchId"
});

export {
    Affectation,
    arbitre,
    match
}