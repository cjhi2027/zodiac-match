// 12간지 동물 정보
export const zodiacAnimals = [
  { id: 'mouse', name: '쥐', emoji: '🐭' },
  { id: 'ox', name: '소', emoji: '🐂' },
  { id: 'tiger', name: '호랑이', emoji: '🐅' },
  { id: 'rabbit', name: '토끼', emoji: '🐰' },
  { id: 'dragon', name: '용', emoji: '🐲' },
  { id: 'snake', name: '뱀', emoji: '🐍' },
  { id: 'horse', name: '말', emoji: '🐎' },
  { id: 'goat', name: '양', emoji: '🐐' },
  { id: 'monkey', name: '원숭이', emoji: '🐵' },
  { id: 'rooster', name: '닭', emoji: '🐓' },
  { id: 'dog', name: '개', emoji: '🐕' },
  { id: 'pig', name: '돼지', emoji: '🐷' }
] as const;

export type ZodiacAnimal = typeof zodiacAnimals[number];

// 궁합 매트릭스 (첨부된 데이터)
const compatibilityMatrix = [
  [80, 100, 80, 60, 100, 80, 40, 60, 100, 60, 80, 80],  // 쥐
  [100, 80, 80, 80, 60, 100, 60, 40, 80, 100, 60, 80],  // 소
  [80, 80, 80, 100, 80, 40, 100, 80, 40, 60, 100, 80],  // 호랑이
  [60, 80, 100, 80, 40, 100, 80, 100, 60, 40, 80, 100], // 토끼
  [100, 60, 80, 40, 80, 100, 80, 60, 100, 80, 40, 60],  // 용
  [80, 100, 40, 100, 100, 80, 60, 80, 40, 100, 60, 40], // 뱀
  [40, 60, 100, 80, 80, 60, 80, 100, 80, 60, 100, 80],  // 말
  [60, 40, 80, 100, 60, 80, 100, 80, 60, 40, 80, 100],  // 양
  [100, 80, 40, 60, 100, 40, 80, 60, 80, 100, 60, 40],  // 원숭이
  [60, 100, 60, 40, 80, 100, 60, 40, 100, 80, 40, 60],  // 닭
  [80, 60, 100, 80, 40, 60, 100, 80, 60, 40, 80, 100],  // 개
  [80, 80, 80, 100, 60, 40, 80, 100, 40, 60, 100, 80]   // 돼지
];

// 생년으로 띠 계산 (기본 기준: 1900년이 쥐띠)
export function getZodiacByYear(year: number): ZodiacAnimal {
  const index = (year - 1900) % 12;
  const adjustedIndex = index < 0 ? index + 12 : index;
  return zodiacAnimals[adjustedIndex];
}

// 두 띠의 궁합 점수 계산
export function getCompatibilityScore(zodiac1: ZodiacAnimal, zodiac2: ZodiacAnimal): number {
  const index1 = zodiacAnimals.findIndex(z => z.id === zodiac1.id);
  const index2 = zodiacAnimals.findIndex(z => z.id === zodiac2.id);
  return compatibilityMatrix[index1][index2];
}

// 궁합 점수에 따른 메시지
export function getCompatibilityMessage(score: number): string {
  if (score >= 90) return '환상적인 궁합이에요! 최고의 파트너입니다.';
  if (score >= 80) return '매우 좋은 궁합이에요! 서로 잘 맞는 관계입니다.';
  if (score >= 70) return '좋은 궁합이에요! 노력하면 행복한 관계가 될 수 있어요.';
  if (score >= 60) return '평범한 궁합이에요. 서로 이해하려 노력하면 좋을 것 같아요.';
  if (score >= 50) return '조금 어려울 수 있어요. 하지만 사랑이 있다면 극복할 수 있어요!';
  return '쉽지 않은 궁합이에요. 많은 이해와 배려가 필요합니다.';
}