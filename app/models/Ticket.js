import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    ticketnumber: Number,
    project: String,
    manager: String,
    description: String,
    category: String,
    priority: String,
    status: String,
    active: Boolean,
  },
  {
    timestamp: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
