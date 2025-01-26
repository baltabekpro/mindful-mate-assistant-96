import { ListCheck, Clock, Activity, Calendar, MapPin, Route } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const DailySummarySlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 opacity-0 animate-count-up">
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

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 opacity-0 animate-count-up [animation-delay:200ms]">
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="h-8 w-8 text-purple-400" />
              <h3 className="text-xl font-semibold">План на завтра</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>Встреча в офисе (10:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <Route className="h-5 w-5 text-blue-400" />
                <span>Новый маршрут для пробежки</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-400" />
                <span>Цель: 15,000 шагов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
