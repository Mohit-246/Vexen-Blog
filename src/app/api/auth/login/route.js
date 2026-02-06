import { connectDB } from "@/db/connectdb";
import { NextResponse } from "next/server";
import User from "@/db/model/user";
import argon2 from "argon2";
import { signToken } from "@/lib/jwt";

export async function POST(request) {
  try {
    connectDB();
    const { name, email, password } = request.json();

    /* Check the required Details are present or Not */
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Invlaid Credentials" },
        { status: 400 },
      );
    }

    /* Checking if User Exist in DB or not  */
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 401 },
      );
    }

    /* Verifying the given password with password stored in DB */
    const isMatched = await argon2.verify(user.password, password);

    if (!isMatched) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 },
      );
    }

    const token = signToken({ userId: user._id, role: user.role }, "5h");

    const res = NextResponse.json(
      { message: "Signup Successfully" },
      { status: 201 },
    );

    /* Setting Token as Cookies in the Response */
    res.cookies.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return res;
  } catch (error) {}
}
