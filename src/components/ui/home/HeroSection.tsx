import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "antd";
import { sliderData } from "@/static/sliderData";
const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      <Carousel
        className=" overflow-hidden rounded-lg shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent relative">
                <CardContent className="flex items-center justify-center h-[500px] p-0">
                  <img
                    src={slider?.image}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    alt=""
                  />
                  <div className="absolute left-[20%] space-y-4">
                    <h1 className="bg-[#3335] px-10 py-4 text-white font-extrabold text-4xl rounded-md">
                      {slider.name}
                    </h1>
                    <p className="bg-[#3335] px-10 py-1 text-white font-semibold text-lg rounded-md h-auto">
                      {slider.title}
                    </p>
                    <Button className="bg-[#1e88e5] border-none text-white text-lg font-semibold px-10  py-6 ">
                      Browse Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default HeroSection;
