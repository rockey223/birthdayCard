import { NextResponse } from "next/server";
import connect from "../../../../lib/mongoose";
import Birthday from "../../../../models/Birthday";

// Handle GET requests (fetch a single birthday by ID)
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Validate input
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connect();
    const birthday = await Birthday.findOne({ birthdayId: id });

    if (!birthday) {
      return NextResponse.json(
        { error: "Birthday not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(birthday);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Unable to fetch data" },
      { status: 500 }
    );
  }
}

// Handle PUT requests (update a single birthday by ID)
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { fullName, age, message } = await request.json();

    // Validate input
    if (!id || !fullName || !age || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connect();
    const updatedBirthday = await Birthday.findByIdAndUpdate(
      id,
      { fullName, age, message },
      { new: true }
    );

    if (!updatedBirthday) {
      return NextResponse.json(
        { error: "Birthday not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Data updated successfully",
      data: updatedBirthday,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Unable to update data" },
      { status: 500 }
    );
  }
}

// Handle DELETE requests (delete a single birthday by ID)
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Validate input
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connect();
    const deletedBirthday = await Birthday.findByIdAndDelete(id);

    if (!deletedBirthday) {
      return NextResponse.json(
        { error: "Birthday not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Data deleted successfully" });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Unable to delete data" },
      { status: 500 }
    );
  }
}
