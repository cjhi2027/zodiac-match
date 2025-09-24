import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getZodiacByYear } from "@/lib/zodiac";

interface BirthYearInputProps {
  value: string;
  onChange: (year: string) => void;
  title: string;
}

export default function BirthYearInput({ value, onChange, title }: BirthYearInputProps) {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 100;
  const maxYear = currentYear;
  
  const zodiac = value && parseInt(value) ? getZodiacByYear(parseInt(value)) : null;

  return (
    <Card data-testid="card-birth-year-input">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
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
              <div className="text-center p-3 bg-muted rounded-md" data-testid="display-zodiac-result">
                <span className="text-2xl mr-2" role="img" aria-label={zodiac.name}>
                  {zodiac.emoji}
                </span>
                <span className="text-lg font-medium">{zodiac.name}띠</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}