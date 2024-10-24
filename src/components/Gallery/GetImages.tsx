import Image from "next/image";
import { useState } from "react";
import SlideUp from "../SlideUp/SlideUp";

const images = [
    "/photos/file_1.jpg",
    "/photos/file_2.jpg",
    "/photos/file_3.jpg",
    "/photos/file_5.jpg",
    "/photos/file_6.jpg",
    "/photos/file_7.jpg",
    "/photos/file_8.jpg",
    "/photos/file_9.jpg",
    "/photos/file_10.jpg",
    "/photos/file_11.jpg",
    "/photos/file_12.jpg",
    "/photos/file_13.jpg",
    "/photos/file_15.jpg",
    "/photos/file_16.jpg",
    "/photos/file_17.jpg",
    "/photos/file_18.jpg",
    "/photos/file_19.jpg",
    "/photos/file_20.jpg",
    "/photos/file_21.jpg",
    "/photos/file_22.jpg",
    "/photos/file_23.jpg",
    "/photos/file_24.jpg",
    "/photos/file_25.jpg",
    "/photos/file_26.jpg",
    "/photos/file_27.jpg",
    "/photos/file_28.jpg",
    "/photos/file_29.jpg",
];

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setTimeout(() => {
            setIsOpen(true); // Trigger opening animation after image is set
        }, 10); // Small delay to ensure the component has mounted before animation starts
    };

    const closeModal = () => {
        setIsOpen(false); // Trigger closing animation
        setTimeout(() => {
            setSelectedImage(null); // Remove the image after the close animation finishes
        }, 300); // Matches the animation duration
    };

    return (
        <div>
            {/* Responsive grid */}
            <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-3">
                {images.map((src, index) => (
                    <div key={index} className="relative h-auto w-full">
                        <div className="relative overflow-hidden pb-[100%]">
                            {/* Responsive image */}
                            <Image
                                src={src}
                                alt={`Image ${index + 1}`}
                                fill
                                className="cursor-pointer object-cover transition-transform hover:scale-105"
                                onClick={() => openModal(src)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={closeModal}
                >
                    <div
                        className={`relative transform transition-transform duration-300 ${
                            isOpen
                                ? "scale-100 opacity-100"
                                : "scale-75 opacity-0"
                        }`}
                    >
                        <button
                            className="absolute right-2 top-2 cursor-pointer text-3xl font-bold text-white"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Selected Image"
                            width={800}
                            height={800}
                            className="max-h-full max-w-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
