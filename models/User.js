import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: {
      type: String,
      unique: [true, "Email already exists!"],
      required: [true, "Email is required!"],
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s",
    },
  },
  { timestamps: true }
);

const User = models?.User || model("User", UserSchema);

export default User;
