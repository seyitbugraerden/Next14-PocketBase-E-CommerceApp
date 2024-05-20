import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import firstImg from "@/images/slider_one.jpg";
import sectImg from "@/images/slider_two.jpg";
import Image from "next/image";

function CarouselSection() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Image className="w-100 h-[800px]" src={firstImg} alt="Slider" height={800} objectFit="cover"/>
        </CarouselItem>
        <CarouselItem>
          <Image className="w-100 h-[800px]" src={sectImg} alt="Slider" height={800} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default CarouselSection;
