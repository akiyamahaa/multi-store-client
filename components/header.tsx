"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/container";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import MainNav from "./main-nav";
import { useEffect, useState } from "react";
import CartActionButton from "./cart-action";
import Image from "next/image";
import images from "@/constants/images";

interface HeaderProps {
  userId: string | null;
}

export default function Header({ userId }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full z-50 transition",
        scrolled
          ? "fixed top-0 left-0 right-0 bg-white shadow-lg"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-12 flex py-4 items-center shadow-sm">
          <Link
            href={"/"}
            className="uppercase flex gap-x-2 font-bold text-neutral-700 text-lg md:text-xl"
          >
            <Image src={images.logo} alt="logo" className="h-16 w-full" />
          </Link>
          {/* Main navbar */}

          <MainNav scrolled={scrolled} />

          {userId ? (
            <div className="ml-4 flex items-center space-x-4">
              <UserButton />
            </div>
          ) : (
            <div className="flex items-center space-x-2 ml-4">
              <Link href={"/sign-in"}>
                <Button
                  variant={"outline"}
                  className="text-hero border border-hero"
                >
                  Login
                </Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="bg-hero text-white hover:bg-green-500">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
          {userId && <CartActionButton />}
        </div>
      </Container>
    </header>
  );
}
