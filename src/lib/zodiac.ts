// 12간지 동물 정보
export const zodiacAnimals = [
  {
    id: "mouse",
    name: "쥐",
    image: "/attached_assets/animal/animal_01.png",
    characterImage: "/attached_assets/animal_character/animal_character_01.png",
    featureKey: "zodiac.features.mouse",
  },
  {
    id: "ox",
    name: "소",
    image: "/attached_assets/animal/animal_02.png",
    characterImage: "/attached_assets/animal_character/animal_character_02.png",
    featureKey: "zodiac.features.ox",
  },
  {
    id: "tiger",
    name: "호랑이",
    image: "/attached_assets/animal/animal_03.png",
    characterImage: "/attached_assets/animal_character/animal_character_03.png",
    featureKey: "zodiac.features.tiger",
  },
  {
    id: "rabbit",
    name: "토끼",
    image: "/attached_assets/animal/animal_04.png",
    characterImage: "/attached_assets/animal_character/animal_character_04.png",
    featureKey: "zodiac.features.rabbit",
  },
  {
    id: "dragon",
    name: "용",
    image: "/attached_assets/animal/animal_05.png",
    characterImage: "/attached_assets/animal_character/animal_character_05.png",
    featureKey: "zodiac.features.dragon",
  },
  {
    id: "snake",
    name: "뱀",
    image: "/attached_assets/animal/animal_06.png",
    characterImage: "/attached_assets/animal_character/animal_character_06.png",
    featureKey: "zodiac.features.snake",
  },
  {
    id: "horse",
    name: "말",
    image: "/attached_assets/animal/animal_07.png",
    characterImage: "/attached_assets/animal_character/animal_character_07.png",
    featureKey: "zodiac.features.horse",
  },
  {
    id: "goat",
    name: "양",
    image: "/attached_assets/animal/animal_08.png",
    characterImage: "/attached_assets/animal_character/animal_character_08.png",
    featureKey: "zodiac.features.goat",
  },
  {
    id: "monkey",
    name: "원숭이",
    image: "/attached_assets/animal/animal_09.png",
    characterImage: "/attached_assets/animal_character/animal_character_09.png",
    featureKey: "zodiac.features.monkey",
  },
  {
    id: "rooster",
    name: "닭",
    image: "/attached_assets/animal/animal_10.png",
    characterImage: "/attached_assets/animal_character/animal_character_10.png",
    featureKey: "zodiac.features.rooster",
  },
  {
    id: "dog",
    name: "개",
    image: "/attached_assets/animal/animal_11.png",
    characterImage: "/attached_assets/animal_character/animal_character_11.png",
    featureKey: "zodiac.features.dog",
  },
  {
    id: "pig",
    name: "돼지",
    image: "/attached_assets/animal/animal_12.png",
    characterImage: "/attached_assets/animal_character/animal_character_12.png",
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

// 소띠 기준 궁합 상세 정보
export const oxCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.ox.mouse.witty",
    elaborationKey: "compatibilityDetail.ox.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.ox.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.ox.ox.witty",
    elaborationKey: "compatibilityDetail.ox.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.ox.detailed.basic",
      cautionKey: "compatibilityDetail.ox.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.ox.tiger.witty",
    elaborationKey: "compatibilityDetail.ox.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.ox.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.ox.rabbit.witty",
    elaborationKey: "compatibilityDetail.ox.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.ox.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.ox.dragon.witty",
    elaborationKey: "compatibilityDetail.ox.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.ox.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.ox.snake.witty",
    elaborationKey: "compatibilityDetail.ox.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.snake.detailed.basic",
      cautionKey: "compatibilityDetail.ox.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.ox.horse.witty",
    elaborationKey: "compatibilityDetail.ox.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.horse.detailed.basic",
      cautionKey: "compatibilityDetail.ox.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.ox.goat.witty",
    elaborationKey: "compatibilityDetail.ox.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.goat.detailed.basic",
      cautionKey: "compatibilityDetail.ox.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.ox.monkey.witty",
    elaborationKey: "compatibilityDetail.ox.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.ox.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.ox.rooster.witty",
    elaborationKey: "compatibilityDetail.ox.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.ox.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.ox.dog.witty",
    elaborationKey: "compatibilityDetail.ox.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.dog.detailed.basic",
      cautionKey: "compatibilityDetail.ox.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.ox.pig.witty",
    elaborationKey: "compatibilityDetail.ox.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.ox.pig.detailed.basic",
      cautionKey: "compatibilityDetail.ox.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.ox.pig.detailed.dateRecommendation"
    }
  }
};

