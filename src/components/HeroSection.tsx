import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#243949] to-[#517fa4] text-white p-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up [animation-delay:200ms]">
          <h1 className="text-5xl font-bold leading-tight">
            Your Personal AI Assistant for a Better Life
          </h1>
          <p className="text-xl text-gray-200">
            Track your activities, health, and location to receive personalized recommendations that help you live better every day.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-[#243949] hover:bg-gray-100">
              Download for iOS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Download for Android
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-up [animation-delay:400ms]">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Person using app"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};