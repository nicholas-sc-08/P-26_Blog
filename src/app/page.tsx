import Header from "@/components/Header";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <Carousel className="min-h-screen">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1 w-full max-h-screen">
                <Card className="">
                  <CardContent className="flex max-h-screen aspect-square items-center justify-center p-6">
                    <span>Artigo {index + 1}</span>
                    <span className="text-1xl font-semibold">Lorem ipsum</span>
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
}
