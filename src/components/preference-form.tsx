import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Typography } from "@/components/ui/typography";
import { useState } from "react";

interface PreferenceFormProps {
  onSubmit: (preferences: {
    roastLevel: number;
    intensity: number;
    sweetness: number;
  }) => void;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const [preferences, setPreferences] = useState({
    roastLevel: 5,
    intensity: 5,
    sweetness: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Coffee Preferences</CardTitle>
          <CardDescription>
            Tell us your taste preferences and we'll recommend the perfect coffee for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Typography.P>Roast Level</Typography.P>
            <Slider
              value={[preferences.roastLevel]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, roastLevel: value }))
              }
              max={10}
              step={1}
            />
            <div className="flex justify-between">
              <Typography.Small className="text-muted-foreground">Light</Typography.Small>
              <Typography.Small className="text-muted-foreground">Dark</Typography.Small>
            </div>
          </div>

          <div className="space-y-2">
            <Typography.P>Intensity</Typography.P>
            <Slider
              value={[preferences.intensity]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, intensity: value }))
              }
              max={10}
              step={1}
            />
            <div className="flex justify-between">
              <Typography.Small className="text-muted-foreground">Mild</Typography.Small>
              <Typography.Small className="text-muted-foreground">Strong</Typography.Small>
            </div>
          </div>

          <div className="space-y-2">
            <Typography.P>Sweetness</Typography.P>
            <Slider
              value={[preferences.sweetness]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, sweetness: value }))
              }
              max={10}
              step={1}
            />
            <div className="flex justify-between">
              <Typography.Small className="text-muted-foreground">Less Sweet</Typography.Small>
              <Typography.Small className="text-muted-foreground">More Sweet</Typography.Small>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Get Recommendations
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}