import mongoose from "mongoose"

export const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://webclubfc:sabzevari73@cluster0.r3ou8vs.mongodb.net/todo-app');
  console.log("DB Connected");
}