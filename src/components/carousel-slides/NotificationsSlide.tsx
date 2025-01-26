import { Bell, Film, Music } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const NotificationsSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <Bell className="h-8 w-8 text-blue-400 animate-pulse" />
                <div>
                  <h3 className="text-lg font-semibold">Рекомендация от ИИ</h3>
                  <p className="text-sm text-gray-300">Сейчас</p>
                </div>
              </div>
              <p className="text-lg">
                Отличная погода для прогулки! 🌞
                <br />
                Температура: 22°C
                <br />
                Качество воздуха: Отличное
                <br />
                Рекомендую посетить парк Президента
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <Film className="h-8 w-8 text-purple-400" />
                <div>
                  <h3 className="text-lg font-semibold">Вечерний досуг</h3>
                  <p className="text-sm text-gray-300">Основано на ваших привычках</p>
                </div>
              </div>
              <p className="text-lg">
                Время для вечернего фильма! 🎬
                <br />
                Рекомендуем посмотреть:
                <br />
                "Inception" - Научная фантастика
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:400ms]">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <Music className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-lg font-semibold">Утренний плейлист</h3>
                  <p className="text-sm text-gray-300">Для поездки на работу</p>
                </div>
              </div>
              <p className="text-lg">
                Новый плейлист готов! 🎵
                <br />
                Подборка энергичных треков
                <br />
                для продуктивного начала дня
              </p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};