import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Activity, MapPin, Heart, Sun, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#243949] to-[#517fa4]">
      <Carousel className="w-full" opts={{ loop: true, align: "start" }} autoplay>
        <CarouselContent>
          {/* Слайд с представлением приложения */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-center text-white space-y-6 animate-fade-up p-8">
              <h1 className="text-5xl font-bold leading-tight">
                Ваш Личный ИИ-Ассистент
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Умный помощник, который сделает вашу жизнь лучше
              </p>
            </div>
          </CarouselItem>

          {/* Отслеживание активности */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Activity className="h-16 w-16 text-blue-400 animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-center animate-fade-up">
                Умное Отслеживание Активности
              </h2>
              <div className="grid md:grid-cols-2 gap-8 animate-fade-up [animation-delay:200ms]">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Работа за компьютером"
                  className="rounded-lg shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Прогулка на природе"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <p className="text-xl text-center animate-fade-up [animation-delay:400ms]">
                Анализируем ваше время и предлагаем оптимальный баланс между работой и отдыхом
              </p>
            </div>
          </CarouselItem>

          {/* Геолокация */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <MapPin className="h-16 w-16 text-green-400 animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-center animate-fade-up">
                Умная Геолокация
              </h2>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Рабочее пространство"
                className="rounded-lg shadow-xl mx-auto animate-fade-up [animation-delay:200ms]"
              />
              <p className="text-xl text-center animate-fade-up [animation-delay:400ms]">
                Определяем ваши любимые места и оптимизируем маршруты
              </p>
            </div>
          </CarouselItem>

          {/* Здоровье */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Heart className="h-16 w-16 text-red-400 animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-center animate-fade-up">
                Мониторинг Здоровья
              </h2>
              <img
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
                alt="Умные часы"
                className="rounded-lg shadow-xl mx-auto animate-fade-up [animation-delay:200ms]"
              />
              <p className="text-xl text-center animate-fade-up [animation-delay:400ms]">
                Следим за вашим пульсом, сном и физической активностью
              </p>
            </div>
          </CarouselItem>

          {/* Рекомендации */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Sun className="h-16 w-16 text-yellow-400 animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-center animate-fade-up">
                Умные Рекомендации
              </h2>
              <div className="grid md:grid-cols-2 gap-8 animate-fade-up [animation-delay:200ms]">
                <img
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
                  alt="Пляж"
                  className="rounded-lg shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
                  alt="Горы"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <p className="text-xl text-center animate-fade-up [animation-delay:400ms]">
                Предлагаем идеальные занятия с учётом погоды и ваших интересов
              </p>
            </div>
          </CarouselItem>

          {/* Персонализация */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Brain className="h-16 w-16 text-purple-400 animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-center animate-fade-up">
                Персонализация
              </h2>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Персонализированные рекомендации"
                className="rounded-lg shadow-xl mx-auto animate-fade-up [animation-delay:200ms]"
              />
              <p className="text-xl text-center animate-fade-up [animation-delay:400ms]">
                Учимся на ваших привычках и становимся лучше с каждым днём
              </p>
            </div>
          </CarouselItem>

          {/* Финальный слайд */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-center text-white space-y-8 p-8 animate-fade-up">
              <h2 className="text-5xl font-bold">
                Начните Использовать Прямо Сейчас
              </h2>
              <p className="text-2xl text-gray-200 max-w-2xl mx-auto">
                Доступно для iOS и Android
              </p>
              <div className="flex justify-center gap-8">
                <img src="/app-store.png" alt="App Store" className="h-16" />
                <img src="/play-store.png" alt="Play Store" className="h-16" />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Index;