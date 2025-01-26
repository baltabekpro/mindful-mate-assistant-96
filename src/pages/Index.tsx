import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Activity, MapPin, Heart, Sun, Brain, Bell, Clock, Home, Briefcase, School, Phone, MessageSquare, Route } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#243949] to-[#517fa4]">
      <Carousel className="w-full" opts={{ loop: true, align: "start" }} autoplay>
        <CarouselContent>
          {/* Главный слайд */}
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

          {/* Уведомления и рекомендации */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
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
                  <div className="mt-4 flex items-center gap-2">
                    <Sun className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm">Идеальные условия для прогулки</span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Анализ маршрутов */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center">Анализ ваших маршрутов</h2>
              <div className="relative h-64 animate-fade-in">
                <div className="absolute w-full h-full">
                  <Route className="absolute h-full w-full text-blue-400 opacity-20" />
                  <div className="absolute left-1/4 top-1/4 animate-pulse">
                    <Home className="h-8 w-8 text-green-400" />
                    <span className="text-sm">Дом</span>
                  </div>
                  <div className="absolute left-1/2 top-1/2 animate-pulse">
                    <Briefcase className="h-8 w-8 text-yellow-400" />
                    <span className="text-sm">Работа</span>
                  </div>
                  <div className="absolute right-1/4 bottom-1/4 animate-pulse">
                    <School className="h-8 w-8 text-purple-400" />
                    <span className="text-sm">Учёба</span>
                  </div>
                  <div 
                    className="absolute h-4 w-4 bg-white rounded-full animate-[moveAlongPath_10s_linear_infinite]"
                    style={{
                      offsetPath: "path('M100,100 L200,200 L300,150 L400,300')",
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 p-4 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                  <p>8 часов</p>
                  <p className="text-sm text-gray-300">Дома</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                  <p>9 часов</p>
                  <p className="text-sm text-gray-300">На работе</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                  <p>3 часа</p>
                  <p className="text-sm text-gray-300">На учёбе</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Анализ использования приложений */}
          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center">Анализ использования приложений</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-lg font-semibold">Социальные сети</h3>
                      <p className="text-red-400">3 часа (больше нормы)</p>
                    </div>
                  </div>
                  <div className="relative h-2 bg-gray-700 rounded-full">
                    <div className="absolute h-full w-3/4 bg-red-400 rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageSquare className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-lg font-semibold">Рабочие приложения</h3>
                      <p className="text-green-400">6 часов (в норме)</p>
                    </div>
                  </div>
                  <div className="relative h-2 bg-gray-700 rounded-full">
                    <div className="absolute h-full w-1/2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <p className="text-lg text-center">
                  ИИ рекомендует: Сократите время в социальных сетях на 1 час и добавьте активности на свежем воздухе 🌳
                </p>
              </div>
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