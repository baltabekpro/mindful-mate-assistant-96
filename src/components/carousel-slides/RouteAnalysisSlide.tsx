import { Coffee, ShoppingBag, Home, Briefcase, School, Activity, MapPin, Route, Navigation } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const RouteAnalysisSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Анализ маршрутов</h2>
        <div className="relative h-96">
          <svg className="absolute w-full h-full" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
              </linearGradient>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Animated route path */}
            <path
              d="M50,200 Q125,100 200,200 T350,200"
              stroke="url(#routeGradient)"
              strokeWidth="4"
              fill="none"
              id="mainPath"
              strokeLinecap="round"
            />

            {/* Moving dot along the path */}
            <circle r="8" fill="white" className="animate-route-dot">
              <animateMotion
                dur="10s"
                repeatCount="indefinite"
                path="M50,200 Q125,100 200,200 T350,200"
              />
            </circle>
          </svg>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-2">
              <Activity className="h-5 w-5 text-green-400" />
              <span className="text-lg font-semibold">12 км</span>
            </div>
            <p className="text-sm text-gray-300 mt-1">Пройдено сегодня</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-2">
              <Activity className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-semibold">45 мин</span>
            </div>
            <p className="text-sm text-gray-300 mt-1">В пути</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-2">
              <Activity className="h-5 w-5 text-purple-400" />
              <span className="text-lg font-semibold">3 места</span>
            </div>
            <p className="text-sm text-gray-300 mt-1">Посещено</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Navigation className="h-6 w-6 text-blue-400" />
              <h3 className="font-semibold">Популярные места</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Офис</span>
                <span className="text-sm text-blue-400">5 раз/неделю</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Спортзал</span>
                <span className="text-sm text-blue-400">3 раза/неделю</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Route className="h-6 w-6 text-green-400" />
              <h3 className="font-semibold">Рекомендации</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Новый парк</span>
                <span className="text-sm text-green-400">+2км к прогулке</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Велодорожка</span>
                <span className="text-sm text-green-400">Доступна</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
