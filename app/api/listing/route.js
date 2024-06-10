import { mongooseConnect } from "@/lib/mongoose";
import Listing from "@/models/Listing";

export async function POST(request) {
  const data = await request.json();
  const slug = data.name
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");
  try {
    await mongooseConnect();
    const newListing = await Listing.create({ ...data, slug });
    return Response.json(newListing, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: error.message, success: false },
      { status: 404 }
    );
  }
}
