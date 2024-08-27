import connect from "@/lib/db";
import User from "@/lib/modals/user";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connect();
    const users = await User.find();

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();
    await connect();

    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error in creating user.", error }),
      { status: 500 }
    );
  }
};