// 호랑이띠 기준 궁합 상세 정보
export const tigerCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.tiger.mouse.witty",
    elaborationKey: "compatibilityDetail.tiger.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.tiger.ox.witty",
    elaborationKey: "compatibilityDetail.tiger.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.ox.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.tiger.tiger.witty",
    elaborationKey: "compatibilityDetail.tiger.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.tiger.rabbit.witty",
    elaborationKey: "compatibilityDetail.tiger.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.tiger.dragon.witty",
    elaborationKey: "compatibilityDetail.tiger.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.tiger.snake.witty",
    elaborationKey: "compatibilityDetail.tiger.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.snake.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.tiger.horse.witty",
    elaborationKey: "compatibilityDetail.tiger.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.horse.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.tiger.goat.witty",
    elaborationKey: "compatibilityDetail.tiger.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.goat.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.tiger.monkey.witty",
    elaborationKey: "compatibilityDetail.tiger.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.tiger.rooster.witty",
    elaborationKey: "compatibilityDetail.tiger.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.tiger.dog.witty",
    elaborationKey: "compatibilityDetail.tiger.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.dog.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.tiger.pig.witty",
    elaborationKey: "compatibilityDetail.tiger.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.tiger.pig.detailed.basic",
      cautionKey: "compatibilityDetail.tiger.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.tiger.pig.detailed.dateRecommendation"
    }
  }
};

// 토끼띠 기준 궁합 상세 정보
export const rabbitCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.rabbit.mouse.witty",
    elaborationKey: "compatibilityDetail.rabbit.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.rabbit.ox.witty",
    elaborationKey: "compatibilityDetail.rabbit.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.ox.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.rabbit.tiger.witty",
    elaborationKey: "compatibilityDetail.rabbit.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.rabbit.rabbit.witty",
    elaborationKey: "compatibilityDetail.rabbit.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.rabbit.dragon.witty",
    elaborationKey: "compatibilityDetail.rabbit.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.rabbit.snake.witty",
    elaborationKey: "compatibilityDetail.rabbit.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.snake.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.rabbit.horse.witty",
    elaborationKey: "compatibilityDetail.rabbit.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.horse.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.rabbit.goat.witty",
    elaborationKey: "compatibilityDetail.rabbit.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.goat.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.rabbit.monkey.witty",
    elaborationKey: "compatibilityDetail.rabbit.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.rabbit.rooster.witty",
    elaborationKey: "compatibilityDetail.rabbit.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.rabbit.dog.witty",
    elaborationKey: "compatibilityDetail.rabbit.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.dog.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.rabbit.pig.witty",
    elaborationKey: "compatibilityDetail.rabbit.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rabbit.pig.detailed.basic",
      cautionKey: "compatibilityDetail.rabbit.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rabbit.pig.detailed.dateRecommendation"
    }
  }
};

