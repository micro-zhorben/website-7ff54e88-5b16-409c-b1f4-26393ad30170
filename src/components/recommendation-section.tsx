import { Typography } from "@/components/ui/typography";
import { CoffeeCard } from "./coffee-card";

interface Recommendation {
  id: string;
  name: string;
  description: string;
  roastLevel: string;
  intensity: number;
  isLiked?: boolean;
}

interface RecommendationSectionProps {
  recommendations: Recommendation[];
  onSelect: (id: string) => void;
  onLike: (id: string) => void;
}

export function RecommendationSection({
  recommendations,
  onSelect,
  onLike,
}: RecommendationSectionProps) {
  if (!recommendations.length) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div>
        <Typography.H2>Your Personalized Recommendations</Typography.H2>
        <Typography.Muted>
          Based on your preferences, we think you'll love these coffee blends
        </Typography.Muted>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            description={coffee.description}
            roastLevel={coffee.roastLevel}
            intensity={coffee.intensity}
            isLiked={coffee.isLiked}
            onSelect={() => onSelect(coffee.id)}
            onLike={() => onLike(coffee.id)}
          />
        ))}
      </div>
    </section>
  );
}