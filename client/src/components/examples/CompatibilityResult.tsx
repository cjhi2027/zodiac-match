import CompatibilityResult from '../CompatibilityResult';
import { zodiacAnimals } from '@/lib/zodiac';

export default function CompatibilityResultExample() {
  const myZodiac = zodiacAnimals[0]; // 쥐
  const partnerZodiac = zodiacAnimals[1]; // 소
  
  return (
    <div className="p-4">
      <CompatibilityResult
        myZodiac={myZodiac}
        partnerZodiac={partnerZodiac}
        onBack={() => console.log('Back to home')}
      />
    </div>
  );
}