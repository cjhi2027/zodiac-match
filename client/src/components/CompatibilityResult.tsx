import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ZodiacAnimal, getCompatibilityMessage, getCompatibilityScore } from "@/lib/zodiac";
import { ArrowLeft, Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface CompatibilityResultProps {
  myZodiac: ZodiacAnimal;
  partnerZodiac: ZodiacAnimal;
  onBack: () => void;
}

export default function CompatibilityResult({ myZodiac, partnerZodiac, onBack }: CompatibilityResultProps) {
  const finalScore = getCompatibilityScore(myZodiac, partnerZodiac);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const message = getCompatibilityMessage(finalScore);
  
  useEffect(() => {
    const duration = 2000; // 2초 동안 애니메이션
    const steps = 60; // 60프레임
    const stepDuration = duration / steps;
    const scoreIncrement = finalScore / steps;
    const progressIncrement = finalScore / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const newScore = Math.min(Math.floor(scoreIncrement * currentStep), finalScore);
      const newProgress = Math.min(progressIncrement * currentStep, finalScore);
      
      setAnimatedScore(newScore);
      setProgressValue(newProgress);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedScore(finalScore);
        setProgressValue(finalScore);
        // 점수 애니메이션 완료 후 0.5초 뒤에 메시지 표시
        setTimeout(() => {
          setShowMessage(true);
        }, 500);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [finalScore]);
  
  const getScoreColor = (score: number) => {
    if (score >= 81) return "text-blue-600 dark:text-blue-400";  // 81-100: 파란색
    if (score >= 61) return "text-green-600 dark:text-green-400"; // 61-80: 초록색
    if (score >= 41) return "text-yellow-600 dark:text-yellow-400"; // 41-60: 노란색
    return "text-red-600 dark:text-red-400"; // 0-40: 빨간색
  };

  const getProgressColor = (score: number) => {
    if (score >= 81) return "bg-blue-500";    // 81-100: 파란색
    if (score >= 61) return "bg-green-500";   // 61-80: 초록색
    if (score >= 41) return "bg-yellow-500";  // 41-60: 노란색
    return "bg-red-500"; // 0-40: 빨간색
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6" data-testid="container-compatibility-result">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl" data-testid="text-result-title">
            <Heart className="text-primary" />
            궁합 결과
            <Heart className="text-primary" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 띠 표시 */}
          <div className="flex items-center justify-center gap-8">
            <div className="text-center" data-testid="display-my-zodiac">
              <div className="text-4xl mb-2" role="img" aria-label={myZodiac.name}>
                <img 
                  src={myZodiac.image} 
                  alt={myZodiac.name}
                  className="w-[180px] h-[180px] object-contain mx-auto"
                />
              </div>
              <p className="font-medium">{myZodiac.name}띠</p>
              <p className="text-sm text-muted-foreground">나</p>
            </div>
            
            <div className="flex items-center text-2xl text-primary">
              <Heart className="animate-pulse" />
            </div>
            
            <div className="text-center" data-testid="display-partner-zodiac">
              <div className="text-4xl mb-2" role="img" aria-label={partnerZodiac.name}>
                <img 
                  src={partnerZodiac.image} 
                  alt={partnerZodiac.name}
                  className="w-[180px] h-[180px] object-contain mx-auto"
                />
              </div>
              <p className="font-medium">{partnerZodiac.name}띠</p>
              <p className="text-sm text-muted-foreground">상대방</p>
            </div>
          </div>
          
          {/* 점수 표시 */}
          <div className="space-y-4">
            <div className="text-center">
              <div className={`text-6xl font-bold ${getScoreColor(animatedScore)}`} data-testid="text-compatibility-score">
                {animatedScore}점
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-100 ${getProgressColor(animatedScore)}`}
                    style={{ width: `${progressValue}%` }}
                  />
                </div>
              </div>
            </div>
            
            {showMessage && (
              <Card className="bg-muted animate-in fade-in duration-500" data-testid="compatibility-message-card">
                <CardContent className="p-4">
                  <p className="text-lg leading-relaxed" data-testid="text-compatibility-message">
                    {message}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center">
        <Button
          onClick={() => {
            console.log('Back button clicked');
            onBack();
          }}
          variant="outline"
          size="lg"
          className="gap-2"
          data-testid="button-back"
        >
          <ArrowLeft className="w-4 h-4" />
          다시 확인하기
        </Button>
      </div>
    </div>
  );
}