// 용띠 기준 궁합 상세 정보
export const dragonCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.dragon.mouse.witty",
    elaborationKey: "compatibilityDetail.dragon.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.dragon.ox.witty",
    elaborationKey: "compatibilityDetail.dragon.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.ox.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.dragon.tiger.witty",
    elaborationKey: "compatibilityDetail.dragon.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.dragon.rabbit.witty",
    elaborationKey: "compatibilityDetail.dragon.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.dragon.dragon.witty",
    elaborationKey: "compatibilityDetail.dragon.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.dragon.snake.witty",
    elaborationKey: "compatibilityDetail.dragon.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.snake.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.dragon.horse.witty",
    elaborationKey: "compatibilityDetail.dragon.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.horse.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.dragon.goat.witty",
    elaborationKey: "compatibilityDetail.dragon.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.goat.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.dragon.monkey.witty",
    elaborationKey: "compatibilityDetail.dragon.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.dragon.rooster.witty",
    elaborationKey: "compatibilityDetail.dragon.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.dragon.dog.witty",
    elaborationKey: "compatibilityDetail.dragon.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.dog.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.dragon.pig.witty",
    elaborationKey: "compatibilityDetail.dragon.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dragon.pig.detailed.basic",
      cautionKey: "compatibilityDetail.dragon.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dragon.pig.detailed.dateRecommendation"
    }
  }
};

// 뱀띠 기준 궁합 상세 정보
export const snakeCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.snake.mouse.witty",
    elaborationKey: "compatibilityDetail.snake.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.snake.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.snake.ox.witty",
    elaborationKey: "compatibilityDetail.snake.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.ox.detailed.basic",
      cautionKey: "compatibilityDetail.snake.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.snake.tiger.witty",
    elaborationKey: "compatibilityDetail.snake.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.snake.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.snake.rabbit.witty",
    elaborationKey: "compatibilityDetail.snake.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.snake.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.snake.dragon.witty",
    elaborationKey: "compatibilityDetail.snake.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.snake.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.snake.snake.witty",
    elaborationKey: "compatibilityDetail.snake.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.snake.detailed.basic",
      cautionKey: "compatibilityDetail.snake.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.snake.horse.witty",
    elaborationKey: "compatibilityDetail.snake.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.horse.detailed.basic",
      cautionKey: "compatibilityDetail.snake.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.snake.goat.witty",
    elaborationKey: "compatibilityDetail.snake.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.goat.detailed.basic",
      cautionKey: "compatibilityDetail.snake.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.snake.monkey.witty",
    elaborationKey: "compatibilityDetail.snake.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.snake.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.snake.rooster.witty",
    elaborationKey: "compatibilityDetail.snake.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.snake.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.snake.dog.witty",
    elaborationKey: "compatibilityDetail.snake.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.dog.detailed.basic",
      cautionKey: "compatibilityDetail.snake.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.snake.pig.witty",
    elaborationKey: "compatibilityDetail.snake.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.snake.pig.detailed.basic",
      cautionKey: "compatibilityDetail.snake.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.snake.pig.detailed.dateRecommendation"
    }
  }
};

// 말띠 기준 궁합 상세 정보
export const horseCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.horse.mouse.witty",
    elaborationKey: "compatibilityDetail.horse.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.horse.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.horse.ox.witty",
    elaborationKey: "compatibilityDetail.horse.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.ox.detailed.basic",
      cautionKey: "compatibilityDetail.horse.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.horse.tiger.witty",
    elaborationKey: "compatibilityDetail.horse.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.horse.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.horse.rabbit.witty",
    elaborationKey: "compatibilityDetail.horse.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.horse.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.horse.dragon.witty",
    elaborationKey: "compatibilityDetail.horse.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.horse.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.horse.snake.witty",
    elaborationKey: "compatibilityDetail.horse.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.snake.detailed.basic",
      cautionKey: "compatibilityDetail.horse.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.horse.horse.witty",
    elaborationKey: "compatibilityDetail.horse.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.horse.detailed.basic",
      cautionKey: "compatibilityDetail.horse.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.horse.goat.witty",
    elaborationKey: "compatibilityDetail.horse.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.goat.detailed.basic",
      cautionKey: "compatibilityDetail.horse.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.horse.monkey.witty",
    elaborationKey: "compatibilityDetail.horse.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.horse.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.horse.rooster.witty",
    elaborationKey: "compatibilityDetail.horse.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.horse.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.horse.dog.witty",
    elaborationKey: "compatibilityDetail.horse.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.dog.detailed.basic",
      cautionKey: "compatibilityDetail.horse.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.horse.pig.witty",
    elaborationKey: "compatibilityDetail.horse.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.horse.pig.detailed.basic",
      cautionKey: "compatibilityDetail.horse.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.horse.pig.detailed.dateRecommendation"
    }
  }
};

