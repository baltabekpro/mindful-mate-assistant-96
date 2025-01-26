import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Smart Planning",
    description: "Helps you rationally distribute time and take care of your health",
    stat: "30%",
    statLabel: "More Productive",
  },
  {
    title: "Personalized Advice",
    description: "Health, recreation and leisure based on your preferences",
    stat: "85%",
    statLabel: "User Satisfaction",
  },
  {
    title: "Better Life Quality",
    description: "Improved productivity and well-being through smart recommendations",
    stat: "45%",
    statLabel: "Better Work-Life Balance",
  },
];

export const BenefitsSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">
          Transform Your Daily Life
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-blue-600">{benefit.stat}</div>
              <div className="text-gray-500">{benefit.statLabel}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
              <CheckCircle className="mx-auto text-green-500 h-8 w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};