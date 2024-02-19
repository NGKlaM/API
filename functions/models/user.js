const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      min: 6,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: 6,
    },
    role: {
      type: String,
      enum: ["Admin", "Member"],
      default: "Member",
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