// 양띠 기준 궁합 상세 정보
export const goatCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.goat.mouse.witty",
    elaborationKey: "compatibilityDetail.goat.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.goat.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.goat.ox.witty",
    elaborationKey: "compatibilityDetail.goat.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.ox.detailed.basic",
      cautionKey: "compatibilityDetail.goat.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.goat.tiger.witty",
    elaborationKey: "compatibilityDetail.goat.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.goat.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.goat.rabbit.witty",
    elaborationKey: "compatibilityDetail.goat.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.goat.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.goat.dragon.witty",
    elaborationKey: "compatibilityDetail.goat.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.goat.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.goat.snake.witty",
    elaborationKey: "compatibilityDetail.goat.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.snake.detailed.basic",
      cautionKey: "compatibilityDetail.goat.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.goat.horse.witty",
    elaborationKey: "compatibilityDetail.goat.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.horse.detailed.basic",
      cautionKey: "compatibilityDetail.goat.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.goat.goat.witty",
    elaborationKey: "compatibilityDetail.goat.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.goat.detailed.basic",
      cautionKey: "compatibilityDetail.goat.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.goat.monkey.witty",
    elaborationKey: "compatibilityDetail.goat.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.goat.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.goat.rooster.witty",
    elaborationKey: "compatibilityDetail.goat.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.goat.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.goat.dog.witty",
    elaborationKey: "compatibilityDetail.goat.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.dog.detailed.basic",
      cautionKey: "compatibilityDetail.goat.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.goat.pig.witty",
    elaborationKey: "compatibilityDetail.goat.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.goat.pig.detailed.basic",
      cautionKey: "compatibilityDetail.goat.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.goat.pig.detailed.dateRecommendation"
    }
  }
};

// 원숭이띠 기준 궁합 상세 정보
export const monkeyCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.monkey.mouse.witty",
    elaborationKey: "compatibilityDetail.monkey.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.monkey.ox.witty",
    elaborationKey: "compatibilityDetail.monkey.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.ox.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.monkey.tiger.witty",
    elaborationKey: "compatibilityDetail.monkey.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.monkey.rabbit.witty",
    elaborationKey: "compatibilityDetail.monkey.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.monkey.dragon.witty",
    elaborationKey: "compatibilityDetail.monkey.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.monkey.snake.witty",
    elaborationKey: "compatibilityDetail.monkey.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.snake.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.monkey.horse.witty",
    elaborationKey: "compatibilityDetail.monkey.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.horse.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.monkey.goat.witty",
    elaborationKey: "compatibilityDetail.monkey.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.goat.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.monkey.monkey.witty",
    elaborationKey: "compatibilityDetail.monkey.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.monkey.rooster.witty",
    elaborationKey: "compatibilityDetail.monkey.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.monkey.dog.witty",
    elaborationKey: "compatibilityDetail.monkey.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.dog.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.monkey.pig.witty",
    elaborationKey: "compatibilityDetail.monkey.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.monkey.pig.detailed.basic",
      cautionKey: "compatibilityDetail.monkey.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.monkey.pig.detailed.dateRecommendation"
    }
  }
};

