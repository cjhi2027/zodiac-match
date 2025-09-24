import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, ArrowLeft } from "lucide-react";
import { type ZodiacAnimal, getCompatibilityScore, getCompatibilityMessage, getRelationshipImage, getRelationshipDescription } from "@/lib/zodiac";

interface CompatibilityResultProps {
  myZodiac: ZodiacAnimal;
  partnerZodiac: ZodiacAnimal;
  onBack: () => void;
}

export default function CompatibilityResult({ myZodiac, partnerZodiac, onBack }: CompatibilityResultProps) {
  const score = getCompatibilityScore(myZodiac, partnerZodiac);
  const message = getCompatibilityMessage(score);
  const relationshipImage = getRelationshipImage(score);
  const relationshipDescription = getRelationshipDescription(score);
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
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
              <img 
                src={myZodiac.image} 
                alt={myZodiac.name}
                className="w-16 h-16 object-cover rounded-lg mx-auto mb-2"
                data-testid={`img-my-zodiac-${myZodiac.id}`}
                loading="lazy"
                decoding="async"
              />
              <p className="font-medium">{myZodiac.name}띠</p>
              <p className="text-sm text-muted-foreground">나</p>
            </div>
            
            <div className="flex items-center text-2xl text-primary">
              <Heart className="animate-pulse" />
            </div>
            
            <div className="text-center" data-testid="display-partner-zodiac">
              <img 
                src={partnerZodiac.image} 
                alt={partnerZodiac.name}
                className="w-16 h-16 object-cover rounded-lg mx-auto mb-2"
                data-testid={`img-partner-zodiac-${partnerZodiac.id}`}
                loading="lazy"
                decoding="async"
              />
              <p className="font-medium">{partnerZodiac.name}띠</p>
              <p className="text-sm text-muted-foreground">상대방</p>
            </div>
          </div>
          
          {/* 관계 이미지 */}
          <div className="text-center space-y-3">
            <img 
              src={relationshipImage} 
              alt={relationshipDescription}
              className="w-24 h-24 object-cover rounded-xl mx-auto"
              data-testid="img-relationship"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm text-muted-foreground italic" data-testid="text-relationship-description">
              {relationshipDescription}
            </p>
          </div>
          
          {/* 점수 표시 */}
          <div className="space-y-4">
            <div className="text-center">
              <div className={`text-6xl font-bold ${getScoreColor(score)}`} data-testid="text-compatibility-score">
                {score}점
              </div>
              <Progress value={score} className="mt-4" data-testid="progress-compatibility" />
            </div>
            
            <Card className="bg-muted">
              <CardContent className="p-4">
                <p className="text-lg leading-relaxed" data-testid="text-compatibility-message">
                  {message}
                </p>
              </CardContent>
            </Card>
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