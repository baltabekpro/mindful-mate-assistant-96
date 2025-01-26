import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { 
  Activity, MapPin, Heart, Sun, Brain, Bell, Clock, 
  Home, Briefcase, School, Phone, MessageSquare, Route,
  ListCheck, Calendar, HeartPulse, Thermometer, AlertCircle,
  Ambulance, Film, Music, Apple, PlaySquare
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#243949] to-[#517fa4]">
      <Carousel className="w-full" opts={{ loop: true, align: "start" }} autoplay>
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
                  <div className="mt-4 flex items-center gap-2">
                    <Sun className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm">Идеальные условия для прогулки</span>
                  </div>
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

        {/* Анализ маршрутов */}
        <CarouselItem className="h-screen flex items-center justify-center">
          <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Анализ ваших маршрутов</h2>
            <div className="relative h-64 animate-fade-in">
              <svg className="absolute w-full h-full" viewBox="0 0 400 300">
                {/* Путь для анимации */}
                <path
                  d="M50,150 L200,50 L350,150"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  fill="none"
                  id="motionPath"
                />
                
                {/* Маркеры локаций */}
                <g transform="translate(50,150)">
                  <circle r="5" fill="#4ade80"/>
                  <Home className="h-8 w-8 text-green-400" />
                  <text x="10" y="25" fill="white">Дом</text>
                </g>
                
                <g transform="translate(200,50)">
                  <circle r="5" fill="#facc15"/>
                  <Briefcase className="h-8 w-8 text-yellow-400" />
                  <text x="10" y="25" fill="white">Работа</text>
                </g>
                
                <g transform="translate(350,150)">
                  <circle r="5" fill="#a78bfa"/>
                  <School className="h-8 w-8 text-purple-400" />
                  <text x="10" y="25" fill="white">Учёба</text>
                </g>

                {/* Анимированная точка */}
                <circle r="4" fill="white">
                  <animateMotion
                    dur="15s"
                    repeatCount="indefinite"
                    path="M50,150 L200,50 L350,150"
                    keyPoints="0;0.33;0.66;1"
                    keyTimes="0;0.33;0.66;1"
                  />
                </circle>
              </svg>
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
                
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up [animation-delay:200ms]">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="h-8 w-8 text-purple-400" />
                    <h3 className="text-xl font-semibold">План на завтра</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-yellow-400" />
                      <span>Встреча в 10:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-orange-400" />
                      <span>Прогулка в парке (хорошая погода)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

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

          <CarouselItem className="h-screen flex items-center justify-center">
            <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="h-8 w-8 text-red-400 animate-pulse" />
                  <h3 className="text-xl font-semibold">Анализ сердцебиения</h3>
                </div>
                
                <div className="relative h-40 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 400 100">
                    <path
                      d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50"
                      fill="none"
                      stroke="rgba(239, 68, 68, 0.5)"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                  </svg>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <span>Частота пульса: 120 уд/мин (Повышенная)</span>
                  </div>
                  
                  <div className="bg-red-500/20 p-4 rounded-lg">
                    <div className="flex items-center gap-4 mb-2">
                      <Ambulance className="h-6 w-6 text-red-400" />
                      <span className="font-semibold">Рекомендация:</span>
                    </div>
                    <p>Обратитесь в ближайший медпункт:</p>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span>Медицинский центр "Здоровье"</span>
                    </div>
                    <p className="text-sm text-gray-300 ml-7">ул. Ленина, 42 (500м от вас)</p>
                  </div>
                </div>
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
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <Apple className="h-8 w-8" />
                <span>App Store</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <PlaySquare className="h-8 w-8" />
                <span>Play Market</span>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
  );
};

export default Index;
