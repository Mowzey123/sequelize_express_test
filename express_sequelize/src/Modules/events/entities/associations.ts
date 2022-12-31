import Event from "./event.entity";
import Workshop from "./workshop.entity";

Event.hasMany(Workshop,{as:"workshops",foreignKey:"eventId"})
Workshop.belongsTo(Event,{as:"event",foreignKey:"id"})