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
    <Card data-testid="card-zodiac-selector" className="w-full">
      <CardContent className="p-6 overflow-hidden">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 max-w-full whitespace-nowrap md:grid md:grid-cols-3 md:gap-3 md:overflow-x-visible md:whitespace-normal">
          {zodiacAnimals.map((animal) => (
            <Button
              key={animal.id}
              variant={selectedZodiac?.id === animal.id ? "default" : "outline"}
              className="h-auto py-3 flex flex-col gap-1 hover-elevate min-w-[80px] flex-shrink-0"
              onClick={() => {
                console.log(`${animal.name} selected`);
                onSelect(animal);
              }}
              data-testid={`button-zodiac-${animal.id}`}
            >
              <img 
                src={animal.image} 
                alt={animal.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs font-medium">{animal.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}