import ResultPage from '../ResultPage';
import { zodiacAnimals } from '@/lib/zodiac';

export default function ResultPageExample() {
  const myZodiac = zodiacAnimals[2]; // 호랑이
  const partnerZodiac = zodiacAnimals[8]; // 원숭이
  
  return (
    <ResultPage
      myZodiac={myZodiac}
      partnerZodiac={partnerZodiac}
      onBack={() => console.log('Back to home from result page')}
    />
  );
}