import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import images from "@/constants/images";
import Container from "./container";

const Hero = () => {
  return (
    <div className="relative w-full">
      <Container className="px-4 md:px-12 mt-24">
        <section className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-1 flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Hungry?
            </p>
            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
              Just Come to <span>TiniMart & Order</span>
            </h2>
            <p className="text-base text-center md:text-left text-neutral-500 my-4">
              Discover a wide range of quality products at unbeatable prices!
              From fresh groceries to everyday essentials, TINIMART has
              everything you need, all in one place. Visit us today and
              experience the convenience and variety that our customers love!
            </p>
            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero font-semibold text-base">
                  Order Now
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full text-hero border border-hero font-semibold"
                  variant={"outline"}
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image src={images.homeBanner} alt="Hero" className="w-full" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
