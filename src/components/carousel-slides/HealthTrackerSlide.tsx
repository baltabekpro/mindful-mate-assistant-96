import { HeartPulse, Thermometer, Activity, Brain } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const HealthTrackerSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up">
            <div className="flex items-center gap-4 mb-4">
              <HeartPulse className="h-8 w-8 text-red-400" />
              <h3 className="text-xl font-semibold">Трекер здоровья</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-green-400" />
                <span>Температура: 36.6°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-400" />
                <span>Давление: 120/80</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up [animation-delay:200ms]">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="h-8 w-8 text-yellow-400" />
              <h3 className="text-xl font-semibold">Трекер выгорания</h3>
            </div>
            <div className="space-y-4">
              <div className="relative h-2 bg-gray-700 rounded-full mb-2">
                <div className="absolute h-full w-3/4 bg-yellow-400 rounded-full" />
              </div>
              <p className="text-yellow-400">Уровень стресса: Повышенный</p>
              <p>Рекомендация: Сделайте перерыв на медитацию</p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};