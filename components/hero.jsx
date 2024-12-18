"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl pb-10 gradient-title">
          Handle Your Finances <br /> <span>Like a Pro</span>
        </h1>
        <p className="gradient-subtitle text-xl mb-8 max-w-3xl mx-auto">
          Track your expenses, optimize your budget with real-time insights, and
          save money with our simple and user-friendly platform powered by AI.
        </p>
        <div className="flex justify-center gap-10 mb-8">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 bg-emerald-800 hover:bg-emerald-600"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-emerald-800">
            <Button
              variant="outline"
              size="lg"
              className="px-8 hover:bg-gray-100 hover:text-emerald-800"
            >
              Learn More
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.webp"
              alt="hero"
              width={1280}
              height={720}
              priority
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
