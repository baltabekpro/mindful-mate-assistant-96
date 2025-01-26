import { Brain } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const MainSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-center text-white space-y-6 animate-fade-up p-8">
        <h1 className="text-5xl font-bold leading-tight">
          Ваш Личный ИИ-Ассистент
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Умный помощник, который сделает вашу жизнь лучше
        </p>
        <div className="flex justify-center space-x-4">
          <Brain className="h-16 w-16 text-blue-400 animate-pulse" />
        </div>
      </div>
    </CarouselItem>
  );
};