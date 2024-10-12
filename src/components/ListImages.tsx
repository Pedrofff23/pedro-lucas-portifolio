"use client";
import { useState, useEffect } from "react";

export default function Home() {
	const [images, setImages] = useState<
		{ secure_url: string; public_id: string }[]
	>([]);

	useEffect(() => {
		fetch("/api/listImages")
			.then((response) => response.json())
			.then((data) => setImages(data.images))
			.catch((error) => console.error("Error fetching images:", error));
	}, []);

	return (
		<div>
			<h1>Cloudinary Images</h1>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{images.map((image) => (
					<div key={image.public_id} >
						<img
							src={image.secure_url}
							alt={image.public_id}
							width="200"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
