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

// 궁합 상세 정보 타입 정의
export interface CompatibilityDetail {
  wittyKey: string; // 재치있고 간단한 설명 키
  elaborationKey: string; // 부연설명 키
  detailed: {
    basicKey: string; // 기본 설명 키
    cautionKey: string; // 주의할 점 키
    dateRecommendationKey: string; // 추천 데이트 키
  };
}

// 12개 띠별 궁합 상세 정보 (쥐띠 기준)
export const mouseCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.mouse.mouse.witty",
    elaborationKey: "compatibilityDetail.mouse.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.mouse.ox.witty",
    elaborationKey: "compatibilityDetail.mouse.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.ox.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.mouse.tiger.witty",
    elaborationKey: "compatibilityDetail.mouse.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.mouse.rabbit.witty",
    elaborationKey: "compatibilityDetail.mouse.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.mouse.dragon.witty",
    elaborationKey: "compatibilityDetail.mouse.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.mouse.snake.witty",
    elaborationKey: "compatibilityDetail.mouse.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.snake.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.mouse.horse.witty",
    elaborationKey: "compatibilityDetail.mouse.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.horse.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.mouse.goat.witty",
    elaborationKey: "compatibilityDetail.mouse.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.goat.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.mouse.monkey.witty",
    elaborationKey: "compatibilityDetail.mouse.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.mouse.rooster.witty",
    elaborationKey: "compatibilityDetail.mouse.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.mouse.dog.witty",
    elaborationKey: "compatibilityDetail.mouse.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.dog.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.mouse.pig.witty",
    elaborationKey: "compatibilityDetail.mouse.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.mouse.pig.detailed.basic",
      cautionKey: "compatibilityDetail.mouse.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.mouse.pig.detailed.dateRecommendation"
    }
  }
};

// 궁합 점수에 따른 메시지 키 반환 (기존 유지)
export function getCompatibilityMessageKey(score: number): string {
  if (score >= 90) return "compatibility.excellent";
  if (score >= 80) return "compatibility.veryGood";
  if (score >= 70) return "compatibility.good";
  if (score >= 60) return "compatibility.fair";
  return "compatibility.poor";
}

// 두 띠의 궁합 상세 정보 가져오기
export function getCompatibilityDetail(
  zodiac1: ZodiacAnimal,
  zodiac2: ZodiacAnimal
): CompatibilityDetail | null {
  // 현재는 쥐띠 기준으로만 구현 (추후 확장 가능)
  if (zodiac1.id === "mouse") {
    return mouseCompatibilityDetails[zodiac2.id] || null;
  }
  return null;
}
