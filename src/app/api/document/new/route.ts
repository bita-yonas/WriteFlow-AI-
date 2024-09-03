import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";  // Import Prisma

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    const { title, description } = await req.json();

    // Validate the input data
    if (!title || !description) {
      return new NextResponse("Title and description are required", { status: 400 });
    }

    const createNewDoc = await db.document.create({
      data: {
        userId: userId,
        title: title,
        description: description,
      },
    });

    revalidatePath("/");
    return NextResponse.json(createNewDoc, { status: 200 });
  } catch (error) {
    console.error("Error creating new document:", error);

    // Check if the error is a known Prisma error
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Known Prisma errors (e.g., validation issues, unique constraints)
      return new NextResponse(`Prisma error: ${error.message}`, { status: 500 });
    }

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
