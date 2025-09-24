import { type ZodiacAnimal } from "@/lib/zodiac";
import CompatibilityResult from "./CompatibilityResult";

interface ResultPageProps {
  myZodiac: ZodiacAnimal;
  partnerZodiac: ZodiacAnimal;
  onBack: () => void;
}

export default function ResultPage({ myZodiac, partnerZodiac, onBack }: ResultPageProps) {
  return (
    <div className="min-h-screen bg-background p-4" data-testid="container-result-page">
      <div className="py-8">
        <CompatibilityResult
          myZodiac={myZodiac}
          partnerZodiac={partnerZodiac}
          onBack={onBack}
        />
      </div>
    </div>
  );
}