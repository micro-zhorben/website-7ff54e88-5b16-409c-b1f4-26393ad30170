import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Coffee, Heart } from "lucide-react";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  intensity: number;
  onSelect: () => void;
  onLike: () => void;
  isLiked?: boolean;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  intensity,
  onSelect,
  onLike,
  isLiked = false,
}: CoffeeCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={onLike}
          >
            <Heart
              className={isLiked ? "fill-accent text-accent" : "text-muted-foreground"}
            />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Typography.P>{description}</Typography.P>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Typography.Small className="text-muted-foreground">Roast Level</Typography.Small>
            <Typography.P className="font-medium">{roastLevel}</Typography.P>
          </div>
          <div>
            <Typography.Small className="text-muted-foreground">Intensity</Typography.Small>
            <Typography.P className="font-medium">{intensity}/10</Typography.P>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={onSelect}
        >
          <Coffee />
          Select This Blend
        </Button>
      </CardFooter>
    </Card>
  );
}