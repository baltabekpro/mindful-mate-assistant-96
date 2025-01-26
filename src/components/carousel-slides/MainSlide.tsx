import { Brain } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const MainSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-center text-white space-y-6 animate-fade-up">
        <h1 className="text-5xl font-bold leading-tight opacity-0 animate-fade-in [animation-delay:300ms]">
          Ваш Личный ИИ-Ассистент
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto opacity-0 animate-fade-in [animation-delay:600ms]">
          Умный помощник, который сделает вашу жизнь лучше
        </p>
        <div className="flex justify-center space-x-4">
          <Brain className="h-16 w-16 text-blue-400 animate-heart-beat" />
        </div>
      </div>
    </CarouselItem>
  );
};