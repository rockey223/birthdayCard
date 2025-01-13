import { NextResponse } from "next/server";
import connect from "../../../lib/mongoose";
import Birthday from "../../../models/Birthday";
import { generateUniqueId } from "../../../utils/idGenerator"; // Import the ID generator
export const maxDuration = 60;
// Handle GET requests
export async function GET() {
  try {
    await connect();
    const birthdays = await Birthday.find({});
    return NextResponse.json({ data: birthdays });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Unable to fetch data" },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(request) {
  try {
    const { senderName,fullName, age, message } = await request.json();

    // Validate input
    if (!senderName || !fullName || !age || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connect();

    // Generate a unique ID
    const birthdayId = await generateUniqueId();

    const birthday = new Birthday({
      senderName,
      fullName,
      age,
      message,
      birthdayId,
    });
    await birthday.save();

    return NextResponse.json(
      { message: "Data saved successfully", data: birthday },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to save data" }, { status: 500 });
  }
}
