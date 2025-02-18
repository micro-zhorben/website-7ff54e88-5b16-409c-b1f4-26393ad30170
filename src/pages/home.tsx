import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { PreferenceForm } from "@/components/preference-form";
import { RecommendationSection } from "@/components/recommendation-section";
import { Coffee } from "lucide-react";

interface CoffeeRecommendation {
  id: string;
  name: string;
  description: string;
  roastLevel: string;
  intensity: number;
  isLiked: boolean;
}

const mockRecommendations = (preferences: {
  roastLevel: number;
  intensity: number;
  sweetness: number;
}): CoffeeRecommendation[] => {
  // This is a mock function that would be replaced with actual AI recommendations
  return [
    {
      id: "1",
      name: "Morning Bliss Blend",
      description: "A smooth, balanced coffee with notes of chocolate and caramel",
      roastLevel: preferences.roastLevel > 5 ? "Dark" : "Medium",
      intensity: preferences.intensity,
      isLiked: false,
    },
    {
      id: "2",
      name: "Harmony Reserve",
      description: "Rich and full-bodied with subtle hints of nuts and berries",
      roastLevel: preferences.roastLevel > 7 ? "Dark" : "Medium-Dark",
      intensity: preferences.intensity + 1,
      isLiked: false,
    },
    {
      id: "3",
      name: "Sunrise Specialty",
      description: "Bright and vibrant with citrus and floral notes",
      roastLevel: preferences.roastLevel < 4 ? "Light" : "Medium-Light",
      intensity: preferences.intensity - 1,
      isLiked: false,
    },
  ];
};

export function Home() {
  const [recommendations, setRecommendations] = useState<CoffeeRecommendation[]>([]);

  const handlePreferenceSubmit = (preferences: {
    roastLevel: number;
    intensity: number;
    sweetness: number;
  }) => {
    const newRecommendations = mockRecommendations(preferences);
    setRecommendations(newRecommendations);
  };

  const handleSelect = (id: string) => {
    // Handle selection logic
    console.log("Selected coffee:", id);
  };

  const handleLike = (id: string) => {
    setRecommendations((prev) =>
      prev.map((coffee) =>
        coffee.id === id ? { ...coffee, isLiked: !coffee.isLiked } : coffee
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2 font-bold">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline-block">AI Coffee Recommender</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <section className="space-y-4 text-center">
            <Typography.H1>
              Discover Your Perfect Coffee Match
            </Typography.H1>
            <Typography.Lead>
              Let our AI find the ideal coffee blend based on your unique taste preferences
            </Typography.Lead>
          </section>

          <section className="space-y-8">
            <PreferenceForm onSubmit={handlePreferenceSubmit} />
            
            <RecommendationSection
              recommendations={recommendations}
              onSelect={handleSelect}
              onLike={handleLike}
            />
          </section>
        </div>
      </main>
    </div>
  );
}