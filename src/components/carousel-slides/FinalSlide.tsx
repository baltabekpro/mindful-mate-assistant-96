import { Apple, PlaySquare } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const FinalSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-center text-white space-y-8 p-8">
        <h2 className="text-5xl font-bold animate-fade-up">
          Начните Использовать Прямо Сейчас
        </h2>
        <p className="text-2xl text-gray-200 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          Доступно для iOS и Android
        </p>
        <div className="flex justify-center gap-8 animate-download-bounce [animation-delay:400ms]">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-lg p-4">
            <Apple className="h-8 w-8" />
            <span>App Store</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-lg p-4">
            <PlaySquare className="h-8 w-8" />
            <span>Play Market</span>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};