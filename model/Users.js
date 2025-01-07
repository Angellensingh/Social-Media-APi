import mongoose from "mongoose";
import bcrypt, { genSalt } from "bcrypt";

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  email: {
    type: String,
    index: { unique: true },
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
  },
  password: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    console.log(genSalt);
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});


const User = mongoose.model("User", userSchema);
export default User;
