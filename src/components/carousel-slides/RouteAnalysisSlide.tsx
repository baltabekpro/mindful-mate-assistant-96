import { Coffee, ShoppingBag, Home, Briefcase, School } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const RouteAnalysisSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Анализ ваших маршрутов</h2>
        <div className="relative h-96 animate-fade-in">
          <svg className="absolute w-full h-full" viewBox="0 0 400 400">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            <path
              d="M50,200 C100,150 150,150 200,200 S300,250 350,200"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="3"
              fill="none"
              id="mainPath"
            />

            <g transform="translate(125,175)">
              <Coffee className="h-6 w-6 text-blue-400" />
            </g>

            <g transform="translate(275,225)">
              <ShoppingBag className="h-6 w-6 text-green-400" />
            </g>

            <g transform="translate(50,200)">
              <Home className="h-8 w-8 text-green-400" />
            </g>
            
            <g transform="translate(200,200)">
              <Briefcase className="h-8 w-8 text-yellow-400" />
            </g>
            
            <g transform="translate(350,200)">
              <School className="h-8 w-8 text-purple-400" />
            </g>

            <circle r="4" fill="white">
              <animateMotion
                dur="15s"
                repeatCount="indefinite"
                path="M50,200 C100,150 150,150 200,200 S300,250 350,200"
                keyPoints="0;0.33;0.66;1"
                keyTimes="0;0.33;0.66;1"
              >
                <mpath href="#mainPath" />
              </animateMotion>
            </circle>
          </svg>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <Home className="h-6 w-6 mx-auto mb-2 text-green-400" />
            <p>8 часов</p>
            <p className="text-sm text-gray-300">Дома</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <Briefcase className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
            <p>9 часов</p>
            <p className="text-sm text-gray-300">На работе</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <School className="h-6 w-6 mx-auto mb-2 text-purple-400" />
            <p>3 часа</p>
            <p className="text-sm text-gray-300">На учёбе</p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};