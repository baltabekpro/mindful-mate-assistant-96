import { Bell, Heart, MapPin, AlertTriangle } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const NotificationsSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="h-8 w-8 text-red-400 animate-pulse" />
                <div>
                  <h3 className="text-lg font-semibold">Срочное уведомление</h3>
                  <p className="text-sm text-gray-300">2 минуты назад</p>
                </div>
              </div>
              <p className="text-lg space-y-2">
                <span className="block text-red-400 font-semibold">Обнаружено повышенное сердцебиение (98 уд/мин)</span>
                <span className="block mt-2">Рекомендуемые действия:</span>
                <span className="block flex items-center gap-2 mt-1">
                  <MapPin className="h-5 w-5" />
                  Медицинский центр "Здоровье"
                </span>
                <span className="block text-sm text-gray-300">ул. Пушкина 45, тел: +7 (999) 123-45-67</span>
                <span className="block mt-2 text-sm">Записаться на приём? (Нажмите для подтверждения)</span>
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <Bell className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold">ИИ Ассистент</h3>
                  <p className="text-sm text-gray-300">15 минут назад</p>
                </div>
              </div>
              <p className="text-lg">
                На основе анализа ваших данных:
                <br />
                • Сон: 6.5 часов (ниже нормы)
                <br />
                • Стресс: повышенный
                <br />
                • Активность: низкая
                <br />
                <span className="block mt-2 text-yellow-400">
                  Рекомендация: Прогулка в парке (20 мин)
                </span>
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:400ms]">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold">Предупреждение</h3>
                  <p className="text-sm text-gray-300">1 час назад</p>
                </div>
              </div>
              <p className="text-lg">
                Обнаружен нерегулярный режим сна
                <br />
                <span className="block mt-2">
                  • Последние 3 дня: менее 6 часов
                  <br />
                  • Оптимальное время сна: 22:30
                  <br />
                  • Рекомендация: Начните подготовку ко сну в 21:45
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};