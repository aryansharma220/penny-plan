"use client";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import Working from "@/components/working";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";



export default function Home() {

  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <div className="sm:bg-blur">
      <div className="flex flex-col mt-40 gap-20" >
        <Hero />
        <div data-aos="zoom-in-down">
          <Stats />
        </div>
        <div data-aos="zoom-in-down">
          <Features />
        </div>
        <div data-aos="zoom-in">
          <Working />
        </div>
        <div data-aos="zoom-in-up">
          <section className="py-20 ready-bg text-white">
            <div className="backdrop-blur-xl py-10 mx-10">
              <div className="text-center">
                <h1 className="text-4xl font-bold">Ready To Get Started?</h1>
              </div>
              <div className="text-center mt-10">
                <h1 className="text-2xl font-bold">Sign Up For Free</h1>
                <Link href="/dashboard">
                <Button className="mt-10 bg-emerald-800 hover:bg-emerald-600 animate-bounce">Get Started</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}