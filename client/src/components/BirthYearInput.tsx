import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getZodiacByYear } from "@/lib/zodiac";
import { useId } from "react";

interface BirthYearInputProps {
  value: string;
  onChange: (year: string) => void;
  title: string;
}

export default function BirthYearInput({ value, onChange, title }: BirthYearInputProps) {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 100;
  const maxYear = currentYear;
  const inputId = useId();
  
  const zodiac = value && parseInt(value) ? getZodiacByYear(parseInt(value)) : null;

  return (
    <Card data-testid="card-birth-year-input">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor={inputId} className="text-lg font-semibold" data-testid="text-title">
              {title}
            </Label>
            <p className="text-sm text-muted-foreground mt-1">
              생년을 입력하면 자동으로 띠가 계산됩니다
            </p>
          </div>
          
          <div className="space-y-3">
            <Input
              id="birth-year"
              type="number"
              placeholder="예: 1990"
              value={value}
              onChange={(e) => {
                console.log(`Birth year changed to: ${e.target.value}`);
                onChange(e.target.value);
              }}
              min={minYear}
              max={maxYear}
              className="text-center text-lg"
              data-testid="input-birth-year"
            />
            
            {zodiac && (
              <div className="text-center p-3 bg-muted rounded-md flex items-center justify-center gap-3" data-testid="display-zodiac-result">
                <img 
                  src={zodiac.image} 
                  alt={zodiac.name}
                  className="w-10 h-10 object-cover rounded-md"
                  data-testid={`img-zodiac-result-${zodiac.id}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-lg font-medium">{zodiac.name}띠</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}