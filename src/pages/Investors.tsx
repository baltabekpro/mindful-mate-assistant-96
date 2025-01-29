import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BriefcaseIcon, 
  ChartBarIcon, 
  RocketIcon, 
  UsersIcon, 
  DollarSignIcon, 
  TargetIcon,
  TrendingUpIcon,
  BuildingIcon,
  HandshakeIcon
} from "lucide-react";

const Investors = () => {
  return (
    <div className="container mx-auto py-8 px-4 space-y-12 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-12 animate-fade-up">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Инвестиционные возможности MindfulMate
        </h1>
        <p className="text-xl text-muted-foreground">
          Присоединяйтесь к революции в сфере персонального благополучия
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="transform transition-all hover:scale-105 bg-gradient-to-br from-background to-muted">
          <CardHeader className="text-center">
            <RocketIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Рост рынка</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">$85.8B</p>
            <p className="text-muted-foreground">Прогнозируемый объем рынка к 2025 году</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105 bg-gradient-to-br from-background to-muted">
          <CardHeader className="text-center">
            <UsersIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Активные пользователи</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">100K+</p>
            <p className="text-muted-foreground">Ежемесячных активных пользователей</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105 bg-gradient-to-br from-background to-muted">
          <CardHeader className="text-center">
            <ChartBarIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Рост выручки</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">245%</p>
            <p className="text-muted-foreground">Годовой рост выручки</p>
          </CardContent>
        </Card>
      </div>

      {/* Business Plan Section */}
      <div className="space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Бизнес-план развития</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="transform transition-all hover:scale-105">
            <CardHeader>
              <TrendingUpIcon className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Стратегия роста</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Расширение на международные рынки</p>
              <p>• Развитие B2B направления</p>
              <p>• Запуск новых продуктовых линеек</p>
              <p>• Усиление маркетинговых кампаний</p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105">
            <CardHeader>
              <BuildingIcon className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Финансовый план</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Привлечение инвестиций: $10M</p>
              <p>• Прогноз выручки: $50M к 2025</p>
              <p>• Достижение прибыльности: 2024</p>
              <p>• ROI для инвесторов: 300%</p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105">
            <CardHeader>
              <HandshakeIcon className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Партнерская сеть</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Интеграции с медицинскими центрами</p>
              <p>• Корпоративные программы благополучия</p>
              <p>• Сотрудничество с страховыми компаниями</p>
              <p>• Партнерства с производителями устройств</p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105">
            <CardHeader>
              <TargetIcon className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Целевые показатели</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• 1M+ пользователей к 2025</p>
              <p>• Присутствие в 50+ странах</p>
              <p>• NPS выше 70</p>
              <p>• Удержание пользователей >85%</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center space-y-6 bg-gradient-to-r from-muted to-accent p-8 rounded-lg">
        <h2 className="text-2xl font-bold">Готовы инвестировать в будущее благополучия?</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="animate-pulse bg-primary hover:bg-primary/90">
            <DollarSignIcon className="mr-2" />
            Стать инвестором
          </Button>
          <Button size="lg" variant="outline" className="backdrop-blur-sm">
            <BriefcaseIcon className="mr-2" />
            Получить презентацию
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Investors;