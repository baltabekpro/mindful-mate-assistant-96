import { Activity, MapPin, Heart, Sun, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Activity Tracking",
    description: "Analyzes time spent in different apps and locations to provide smart suggestions.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    icon: MapPin,
    title: "Smart Geolocation",
    description: "Uses location data to understand your routines and suggest optimal schedules.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Integrates with smart watches to track your pulse, steps, sleep, and activity.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
  },
  {
    icon: Sun,
    title: "Smart Recommendations",
    description: "Analyzes weather, air quality, and city events to suggest perfect activities.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    icon: Brain,
    title: "AI Personalization",
    description: "Learns your habits to provide increasingly personalized recommendations.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

export const FeaturesSection = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">
          Powerful Features for a Better Life
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};