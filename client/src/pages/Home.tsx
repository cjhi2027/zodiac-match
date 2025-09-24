import { useState } from "react";
import HomePage from "@/components/HomePage";
import ResultPage from "@/components/ResultPage";
import { type ZodiacAnimal } from "@/lib/zodiac";

export default function Home() {
  const [currentView, setCurrentView] = useState<"home" | "result">("home");
  const [myZodiac, setMyZodiac] = useState<ZodiacAnimal | null>(null);
  const [partnerZodiac, setPartnerZodiac] = useState<ZodiacAnimal | null>(null);

  const handleCheckCompatibility = (my: ZodiacAnimal, partner: ZodiacAnimal) => {
    setMyZodiac(my);
    setPartnerZodiac(partner);
    setCurrentView("result");
  };

  const handleBack = () => {
    setCurrentView("home");
  };

  if (currentView === "result" && myZodiac && partnerZodiac) {
    return (
      <ResultPage
        myZodiac={myZodiac}
        partnerZodiac={partnerZodiac}
        onBack={handleBack}
      />
    );
  }

  return <HomePage onCheckCompatibility={handleCheckCompatibility} />;
}