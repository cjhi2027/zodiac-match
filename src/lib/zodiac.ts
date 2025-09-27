// 12간지 동물 정보
export const zodiacAnimals = [
  {
    id: "mouse",
    name: "쥐",
    image: "/attached_assets/animal/animal_01.png",
    featureKey: "zodiac.features.mouse",
  },
  {
    id: "ox",
    name: "소",
    image: "/attached_assets/animal/animal_02.png",
    featureKey: "zodiac.features.ox",
  },
  {
    id: "tiger",
    name: "호랑이",
    image: "/attached_assets/animal/animal_03.png",
    featureKey: "zodiac.features.tiger",
  },
  {
    id: "rabbit",
    name: "토끼",
    image: "/attached_assets/animal/animal_04.png",
    featureKey: "zodiac.features.rabbit",
  },
  {
    id: "dragon",
    name: "용",
    image: "/attached_assets/animal/animal_05.png",
    featureKey: "zodiac.features.dragon",
  },
  {
    id: "snake",
    name: "뱀",
    image: "/attached_assets/animal/animal_06.png",
    featureKey: "zodiac.features.snake",
  },
  {
    id: "horse",
    name: "말",
    image: "/attached_assets/animal/animal_07.png",
    featureKey: "zodiac.features.horse",
  },
  {
    id: "goat",
    name: "양",
    image: "/attached_assets/animal/animal_08.png",
    featureKey: "zodiac.features.goat",
  },
  {
    id: "monkey",
    name: "원숭이",
    image: "/attached_assets/animal/animal_09.png",
    featureKey: "zodiac.features.monkey",
  },
  {
    id: "rooster",
    name: "닭",
    image: "/attached_assets/animal/animal_10.png",
    featureKey: "zodiac.features.rooster",
  },
  {
    id: "dog",
    name: "개",
    image: "/attached_assets/animal/animal_11.png",
    featureKey: "zodiac.features.dog",
  },
  {
    id: "pig",
    name: "돼지",
    image: "/attached_assets/animal/animal_12.png",
    featureKey: "zodiac.features.pig",
  },
] as const;

export type ZodiacAnimal = (typeof zodiacAnimals)[number];

// 궁합 매트릭스 (첨부된 데이터)
const compatibilityMatrix = [
  [80, 100, 80, 60, 100, 80, 40, 60, 100, 60, 80, 80], // 쥐
  [100, 80, 80, 80, 60, 100, 60, 40, 80, 100, 60, 80], // 소
  [80, 80, 80, 100, 80, 40, 100, 80, 40, 60, 100, 80], // 호랑이
  [60, 80, 100, 80, 40, 100, 80, 100, 60, 40, 80, 100], // 토끼
  [100, 60, 80, 40, 80, 100, 80, 60, 100, 80, 40, 60], // 용
  [80, 100, 40, 100, 100, 80, 60, 80, 40, 100, 60, 40], // 뱀
  [40, 60, 100, 80, 80, 60, 80, 100, 80, 60, 100, 80], // 말
  [60, 40, 80, 100, 60, 80, 100, 80, 60, 40, 80, 100], // 양
  [100, 80, 40, 60, 100, 40, 80, 60, 80, 100, 60, 40], // 원숭이
  [60, 100, 60, 40, 80, 100, 60, 40, 100, 80, 40, 60], // 닭
  [80, 60, 100, 80, 40, 60, 100, 80, 60, 40, 80, 100], // 개
  [80, 80, 80, 100, 60, 40, 80, 100, 40, 60, 100, 80], // 돼지
];

// 생년으로 띠 계산 (기본 기준: 1900년이 쥐띠)
export function getZodiacByYear(year: number): ZodiacAnimal {
  const index = (year - 1900) % 12;
  const adjustedIndex = index < 0 ? index + 12 : index;
  return zodiacAnimals[adjustedIndex];
}

// 두 띠의 궁합 점수 계산
export function getCompatibilityScore(
  zodiac1: ZodiacAnimal,
  zodiac2: ZodiacAnimal
): number {
  const index1 = zodiacAnimals.findIndex(z => z.id === zodiac1.id);
  const index2 = zodiacAnimals.findIndex(z => z.id === zodiac2.id);
  return compatibilityMatrix[index1][index2];
}

// 궁합 점수에 따른 메시지 키 반환
export function getCompatibilityMessageKey(score: number): string {
  if (score >= 90) return "compatibility.excellent";
  if (score >= 80) return "compatibility.veryGood";
  if (score >= 70) return "compatibility.good";
  if (score >= 60) return "compatibility.fair";
  return "compatibility.poor";
}