// 닭띠 기준 궁합 상세 정보
export const roosterCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.rooster.mouse.witty",
    elaborationKey: "compatibilityDetail.rooster.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.rooster.ox.witty",
    elaborationKey: "compatibilityDetail.rooster.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.ox.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.rooster.tiger.witty",
    elaborationKey: "compatibilityDetail.rooster.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.rooster.rabbit.witty",
    elaborationKey: "compatibilityDetail.rooster.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.rooster.dragon.witty",
    elaborationKey: "compatibilityDetail.rooster.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.rooster.snake.witty",
    elaborationKey: "compatibilityDetail.rooster.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.snake.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.rooster.horse.witty",
    elaborationKey: "compatibilityDetail.rooster.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.horse.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.rooster.goat.witty",
    elaborationKey: "compatibilityDetail.rooster.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.goat.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.rooster.monkey.witty",
    elaborationKey: "compatibilityDetail.rooster.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.rooster.rooster.witty",
    elaborationKey: "compatibilityDetail.rooster.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.rooster.dog.witty",
    elaborationKey: "compatibilityDetail.rooster.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.dog.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.rooster.pig.witty",
    elaborationKey: "compatibilityDetail.rooster.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.rooster.pig.detailed.basic",
      cautionKey: "compatibilityDetail.rooster.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.rooster.pig.detailed.dateRecommendation"
    }
  }
};

// 개띠 기준 궁합 상세 정보
export const dogCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.dog.mouse.witty",
    elaborationKey: "compatibilityDetail.dog.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.dog.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.dog.ox.witty",
    elaborationKey: "compatibilityDetail.dog.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.ox.detailed.basic",
      cautionKey: "compatibilityDetail.dog.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.dog.tiger.witty",
    elaborationKey: "compatibilityDetail.dog.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.dog.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.dog.rabbit.witty",
    elaborationKey: "compatibilityDetail.dog.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.dog.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.dog.dragon.witty",
    elaborationKey: "compatibilityDetail.dog.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.dog.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.dog.snake.witty",
    elaborationKey: "compatibilityDetail.dog.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.snake.detailed.basic",
      cautionKey: "compatibilityDetail.dog.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.dog.horse.witty",
    elaborationKey: "compatibilityDetail.dog.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.horse.detailed.basic",
      cautionKey: "compatibilityDetail.dog.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.dog.goat.witty",
    elaborationKey: "compatibilityDetail.dog.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.goat.detailed.basic",
      cautionKey: "compatibilityDetail.dog.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.dog.monkey.witty",
    elaborationKey: "compatibilityDetail.dog.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.dog.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.dog.rooster.witty",
    elaborationKey: "compatibilityDetail.dog.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.dog.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.dog.dog.witty",
    elaborationKey: "compatibilityDetail.dog.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.dog.detailed.basic",
      cautionKey: "compatibilityDetail.dog.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.dog.pig.witty",
    elaborationKey: "compatibilityDetail.dog.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.dog.pig.detailed.basic",
      cautionKey: "compatibilityDetail.dog.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.dog.pig.detailed.dateRecommendation"
    }
  }
};

