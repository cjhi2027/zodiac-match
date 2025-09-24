import ZodiacSelector from '../ZodiacSelector';
import { zodiacAnimals } from '@/lib/zodiac';
import { useState } from 'react';
import type { ZodiacAnimal } from '@/lib/zodiac';

export default function ZodiacSelectorExample() {
  const [selected, setSelected] = useState<ZodiacAnimal>(zodiacAnimals[0]);
  
  return (
    <div className="max-w-md mx-auto p-4">
      <ZodiacSelector
        selectedZodiac={selected}
        onSelect={setSelected}
        title="내 띠 선택"
      />
    </div>
  );
}