import { ListCheck, Clock, Activity } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const DailySummarySlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up">
            <div className="flex items-center gap-4 mb-4">
              <ListCheck className="h-8 w-8 text-green-400" />
              <h3 className="text-xl font-semibold">Итоги дня</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>8 часов продуктивной работы</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-400" />
                <span>12,000 шагов пройдено</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};