import { connectDB } from "@/db/connectdb";
import User from "@/db/model/user";
import { NextResponse } from "next/server";
import argon2 from "argon2";

export async function POST(request) {
  try {
    await connectDB();
    const { name, email, password } = await request.json();

    /* Checking if All the Details are Provided or Not */
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Invalid Credentails" },
        { status: 401 },
      );
    }

    /* Check if User Already Exist */
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User Allready Exist" },
        { status: 403 },
      );
    }
    /* Hashing the Password */
    const hashPassword = await argon2.hash(password);

    /* User Created in DB with Hashed Password */
    const newUser = await User.create({
      name,
      email,
      hashPassword,
      role: "USER",
    });

    const token = signToken({ userId: newUser._id, role: newUser.role }, "5h");

    const res = NextResponse.json(
      { message: "Login Successfully" },
      { status: 200 },
    );

    /* Setting Token as Cookies in the Response */
    res.cookies.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
