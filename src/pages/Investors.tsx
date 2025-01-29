import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, ChartBarIcon, RocketIcon, UsersIcon, DollarSignIcon, TargetIcon } from "lucide-react";

const Investors = () => {
  return (
    <div className="container mx-auto py-8 px-4 space-y-8 max-w-6xl animate-fade-up">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Инвестиционные возможности MindfulMate</h1>
        <p className="text-xl text-muted-foreground">Присоединяйтесь к революции в сфере персонального благополучия</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="text-center">
            <RocketIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Рост рынка</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">$85.8B</p>
            <p className="text-muted-foreground">Прогнозируемый объем рынка к 2025 году</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="text-center">
            <UsersIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Активные пользователи</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">100K+</p>
            <p className="text-muted-foreground">Ежемесячных активных пользователей</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="text-center">
            <ChartBarIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Рост выручки</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">245%</p>
            <p className="text-muted-foreground">Годовой рост выручки</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="text-center">
            <DollarSignIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>LTV</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">$850</p>
            <p className="text-muted-foreground">Пожизненная ценность клиента</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="text-center">
            <TargetIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Удержание</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">85%</p>
            <p className="text-muted-foreground">Показатель удержания через 12 месяцев</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="text-center">
            <BriefcaseIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>B2B Партнерства</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">50+</p>
            <p className="text-muted-foreground">Корпоративных партнеров</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center space-y-6">
        <h2 className="text-2xl font-bold">Готовы инвестировать в будущее благополучия?</h2>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="animate-pulse">
            <DollarSignIcon className="mr-2" />
            Стать инвестором
          </Button>
          <Button size="lg" variant="outline">
            <BriefcaseIcon className="mr-2" />
            Получить презентацию
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Investors;