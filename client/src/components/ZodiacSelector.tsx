import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { zodiacAnimals, type ZodiacAnimal } from "@/lib/zodiac";

interface ZodiacSelectorProps {
  selectedZodiac?: ZodiacAnimal;
  onSelect: (zodiac: ZodiacAnimal) => void;
  title: string;
}

export default function ZodiacSelector({ selectedZodiac, onSelect, title }: ZodiacSelectorProps) {
  return (
    <Card data-testid="card-zodiac-selector">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center" data-testid="text-title">
          {title}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {zodiacAnimals.map((animal) => (
            <Button
              key={animal.id}
              variant={selectedZodiac?.id === animal.id ? "default" : "outline"}
              className="h-auto py-3 flex flex-col gap-1 hover-elevate"
              onClick={() => {
                console.log(`${animal.name} selected`);
                onSelect(animal);
              }}
              data-testid={`button-zodiac-${animal.id}`}
            >
              <img 
                src={animal.image} 
                alt={animal.name}
                className="w-10 h-10 object-cover rounded-md"
                data-testid={`img-zodiac-${animal.id}`}
                loading="lazy"
                decoding="async"
              />
              <span className="text-xs font-medium">{animal.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}