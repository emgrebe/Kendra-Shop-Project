import { Mongoose } from "mongoose";

var userSchema = new Mongoose.Schema( {
  name: String,
  email: String,
  city: String,
  avatar: String,
  googleId: String,
}, {
  timestamps: true
});