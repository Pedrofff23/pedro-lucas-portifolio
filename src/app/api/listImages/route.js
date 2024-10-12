// app/api/listImages/route.js
import { NextResponse } from "next/server";
import cloudinary from "../../../lib/cloudinary";

export async function GET() {
	try {
		const { resources } = await cloudinary.search
			.expression("resource_type:image")
			.sort_by("public_id", "desc")
			.max_results(30)
			.execute();

		return NextResponse.json({ images: resources });
	} catch (error) {
		return NextResponse.json(
			{ error: "Something went wrong!" },
			{ status: 500 }
		);
	}
}
