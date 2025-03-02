import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"; // or 'bcryptjs'

interface Body {
  email: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  try {
    // Parse the request body
    const body: Body = await req.json();

    // Validate the body
    if (!body || !body.email || !body.password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (user) {
      return NextResponse.json(
        { message: "The email already exists" },
        { status: 409 }
      );
    }

    // Hash the password
    const saltRounds = 10; // Number of salt rounds for hashing
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        hashPasswod: hashedPassword, // Ensure this matches your Prisma schema
      },
    });

    return NextResponse.json(
      { message: `${newUser.email} created` }, // Return the email instead of the hashed password
      { status: 201 }
    );
  } catch (error: unknown) {
    // Log the full error object
    console.error(
      "Error during user registration:",
      JSON.stringify(error, null, 2)
    );

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
