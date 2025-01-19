"use client"
import Image from 'next/image';
import SignUpForm from '@/components/auth/sign-up-form';
import { useState } from 'react';

const images = [
  "/placeholder-1.jpg", 
  "/placeholder-2.jpg", 
  "/placeholder-3.jpg" // Add your image paths here
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Sign-in form */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <div className="mx-auto text-center mb-8">
            {/* Corrected Image Path */}
            <Image
              src="/placeholder-logo.svg" // Correct path for the logo in the public folder
              alt="Logo"
              width={200}
              height={200}
              priority // Ensures the image is loaded immediately for better UX
              className="mx-auto"
            />
            <h1 className="text-xl font-bold mt-4">Welcome Back to Kemistry Demystified</h1>
            <p className="text-gray-500">Sign in with your Registered Google account to continue...</p>
          </div>
          <SignUpForm />
        </div>
      </div>

      {/* Right side - Image Slider */}
      <div className="hidden lg:flex lg:w-1/2 bg-black p-2 flex-col justify-center items-center">
        <div className="relative w-full h-full">
          <Image
            src={images[currentImageIndex]}
            alt="Slider Image"
            layout="fill"
            objectFit="cover"
            priority // Ensures the image is loaded immediately
          />
          {/* Previous Button */}
          <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white bg-black/50 p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            onClick={prevImage}
          >
            &lt;
          </div>
          {/* Next Button */}
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white bg-black/50 p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            onClick={nextImage}
          >
            &gt;
          </div>
          {/* Pagination */}
          <div className="absolute bottom-4 w-full flex justify-center items-center space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                } cursor-pointer`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

