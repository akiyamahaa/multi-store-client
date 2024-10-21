import getProducts from "@/actions/get-products";
import Container from "@/components/container";
import PopularContent from "@/components/popular-content";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Products } from "@/types-db";
import { FileHeart, Salad, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function HomePage() {
  let products: Products[] = [];
  try {
    products = await getProducts({ isFeatured: true });
    console.log("🚀 ~ HomePage ~ products:", products);
  } catch (err: any) {
    console.log(err.message);
  }

  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Hungry?
            </p>
            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
              Just Come to <span>Foodied & Order</span>
            </h2>
            <p className="text-base text-center md:text-left text-neutral-500 my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              minima ratione quod veniam sit quia autem odio voluptatem aliquid
              delectus velit amet ullam rem, iusto est illo distinctio nemo
              tempora?
            </p>
            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero">
                  Order Now
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full"
                  variant={"outline"}
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full relative h-[560px] flex items-center justify-center">
              <Image
                src={"/img/Food.png"}
                alt="Hero"
                className="object-contain w-full h-full absolute"
                fill
              />
            </div>
          </div>
        </section>
        {/* Popular section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
          {products?.slice(0, 4).map((item) => (
            <PopularContent data={item} key={item.id} />
          ))}
        </section>
        {/* Why choose us */}
        <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Why choose us?
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            We are not just a supplier; we are a reliable companion on your
            journey toward a healthier lifestyle and elevated living. With a
            commitment to delivering high-quality products and services, the
            safety and satisfaction of our customers are always our top
            priorities. Health, satisfaction, and convenience are the core
            values we pursue. So why not choose us among countless other
            options?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Salad className="w-8 h-8 text-hero" />
              <CardTitle className="text-center">
                DEDICATED CUSTOMER <br /> CARE SERVICE
              </CardTitle>
              <CardDescription className="text-center">
                We take pride in our attentive customer care service, always
                listening to and promptly responding to your every need. Your
                satisfaction drives us, and our support team is always ready to
                accompany you, ensuring you have a flawless shopping experience
                from start to finish.
              </CardDescription>
            </Card>
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <FileHeart className="w-8 h-8 text-hero" />
              <CardTitle>TOP-QUALITY PRODUCTS</CardTitle>
              <CardDescription className="text-center">
                We are committed to providing only premium imported products
                with clear and trustworthy origins. Each product undergoes a
                rigorous inspection process to ensure that only the finest items
                reach you, giving you complete peace of mind when using them.
              </CardDescription>
            </Card>
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Truck className="w-8 h-8 text-hero" />
              <CardTitle>Fast Delivery</CardTitle>
              <CardDescription className="text-center">
                We understand that your time is incredibly valuable. Our fast
                and accurate delivery service ensures that you won’t have to
                wait long to receive your favorite products.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* Our chef sections */}
      </Container>
    </>
  );
}
