import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { COMMUNITY_CARDS_DATA } from "@/data/constant";
import Image from "next/image";

const SuccessStory = () => {
  return (
    <div className="flex items-center justify-center w-full"> {/* Center the carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="md:w-full md:max-w-screen-lg w-svw" // Control carousel width
      >
        <CarouselContent className="flex gap-4">
        {COMMUNITY_CARDS_DATA.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                <div className="p-1">
                  <Card className="text-start items-start justify-start">
                    <CardContent className="flex flex-col p-6">
                      <div className="flex justify-between ">
                      <Image
                        src={item.profileImage}
                        alt={item.name}
                        className="w-12 h-12 md:w-14 md:h-14  rounded-full mb-1"
                      />
                      <div className="ml-2">
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-blue-500 hover:underline"
                      >
                        LinkedIn Profile
                      </a><br></br>
                      <span className="text-sm md:text-lg font-semibold ">{item.name}</span>
                      
                      </div>
                      </div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className="text-center text-gray-700 mt-2">{item.feedback}</p>
                      
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SuccessStory;
