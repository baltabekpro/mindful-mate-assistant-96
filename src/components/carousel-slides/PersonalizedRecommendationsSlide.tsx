import { Music, Film, Coffee, Book, Headphones, Star } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const PersonalizedRecommendationsSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Персональные рекомендации</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Утренние рекомендации */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <Coffee className="h-8 w-8 text-yellow-400" />
              <h3 className="text-xl font-semibold">Доброе утро!</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Music className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">Плейлист для поездки</span>
                </div>
                <p className="text-sm text-gray-300">Новая подборка в вашем стиле: электронная музыка для бодрого утра</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Coffee className="h-5 w-5 text-orange-400" />
                  <span className="font-medium">Кофейня по пути</span>
                </div>
                <p className="text-sm text-gray-300">Через 10 минут будете проезжать мимо вашей любимой кофейни</p>
              </div>
            </div>
          </div>

          {/* Вечерние рекомендации */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <Star className="h-8 w-8 text-purple-400" />
              <h3 className="text-xl font-semibold">Вечерний досуг</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Film className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Рекомендуемый фильм</span>
                </div>
                <p className="text-sm text-gray-300">Исходя из ваших предпочтений: "Inception" - научная фантастика, 148 мин</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Book className="h-5 w-5 text-green-400" />
                  <span className="font-medium">Вечернее чтение</span>
                </div>
                <p className="text-sm text-gray-300">Продолжите чтение "Мастер и Маргарита" - осталось 42 минуты</p>
              </div>
            </div>
          </div>

          {/* Статистика привычек */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <Headphones className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-semibold">Ваши привычки</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-gray-300">Любимый жанр музыки</p>
                <p className="font-medium mt-1">Электронная музыка</p>
                <p className="text-xs text-gray-400 mt-1">80% ваших прослушиваний</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-gray-300">Любимое время для фильмов</p>
                <p className="font-medium mt-1">21:00 - 23:00</p>
                <p className="text-xs text-gray-400 mt-1">Чаще всего по пятницам</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-gray-300">Время чтения</p>
                <p className="font-medium mt-1">30 минут в день</p>
                <p className="text-xs text-gray-400 mt-1">Обычно перед сном</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};