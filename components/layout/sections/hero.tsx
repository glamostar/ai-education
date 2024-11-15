"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import MorphingText from "./MorphingText";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge> */}

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Learning with us
              </span>
              <MorphingText 
                words={['Maths', 'Physics', 'Science','History']} 
                speed={100}
                delay={2000}
              />
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/2 font-bold group/arrow">
              Get Started for free(7 days)
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                // href="https://github.com/nobruf/shadcn-landing-page.git"
                href= ""
                target="_blank"
              >
                Play button
                
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14 grid grid-cols-3 gap-4">
          {/* <div className="absolute top-2  lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div> */}
          <div className="md:col-span-1 col-span-3">
            <p className="p-6 pt-0 text-muted-foreground">
              Join our vibrant Discord community! Connect, share, and grow with like-minded enthusiasts. Click to dive in! 🚀
            </p>
          </div>
          <div className="md:col-span-2 col-span-3">
            <Image
              width={1200}
              height={1200}
              className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
              src={
                theme === "light"
                  ? "/hero-image-light.jpeg"
                  : "/hero-image-dark.jpeg"
              }
              alt="dashboard"
            />
          </div>
        </div>
          {/* <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg">
          </div> */}
      </div>
    </section>
  );
};
