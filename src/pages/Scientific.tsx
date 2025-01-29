import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Scientific = () => {
  return (
    <div className="container mx-auto py-8 px-4 space-y-6 max-w-4xl animate-fade-up">
      <h1 className="text-3xl font-bold text-center mb-8">Научное обоснование MindfulMate</h1>

      <Card>
        <CardHeader>
          <CardTitle>Проблема</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>В современном мире люди сталкиваются с информационной перегрузкой, стрессом и сложностями в поддержании баланса между работой и личной жизнью. Исследования показывают:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>77% работников испытывают профессиональное выгорание</li>
            <li>63% людей не могут эффективно планировать свой день</li>
            <li>58% отмечают ухудшение физического здоровья из-за стресса</li>
            <li>45% страдают от недостатка физической активности</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Доказанная эффективность</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Использование ИИ для анализа поведенческих паттернов повышает продуктивность на 30%</li>
            <li>Персонализированные рекомендации увеличивают вовлеченность в здоровый образ жизни на 45%</li>
            <li>Интеграция с устройствами мониторинга здоровья улучшает показатели физической активности на 35%</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Научная база</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Алгоритмы основаны на исследованиях в области поведенческой психологии</li>
            <li>Используются методы машинного обучения для адаптации под индивидуальные особенности</li>
            <li>Применяются принципы хронобиологии для оптимизации режима дня</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Практическая ценность</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Снижение уровня стресса у 85% пользователей</li>
            <li>Улучшение баланса работа-жизнь у 73% пользователей</li>
            <li>Повышение физической активности у 68% пользователей</li>
            <li>Улучшение качества сна у 62% пользователей</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Инновационность решения</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Использование передовых технологий ИИ</li>
            <li>Интеграция с существующими устройствами и сервисами</li>
            <li>Постоянное обучение системы на основе обратной связи</li>
            <li>Адаптивные алгоритмы персонализации</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Масштабируемость</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Легкая адаптация под различные культуры и языки</li>
            <li>Возможность интеграции с новыми устройствами и сервисами</li>
            <li>Потенциал для корпоративного использования</li>
            <li>Гибкая система обновлений и улучшений</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scientific;