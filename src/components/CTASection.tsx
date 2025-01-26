import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <div className="py-24 bg-gradient-to-r from-[#243949] to-[#517fa4] text-white">
      <div className="container mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold animate-fade-up">
          Start Your Journey to a Better Life Today
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          Download now and let our AI assistant help you make the most of every day.
          Available for both iOS and Android devices.
        </p>
        <div className="flex justify-center gap-4 animate-fade-up [animation-delay:400ms]">
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
    </div>
  );
};