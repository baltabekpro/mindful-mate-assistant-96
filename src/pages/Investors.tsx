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
  HandshakeIcon,
  LineChartIcon,
  PieChartIcon,
  BarChartIcon
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "Янв", value: 100 },
  { month: "Фев", value: 200 },
  { month: "Мар", value: 300 },
  { month: "Апр", value: 450 },
  { month: "Май", value: 600 },
  { month: "Июн", value: 800 },
];

const marketShareData = [
  { name: "MindfulMate", value: 45 },
  { name: "Конкурент A", value: 25 },
  { name: "Конкурент B", value: 20 },
  { name: "Другие", value: 10 },
];

const userGrowthData = [
  { month: "Янв", users: 1000 },
  { month: "Фев", users: 2500 },
  { month: "Мар", users: 5000 },
  { month: "Апр", users: 8500 },
  { month: "Май", users: 12000 },
  { month: "Июн", users: 18000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Investors = () => {
  return (
    <div className="container mx-auto py-8 px-4 space-y-12 max-w-7xl bg-gradient-to-b from-background to-accent/10">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-12 animate-fade-up">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
          Инвестиционные возможности MindfulMate
        </h1>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
          Присоединяйтесь к революции в сфере персонального благополучия и станьте частью будущего здравоохранения
        </p>
        <div className="relative w-fit mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-600 rounded-lg blur opacity-30 animate-pulse" />
          <Button size="lg" className="relative bg-background hover:bg-accent text-xl px-8 py-6">
            Получить инвестиционный буклет
          </Button>
        </div>
      </div>

      {/* Key Metrics with Animation */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="transform transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-accent/20 border-accent/20">
          <CardHeader className="text-center">
            <RocketIcon className="w-12 h-12 mx-auto mb-4 text-primary animate-bounce" />
            <CardTitle className="text-2xl">Рост рынка</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">$85.8B</p>
            <p className="text-muted-foreground">Прогнозируемый объем рынка к 2025 году</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-accent/20 border-accent/20">
          <CardHeader className="text-center">
            <UsersIcon className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
            <CardTitle className="text-2xl">Активные пользователи</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">100K+</p>
            <p className="text-muted-foreground">Ежемесячных активных пользователей</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-accent/20 border-accent/20">
          <CardHeader className="text-center">
            <ChartBarIcon className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
            <CardTitle className="text-2xl">Рост выручки</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">245%</p>
            <p className="text-muted-foreground">Годовой рост выручки</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="space-y-12 mt-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Финансовые показатели
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Revenue Growth Chart */}
          <Card className="transform transition-all hover:scale-105 hover:shadow-xl p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChartIcon className="text-primary" />
                Рост выручки
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Market Share Chart */}
          <Card className="transform transition-all hover:scale-105 hover:shadow-xl p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="text-primary" />
                Доля рынка
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* User Growth Chart */}
          <Card className="transform transition-all hover:scale-105 hover:shadow-xl p-6 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChartIcon className="text-primary" />
                Рост пользовательской базы
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#8884d8">
                    {userGrowthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Business Plan Section with Enhanced Visuals */}
      <div className="space-y-8 mt-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Стратегия развития
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="transform transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-accent/20">
            <CardHeader>
              <TrendingUpIcon className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Стратегия роста</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Выход на международные рынки (США, ЕС, Азия)</p>
              <p>• Развитие B2B направления и корпоративных программ</p>
              <p>• Запуск новых продуктовых линеек</p>
              <p>• Масштабирование маркетинговых кампаний</p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-accent/20">
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

          <Card className="transform transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-accent/20">
            <CardHeader>
              <HandshakeIcon className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Партнерская сеть</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Интеграции с ведущими медицинскими центрами</p>
              <p>• Корпоративные программы благополучия</p>
              <p>• Сотрудничество с страховыми компаниями</p>
              <p>• Партнерства с производителями устройств</p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-accent/20">
            <CardHeader>
              <TargetIcon className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Целевые показатели</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• 1M+ пользователей к 2025</p>
              <p>• Присутствие в 50+ странах</p>
              <p>• NPS выше 70</p>
              <p>• Удержание пользователей &gt;85%</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="mt-16 text-center space-y-6 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-600/10 p-12 rounded-lg backdrop-blur-sm">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Готовы инвестировать в будущее благополучия?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Присоединяйтесь к нам в создании глобальной платформы для улучшения качества жизни миллионов людей
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 animate-pulse" />
            <Button size="lg" className="relative bg-primary hover:bg-primary/90">
              <DollarSignIcon className="mr-2" />
              Стать инвестором
            </Button>
          </div>
          <Button size="lg" variant="outline" className="backdrop-blur-sm border-primary/20 hover:bg-accent/20">
            <BriefcaseIcon className="mr-2" />
            Получить презентацию
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Investors;