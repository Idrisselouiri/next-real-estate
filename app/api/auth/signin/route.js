import { mongooseConnect } from "@/lib/mongoose";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(request) {
  const { name, email, password } = await request.json();
  if (
    !name ||
    !email ||
    !password ||
    name === "" ||
    email === "" ||
    password === ""
  ) {
    return Resposnse.json(
      { message: "All fields are required", success: false },
      { status: 401 }
    );
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await mongooseConnect();
    await newUser.save();
    return Response.json(
      { message: "Signin SuccessFully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: error.message, success: false },
      { status: 404 }
    );
  }
}