// 돼지띠 기준 궁합 상세 정보
export const pigCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.pig.mouse.witty",
    elaborationKey: "compatibilityDetail.pig.mouse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.mouse.detailed.basic",
      cautionKey: "compatibilityDetail.pig.mouse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.mouse.detailed.dateRecommendation"
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.pig.ox.witty",
    elaborationKey: "compatibilityDetail.pig.ox.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.ox.detailed.basic",
      cautionKey: "compatibilityDetail.pig.ox.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.ox.detailed.dateRecommendation"
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.pig.tiger.witty",
    elaborationKey: "compatibilityDetail.pig.tiger.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.tiger.detailed.basic",
      cautionKey: "compatibilityDetail.pig.tiger.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.tiger.detailed.dateRecommendation"
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.pig.rabbit.witty",
    elaborationKey: "compatibilityDetail.pig.rabbit.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.rabbit.detailed.basic",
      cautionKey: "compatibilityDetail.pig.rabbit.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.rabbit.detailed.dateRecommendation"
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.pig.dragon.witty",
    elaborationKey: "compatibilityDetail.pig.dragon.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.dragon.detailed.basic",
      cautionKey: "compatibilityDetail.pig.dragon.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.dragon.detailed.dateRecommendation"
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.pig.snake.witty",
    elaborationKey: "compatibilityDetail.pig.snake.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.snake.detailed.basic",
      cautionKey: "compatibilityDetail.pig.snake.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.snake.detailed.dateRecommendation"
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.pig.horse.witty",
    elaborationKey: "compatibilityDetail.pig.horse.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.horse.detailed.basic",
      cautionKey: "compatibilityDetail.pig.horse.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.horse.detailed.dateRecommendation"
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.pig.goat.witty",
    elaborationKey: "compatibilityDetail.pig.goat.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.goat.detailed.basic",
      cautionKey: "compatibilityDetail.pig.goat.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.goat.detailed.dateRecommendation"
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.pig.monkey.witty",
    elaborationKey: "compatibilityDetail.pig.monkey.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.monkey.detailed.basic",
      cautionKey: "compatibilityDetail.pig.monkey.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.monkey.detailed.dateRecommendation"
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.pig.rooster.witty",
    elaborationKey: "compatibilityDetail.pig.rooster.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.rooster.detailed.basic",
      cautionKey: "compatibilityDetail.pig.rooster.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.rooster.detailed.dateRecommendation"
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.pig.dog.witty",
    elaborationKey: "compatibilityDetail.pig.dog.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.dog.detailed.basic",
      cautionKey: "compatibilityDetail.pig.dog.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.dog.detailed.dateRecommendation"
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.pig.pig.witty",
    elaborationKey: "compatibilityDetail.pig.pig.elaboration",
    detailed: {
      basicKey: "compatibilityDetail.pig.pig.detailed.basic",
      cautionKey: "compatibilityDetail.pig.pig.detailed.caution",
      dateRecommendationKey: "compatibilityDetail.pig.pig.detailed.dateRecommendation"
    }
  }
};

// 두 띠의 궁합 상세 정보 가져오기
export function getCompatibilityDetail(
  zodiac1: ZodiacAnimal,
  zodiac2: ZodiacAnimal
): CompatibilityDetail | null {
  // 쥐띠 기준
  if (zodiac1.id === "mouse") {
    return mouseCompatibilityDetails[zodiac2.id] || null;
  }
  // 소띠 기준
  if (zodiac1.id === "ox") {
    return oxCompatibilityDetails[zodiac2.id] || null;
  }
  // 호랑이띠 기준
  if (zodiac1.id === "tiger") {
    return tigerCompatibilityDetails[zodiac2.id] || null;
  }
  // 토끼띠 기준
  if (zodiac1.id === "rabbit") {
    return rabbitCompatibilityDetails[zodiac2.id] || null;
  }
  // 용띠 기준
  if (zodiac1.id === "dragon") {
    return dragonCompatibilityDetails[zodiac2.id] || null;
  }
  // 뱀띠 기준
  if (zodiac1.id === "snake") {
    return snakeCompatibilityDetails[zodiac2.id] || null;
  }
  // 말띠 기준
  if (zodiac1.id === "horse") {
    return horseCompatibilityDetails[zodiac2.id] || null;
  }
  // 양띠 기준
  if (zodiac1.id === "goat") {
    return goatCompatibilityDetails[zodiac2.id] || null;
  }
  // 원숭이띠 기준
  if (zodiac1.id === "monkey") {
    return monkeyCompatibilityDetails[zodiac2.id] || null;
  }
  // 닭띠 기준
  if (zodiac1.id === "rooster") {
    return roosterCompatibilityDetails[zodiac2.id] || null;
  }
  // 개띠 기준
  if (zodiac1.id === "dog") {
    return dogCompatibilityDetails[zodiac2.id] || null;
  }
  // 돼지띠 기준
  if (zodiac1.id === "pig") {
    return pigCompatibilityDetails[zodiac2.id] || null;
  }
  return null;
}
