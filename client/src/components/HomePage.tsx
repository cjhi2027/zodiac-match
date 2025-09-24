import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type ZodiacAnimal, getZodiacByYear } from "@/lib/zodiac";
import { Calculator, Heart } from "lucide-react";
import { useState } from "react";
import BirthYearInput from "./BirthYearInput";
import ZodiacSelector from "./ZodiacSelector";

interface HomePageProps {
  onCheckCompatibility: (myZodiac: ZodiacAnimal, partnerZodiac: ZodiacAnimal) => void;
}

export default function HomePage({ onCheckCompatibility }: HomePageProps) {
  // 내 정보
  const [myZodiac, setMyZodiac] = useState<ZodiacAnimal | undefined>();
  const [myBirthYear, setMyBirthYear] = useState("");
  const [myInputType, setMyInputType] = useState<"zodiac" | "year">("zodiac");
  
  // 상대방 정보
  const [partnerZodiac, setPartnerZodiac] = useState<ZodiacAnimal | undefined>();
  const [partnerBirthYear, setPartnerBirthYear] = useState("");
  const [partnerInputType, setPartnerInputType] = useState<"zodiac" | "year">("zodiac");

  const getMyFinalZodiac = (): ZodiacAnimal | undefined => {
    if (myInputType === "zodiac") return myZodiac;
    if (myInputType === "year" && myBirthYear && parseInt(myBirthYear)) {
      return getZodiacByYear(parseInt(myBirthYear));
    }
    return undefined;
  };

  const getPartnerFinalZodiac = (): ZodiacAnimal | undefined => {
    if (partnerInputType === "zodiac") return partnerZodiac;
    if (partnerInputType === "year" && partnerBirthYear && parseInt(partnerBirthYear)) {
      return getZodiacByYear(parseInt(partnerBirthYear));
    }
    return undefined;
  };

  const canCheckCompatibility = (): boolean => {
    const myFinal = getMyFinalZodiac();
    const partnerFinal = getPartnerFinalZodiac();
    return !!(myFinal && partnerFinal);
  };

  const handleCheckCompatibility = () => {
    const myFinal = getMyFinalZodiac();
    const partnerFinal = getPartnerFinalZodiac();
    
    if (myFinal && partnerFinal) {
      console.log('Checking compatibility:', myFinal.name, 'vs', partnerFinal.name);
      onCheckCompatibility(myFinal, partnerFinal);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4" data-testid="container-homepage">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* 헤더 */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Heart className="text-primary text-3xl" />
            <h1 className="text-3xl font-bold" data-testid="text-main-title">
              띠별 궁합
            </h1>
            <Heart className="text-primary text-3xl" />
          </div>
          <p className="text-muted-foreground text-lg">
            12간지로 알아보는 커플 궁합 매칭 서비스
          </p>
        </div>

        {/* 입력 섹션 */}
        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {/* 내 정보 */}
          <Card data-testid="card-my-info">
            <CardHeader>
              <CardTitle className="text-center text-xl">내 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={myInputType} onValueChange={(value) => {
                console.log('My input type changed to:', value);
                setMyInputType(value as "zodiac" | "year");
                setMyZodiac(undefined);
                setMyBirthYear("");
              }}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="zodiac" data-testid="tab-my-zodiac">띠 선택</TabsTrigger>
                  <TabsTrigger value="year" data-testid="tab-my-year">생년 입력</TabsTrigger>
                </TabsList>
                <TabsContent value="zodiac" className="mt-4">
                  <ZodiacSelector
                    selectedZodiac={myZodiac}
                    onSelect={setMyZodiac}
                    title=""
                  />
                </TabsContent>
                <TabsContent value="year" className="mt-4">
                  <BirthYearInput
                    value={myBirthYear}
                    onChange={setMyBirthYear}
                    title=""
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* 상대방 정보 */}
          <Card data-testid="card-partner-info">
            <CardHeader>
              <CardTitle className="text-center text-xl">상대방 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={partnerInputType} onValueChange={(value) => {
                console.log('Partner input type changed to:', value);
                setPartnerInputType(value as "zodiac" | "year");
                setPartnerZodiac(undefined);
                setPartnerBirthYear("");
              }}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="zodiac" data-testid="tab-partner-zodiac">띠 선택</TabsTrigger>
                  <TabsTrigger value="year" data-testid="tab-partner-year">생년 입력</TabsTrigger>
                </TabsList>
                <TabsContent value="zodiac" className="mt-4">
                  <ZodiacSelector
                    selectedZodiac={partnerZodiac}
                    onSelect={setPartnerZodiac}
                    title=""
                  />
                </TabsContent>
                <TabsContent value="year" className="mt-4">
                  <BirthYearInput
                    value={partnerBirthYear}
                    onChange={setPartnerBirthYear}
                    title=""
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* 결과보기 버튼 */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleCheckCompatibility}
            disabled={!canCheckCompatibility()}
            className="gap-2 px-8 py-4 text-lg"
            data-testid="button-check-compatibility"
          >
            <Calculator className="w-5 h-5" />
            궁합 확인하기
          </Button>
          {!canCheckCompatibility() && (
            <p className="text-sm text-muted-foreground mt-2">
              내 정보와 상대방 정보를 모두 입력해주세요
            </p>
          )}
        </div>
      </div>
    </div>
  );
}