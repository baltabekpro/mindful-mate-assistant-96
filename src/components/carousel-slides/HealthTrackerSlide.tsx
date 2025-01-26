import { HeartPulse, Thermometer, Activity, Brain, MapPin, Phone } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const HealthTrackerSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-health-pulse">
            <div className="flex items-center gap-4 mb-4">
              <HeartPulse className="h-8 w-8 text-red-400" />
              <h3 className="text-xl font-semibold">Мониторинг здоровья</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-red-400" />
                <span>Пульс: 98 уд/мин</span>
                <span className="text-red-400 text-sm">(↑ Повышен)</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-green-400" />
                <span>Температура: 36.6°C</span>
              </div>
              <div className="p-4 bg-red-400/20 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Рекомендованные клиники:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 mt-1" />
                    <div>
                      <p className="font-medium">Медцентр "Здоровье"</p>
                      <p className="text-sm">ул. Пушкина 45</p>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <Phone className="h-4 w-4" />
                        <span>+7 (999) 123-45-67</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 mt-1" />
                    <div>
                      <p className="font-medium">Клиника "Медикал"</p>
                      <p className="text-sm">ул. Ленина 78</p>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <Phone className="h-4 w-4" />
                        <span>+7 (999) 765-43-21</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-health-pulse [animation-delay:200ms]">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="h-8 w-8 text-yellow-400" />
              <h3 className="text-xl font-semibold">Анализ состояния</h3>
            </div>
            <div className="space-y-4">
              <div className="relative h-2 bg-gray-700 rounded-full mb-2">
                <div className="absolute h-full w-3/4 bg-yellow-400 rounded-full" />
              </div>
              <p className="text-yellow-400">Уровень стресса: Повышенный</p>
              <div className="space-y-2">
                <p className="font-medium">Рекомендации:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Дыхательные упражнения (5-10 минут)</li>
                  <li>Прогулка на свежем воздухе</li>
                  <li>Ограничить потребление кофеина</li>
                  <li>Техника 4-7-8 для релаксации</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
