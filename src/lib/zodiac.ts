// 12간지 동물 정보
export const zodiacAnimals = [
  {
    id: "mouse",
    name: "쥐",
    image: "/attached_assets/animal/animal_01.png",
    characterImage: "/attached_assets/animal_character/animal_character_01.png",
    featureKey: "zodiac.features.mouse",
    wittyKey: "zodiac.witty.mouse",
    elaborationKey: "zodiac.elaboration.mouse",
    giftKey: "zodiac.gift.mouse",
    giftDetailKey: "zodiac.giftDetail.mouse",
  },
  {
    id: "ox",
    name: "소",
    image: "/attached_assets/animal/animal_02.png",
    characterImage: "/attached_assets/animal_character/animal_character_02.png",
    featureKey: "zodiac.features.ox",
    wittyKey: "zodiac.witty.ox",
    elaborationKey: "zodiac.elaboration.ox",
    giftKey: "zodiac.gift.ox",
    giftDetailKey: "zodiac.giftDetail.ox",
  },
  {
    id: "tiger",
    name: "호랑이",
    image: "/attached_assets/animal/animal_03.png",
    characterImage: "/attached_assets/animal_character/animal_character_03.png",
    featureKey: "zodiac.features.tiger",
    wittyKey: "zodiac.witty.tiger",
    elaborationKey: "zodiac.elaboration.tiger",
    giftKey: "zodiac.gift.tiger",
    giftDetailKey: "zodiac.giftDetail.tiger",
  },
  {
    id: "rabbit",
    name: "토끼",
    image: "/attached_assets/animal/animal_04.png",
    characterImage: "/attached_assets/animal_character/animal_character_04.png",
    featureKey: "zodiac.features.rabbit",
    wittyKey: "zodiac.witty.rabbit",
    elaborationKey: "zodiac.elaboration.rabbit",
    giftKey: "zodiac.gift.rabbit",
    giftDetailKey: "zodiac.giftDetail.rabbit",
  },
  {
    id: "dragon",
    name: "용",
    image: "/attached_assets/animal/animal_05.png",
    characterImage: "/attached_assets/animal_character/animal_character_05.png",
    featureKey: "zodiac.features.dragon",
    wittyKey: "zodiac.witty.dragon",
    elaborationKey: "zodiac.elaboration.dragon",
    giftKey: "zodiac.gift.dragon",
    giftDetailKey: "zodiac.giftDetail.dragon",
  },
  {
    id: "snake",
    name: "뱀",
    image: "/attached_assets/animal/animal_06.png",
    characterImage: "/attached_assets/animal_character/animal_character_06.png",
    featureKey: "zodiac.features.snake",
    wittyKey: "zodiac.witty.snake",
    elaborationKey: "zodiac.elaboration.snake",
    giftKey: "zodiac.gift.snake",
    giftDetailKey: "zodiac.giftDetail.snake",
  },
  {
    id: "horse",
    name: "말",
    image: "/attached_assets/animal/animal_07.png",
    characterImage: "/attached_assets/animal_character/animal_character_07.png",
    featureKey: "zodiac.features.horse",
    wittyKey: "zodiac.witty.horse",
    elaborationKey: "zodiac.elaboration.horse",
    giftKey: "zodiac.gift.horse",
    giftDetailKey: "zodiac.giftDetail.horse",
  },
  {
    id: "goat",
    name: "양",
    image: "/attached_assets/animal/animal_08.png",
    characterImage: "/attached_assets/animal_character/animal_character_08.png",
    featureKey: "zodiac.features.goat",
    wittyKey: "zodiac.witty.goat",
    elaborationKey: "zodiac.elaboration.goat",
    giftKey: "zodiac.gift.goat",
    giftDetailKey: "zodiac.giftDetail.goat",
  },
  {
    id: "monkey",
    name: "원숭이",
    image: "/attached_assets/animal/animal_09.png",
    characterImage: "/attached_assets/animal_character/animal_character_09.png",
    featureKey: "zodiac.features.monkey",
    wittyKey: "zodiac.witty.monkey",
    elaborationKey: "zodiac.elaboration.monkey",
    giftKey: "zodiac.gift.monkey",
    giftDetailKey: "zodiac.giftDetail.monkey",
  },
  {
    id: "rooster",
    name: "닭",
    image: "/attached_assets/animal/animal_10.png",
    characterImage: "/attached_assets/animal_character/animal_character_10.png",
    featureKey: "zodiac.features.rooster",
    wittyKey: "zodiac.witty.rooster",
    elaborationKey: "zodiac.elaboration.rooster",
    giftKey: "zodiac.gift.rooster",
    giftDetailKey: "zodiac.giftDetail.rooster",
  },
  {
    id: "dog",
    name: "개",
    image: "/attached_assets/animal/animal_11.png",
    characterImage: "/attached_assets/animal_character/animal_character_11.png",
    featureKey: "zodiac.features.dog",
    wittyKey: "zodiac.witty.dog",
    elaborationKey: "zodiac.elaboration.dog",
    giftKey: "zodiac.gift.dog",
    giftDetailKey: "zodiac.giftDetail.dog",
  },
  {
    id: "pig",
    name: "돼지",
    image: "/attached_assets/animal/animal_12.png",
    characterImage: "/attached_assets/animal_character/animal_character_12.png",
    featureKey: "zodiac.features.pig",
    wittyKey: "zodiac.witty.pig",
    elaborationKey: "zodiac.elaboration.pig",
    giftKey: "zodiac.gift.pig",
    giftDetailKey: "zodiac.giftDetail.pig",
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
    basic: {
      summaryKey: string; // 기본 설명 요약 키
      descriptionKey: string; // 기본 설명 상세 키
    };
    caution: {
      summaryKey: string; // 주의할 점 요약 키
      descriptionKey: string; // 주의할 점 상세 키
    };
    dateRecommendation: {
      summaryKey: string; // 추천 데이트 요약 키
      descriptionKey: string; // 추천 데이트 상세 키
    };
  };
}

// 12개 띠별 궁합 상세 정보 (쥐띠 기준)
export const mouseCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.mouse.mouse.witty",
    elaborationKey: "compatibilityDetail.mouse.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.mouse.ox.witty",
    elaborationKey: "compatibilityDetail.mouse.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.mouse.tiger.witty",
    elaborationKey: "compatibilityDetail.mouse.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.mouse.rabbit.witty",
    elaborationKey: "compatibilityDetail.mouse.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.mouse.dragon.witty",
    elaborationKey: "compatibilityDetail.mouse.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.mouse.snake.witty",
    elaborationKey: "compatibilityDetail.mouse.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.mouse.horse.witty",
    elaborationKey: "compatibilityDetail.mouse.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.mouse.goat.witty",
    elaborationKey: "compatibilityDetail.mouse.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.mouse.monkey.witty",
    elaborationKey: "compatibilityDetail.mouse.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.mouse.rooster.witty",
    elaborationKey: "compatibilityDetail.mouse.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.mouse.dog.witty",
    elaborationKey: "compatibilityDetail.mouse.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.mouse.pig.witty",
    elaborationKey: "compatibilityDetail.mouse.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.mouse.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.mouse.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.mouse.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.mouse.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.mouse.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.mouse.pig.detailed.dateRecommendation.description"
      }
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
  ox: {
    wittyKey: "compatibilityDetail.ox.ox.witty",
    elaborationKey: "compatibilityDetail.ox.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.ox.tiger.witty",
    elaborationKey: "compatibilityDetail.ox.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.ox.rabbit.witty",
    elaborationKey: "compatibilityDetail.ox.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.ox.dragon.witty",
    elaborationKey: "compatibilityDetail.ox.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.ox.snake.witty",
    elaborationKey: "compatibilityDetail.ox.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.ox.horse.witty",
    elaborationKey: "compatibilityDetail.ox.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.ox.goat.witty",
    elaborationKey: "compatibilityDetail.ox.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.ox.monkey.witty",
    elaborationKey: "compatibilityDetail.ox.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.ox.rooster.witty",
    elaborationKey: "compatibilityDetail.ox.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.ox.dog.witty",
    elaborationKey: "compatibilityDetail.ox.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.ox.pig.witty",
    elaborationKey: "compatibilityDetail.ox.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.ox.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.ox.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.ox.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.ox.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.ox.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.ox.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 호랑이띠 기준 궁합 상세 정보
export const tigerCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.tiger.mouse.witty",
    elaborationKey: "compatibilityDetail.tiger.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.tiger.ox.witty",
    elaborationKey: "compatibilityDetail.tiger.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.tiger.tiger.witty",
    elaborationKey: "compatibilityDetail.tiger.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.tiger.rabbit.witty",
    elaborationKey: "compatibilityDetail.tiger.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.tiger.dragon.witty",
    elaborationKey: "compatibilityDetail.tiger.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.tiger.snake.witty",
    elaborationKey: "compatibilityDetail.tiger.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.tiger.horse.witty",
    elaborationKey: "compatibilityDetail.tiger.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.tiger.goat.witty",
    elaborationKey: "compatibilityDetail.tiger.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.tiger.monkey.witty",
    elaborationKey: "compatibilityDetail.tiger.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.tiger.rooster.witty",
    elaborationKey: "compatibilityDetail.tiger.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.tiger.dog.witty",
    elaborationKey: "compatibilityDetail.tiger.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.tiger.pig.witty",
    elaborationKey: "compatibilityDetail.tiger.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.tiger.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.tiger.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.tiger.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.tiger.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.tiger.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.tiger.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 토끼띠 기준 궁합 상세 정보
export const rabbitCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.rabbit.mouse.witty",
    elaborationKey: "compatibilityDetail.rabbit.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.rabbit.ox.witty",
    elaborationKey: "compatibilityDetail.rabbit.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.rabbit.tiger.witty",
    elaborationKey: "compatibilityDetail.rabbit.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.rabbit.rabbit.witty",
    elaborationKey: "compatibilityDetail.rabbit.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.rabbit.dragon.witty",
    elaborationKey: "compatibilityDetail.rabbit.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.rabbit.snake.witty",
    elaborationKey: "compatibilityDetail.rabbit.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.rabbit.horse.witty",
    elaborationKey: "compatibilityDetail.rabbit.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.rabbit.goat.witty",
    elaborationKey: "compatibilityDetail.rabbit.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.rabbit.monkey.witty",
    elaborationKey: "compatibilityDetail.rabbit.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.rabbit.rooster.witty",
    elaborationKey: "compatibilityDetail.rabbit.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.rabbit.dog.witty",
    elaborationKey: "compatibilityDetail.rabbit.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.rabbit.pig.witty",
    elaborationKey: "compatibilityDetail.rabbit.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rabbit.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rabbit.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rabbit.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rabbit.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rabbit.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rabbit.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 용띠 기준 궁합 상세 정보
export const dragonCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.dragon.mouse.witty",
    elaborationKey: "compatibilityDetail.dragon.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.dragon.ox.witty",
    elaborationKey: "compatibilityDetail.dragon.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.dragon.tiger.witty",
    elaborationKey: "compatibilityDetail.dragon.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.dragon.rabbit.witty",
    elaborationKey: "compatibilityDetail.dragon.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.dragon.dragon.witty",
    elaborationKey: "compatibilityDetail.dragon.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.dragon.snake.witty",
    elaborationKey: "compatibilityDetail.dragon.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.dragon.horse.witty",
    elaborationKey: "compatibilityDetail.dragon.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.dragon.goat.witty",
    elaborationKey: "compatibilityDetail.dragon.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.dragon.monkey.witty",
    elaborationKey: "compatibilityDetail.dragon.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.dragon.rooster.witty",
    elaborationKey: "compatibilityDetail.dragon.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.dragon.dog.witty",
    elaborationKey: "compatibilityDetail.dragon.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.dragon.pig.witty",
    elaborationKey: "compatibilityDetail.dragon.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dragon.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dragon.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dragon.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dragon.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dragon.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dragon.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 뱀띠 기준 궁합 상세 정보
export const snakeCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.snake.mouse.witty",
    elaborationKey: "compatibilityDetail.snake.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.snake.ox.witty",
    elaborationKey: "compatibilityDetail.snake.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.snake.tiger.witty",
    elaborationKey: "compatibilityDetail.snake.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.snake.rabbit.witty",
    elaborationKey: "compatibilityDetail.snake.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.snake.dragon.witty",
    elaborationKey: "compatibilityDetail.snake.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.snake.snake.witty",
    elaborationKey: "compatibilityDetail.snake.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.snake.horse.witty",
    elaborationKey: "compatibilityDetail.snake.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.snake.goat.witty",
    elaborationKey: "compatibilityDetail.snake.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.snake.monkey.witty",
    elaborationKey: "compatibilityDetail.snake.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.snake.rooster.witty",
    elaborationKey: "compatibilityDetail.snake.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.snake.dog.witty",
    elaborationKey: "compatibilityDetail.snake.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.snake.pig.witty",
    elaborationKey: "compatibilityDetail.snake.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.snake.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.snake.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.snake.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.snake.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.snake.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.snake.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 말띠 기준 궁합 상세 정보
export const horseCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.horse.mouse.witty",
    elaborationKey: "compatibilityDetail.horse.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.horse.ox.witty",
    elaborationKey: "compatibilityDetail.horse.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.horse.tiger.witty",
    elaborationKey: "compatibilityDetail.horse.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.horse.rabbit.witty",
    elaborationKey: "compatibilityDetail.horse.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.horse.dragon.witty",
    elaborationKey: "compatibilityDetail.horse.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.horse.snake.witty",
    elaborationKey: "compatibilityDetail.horse.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.horse.horse.witty",
    elaborationKey: "compatibilityDetail.horse.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.horse.goat.witty",
    elaborationKey: "compatibilityDetail.horse.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.horse.monkey.witty",
    elaborationKey: "compatibilityDetail.horse.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.horse.rooster.witty",
    elaborationKey: "compatibilityDetail.horse.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.horse.dog.witty",
    elaborationKey: "compatibilityDetail.horse.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.horse.pig.witty",
    elaborationKey: "compatibilityDetail.horse.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.horse.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.horse.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.horse.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.horse.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.horse.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.horse.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 양띠 기준 궁합 상세 정보
export const goatCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.goat.mouse.witty",
    elaborationKey: "compatibilityDetail.goat.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.goat.ox.witty",
    elaborationKey: "compatibilityDetail.goat.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.goat.tiger.witty",
    elaborationKey: "compatibilityDetail.goat.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.goat.rabbit.witty",
    elaborationKey: "compatibilityDetail.goat.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.goat.dragon.witty",
    elaborationKey: "compatibilityDetail.goat.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.goat.snake.witty",
    elaborationKey: "compatibilityDetail.goat.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.goat.horse.witty",
    elaborationKey: "compatibilityDetail.goat.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.goat.goat.witty",
    elaborationKey: "compatibilityDetail.goat.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.goat.monkey.witty",
    elaborationKey: "compatibilityDetail.goat.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.goat.rooster.witty",
    elaborationKey: "compatibilityDetail.goat.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.goat.dog.witty",
    elaborationKey: "compatibilityDetail.goat.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.goat.pig.witty",
    elaborationKey: "compatibilityDetail.goat.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.goat.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.goat.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.goat.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.goat.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.goat.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.goat.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 원숭이띠 기준 궁합 상세 정보
export const monkeyCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.monkey.mouse.witty",
    elaborationKey: "compatibilityDetail.monkey.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.monkey.ox.witty",
    elaborationKey: "compatibilityDetail.monkey.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.monkey.tiger.witty",
    elaborationKey: "compatibilityDetail.monkey.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.monkey.rabbit.witty",
    elaborationKey: "compatibilityDetail.monkey.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.monkey.dragon.witty",
    elaborationKey: "compatibilityDetail.monkey.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.monkey.snake.witty",
    elaborationKey: "compatibilityDetail.monkey.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.monkey.horse.witty",
    elaborationKey: "compatibilityDetail.monkey.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.monkey.goat.witty",
    elaborationKey: "compatibilityDetail.monkey.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.monkey.monkey.witty",
    elaborationKey: "compatibilityDetail.monkey.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.monkey.rooster.witty",
    elaborationKey: "compatibilityDetail.monkey.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.monkey.dog.witty",
    elaborationKey: "compatibilityDetail.monkey.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.monkey.pig.witty",
    elaborationKey: "compatibilityDetail.monkey.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.monkey.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.monkey.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.monkey.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.monkey.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.monkey.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.monkey.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 닭띠 기준 궁합 상세 정보
export const roosterCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.rooster.mouse.witty",
    elaborationKey: "compatibilityDetail.rooster.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.rooster.ox.witty",
    elaborationKey: "compatibilityDetail.rooster.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.rooster.tiger.witty",
    elaborationKey: "compatibilityDetail.rooster.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.rooster.rabbit.witty",
    elaborationKey: "compatibilityDetail.rooster.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.rooster.dragon.witty",
    elaborationKey: "compatibilityDetail.rooster.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.rooster.snake.witty",
    elaborationKey: "compatibilityDetail.rooster.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.rooster.horse.witty",
    elaborationKey: "compatibilityDetail.rooster.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.rooster.goat.witty",
    elaborationKey: "compatibilityDetail.rooster.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.rooster.monkey.witty",
    elaborationKey: "compatibilityDetail.rooster.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.rooster.rooster.witty",
    elaborationKey: "compatibilityDetail.rooster.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.rooster.dog.witty",
    elaborationKey: "compatibilityDetail.rooster.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.rooster.pig.witty",
    elaborationKey: "compatibilityDetail.rooster.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.rooster.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.rooster.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.rooster.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.rooster.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.rooster.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.rooster.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 개띠 기준 궁합 상세 정보
export const dogCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.dog.mouse.witty",
    elaborationKey: "compatibilityDetail.dog.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.dog.ox.witty",
    elaborationKey: "compatibilityDetail.dog.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.dog.tiger.witty",
    elaborationKey: "compatibilityDetail.dog.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.dog.rabbit.witty",
    elaborationKey: "compatibilityDetail.dog.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.dog.dragon.witty",
    elaborationKey: "compatibilityDetail.dog.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.dog.snake.witty",
    elaborationKey: "compatibilityDetail.dog.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.dog.horse.witty",
    elaborationKey: "compatibilityDetail.dog.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.dog.goat.witty",
    elaborationKey: "compatibilityDetail.dog.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.dog.monkey.witty",
    elaborationKey: "compatibilityDetail.dog.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.dog.rooster.witty",
    elaborationKey: "compatibilityDetail.dog.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.dog.dog.witty",
    elaborationKey: "compatibilityDetail.dog.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.dog.pig.witty",
    elaborationKey: "compatibilityDetail.dog.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.dog.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.dog.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.dog.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.dog.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.dog.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.dog.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 돼지띠 기준 궁합 상세 정보
export const pigCompatibilityDetails: Record<string, CompatibilityDetail> = {
  mouse: {
    wittyKey: "compatibilityDetail.pig.mouse.witty",
    elaborationKey: "compatibilityDetail.pig.mouse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.mouse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.mouse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.mouse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.mouse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.mouse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.mouse.detailed.dateRecommendation.description"
      }
    }
  },
  ox: {
    wittyKey: "compatibilityDetail.pig.ox.witty",
    elaborationKey: "compatibilityDetail.pig.ox.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.ox.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.ox.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.ox.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.ox.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.ox.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.ox.detailed.dateRecommendation.description"
      }
    }
  },
  tiger: {
    wittyKey: "compatibilityDetail.pig.tiger.witty",
    elaborationKey: "compatibilityDetail.pig.tiger.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.tiger.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.tiger.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.tiger.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.tiger.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.tiger.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.tiger.detailed.dateRecommendation.description"
      }
    }
  },
  rabbit: {
    wittyKey: "compatibilityDetail.pig.rabbit.witty",
    elaborationKey: "compatibilityDetail.pig.rabbit.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.rabbit.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.rabbit.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.rabbit.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.rabbit.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.rabbit.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.rabbit.detailed.dateRecommendation.description"
      }
    }
  },
  dragon: {
    wittyKey: "compatibilityDetail.pig.dragon.witty",
    elaborationKey: "compatibilityDetail.pig.dragon.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.dragon.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.dragon.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.dragon.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.dragon.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.dragon.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.dragon.detailed.dateRecommendation.description"
      }
    }
  },
  snake: {
    wittyKey: "compatibilityDetail.pig.snake.witty",
    elaborationKey: "compatibilityDetail.pig.snake.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.snake.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.snake.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.snake.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.snake.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.snake.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.snake.detailed.dateRecommendation.description"
      }
    }
  },
  horse: {
    wittyKey: "compatibilityDetail.pig.horse.witty",
    elaborationKey: "compatibilityDetail.pig.horse.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.horse.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.horse.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.horse.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.horse.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.horse.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.horse.detailed.dateRecommendation.description"
      }
    }
  },
  goat: {
    wittyKey: "compatibilityDetail.pig.goat.witty",
    elaborationKey: "compatibilityDetail.pig.goat.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.goat.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.goat.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.goat.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.goat.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.goat.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.goat.detailed.dateRecommendation.description"
      }
    }
  },
  monkey: {
    wittyKey: "compatibilityDetail.pig.monkey.witty",
    elaborationKey: "compatibilityDetail.pig.monkey.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.monkey.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.monkey.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.monkey.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.monkey.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.monkey.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.monkey.detailed.dateRecommendation.description"
      }
    }
  },
  rooster: {
    wittyKey: "compatibilityDetail.pig.rooster.witty",
    elaborationKey: "compatibilityDetail.pig.rooster.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.rooster.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.rooster.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.rooster.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.rooster.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.rooster.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.rooster.detailed.dateRecommendation.description"
      }
    }
  },
  dog: {
    wittyKey: "compatibilityDetail.pig.dog.witty",
    elaborationKey: "compatibilityDetail.pig.dog.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.dog.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.dog.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.dog.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.dog.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.dog.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.dog.detailed.dateRecommendation.description"
      }
    }
  },
  pig: {
    wittyKey: "compatibilityDetail.pig.pig.witty",
    elaborationKey: "compatibilityDetail.pig.pig.elaboration",
    detailed: {
      basic: {
        summaryKey: "compatibilityDetail.pig.pig.detailed.basic.summary",
        descriptionKey: "compatibilityDetail.pig.pig.detailed.basic.description"
      },
      caution: {
        summaryKey: "compatibilityDetail.pig.pig.detailed.caution.summary",
        descriptionKey: "compatibilityDetail.pig.pig.detailed.caution.description"
      },
      dateRecommendation: {
        summaryKey: "compatibilityDetail.pig.pig.detailed.dateRecommendation.summary",
        descriptionKey: "compatibilityDetail.pig.pig.detailed.dateRecommendation.description"
      }
    }
  }
};

// 두 띠의 궁합 상세 정보 가져오기
// 12간지 순서 정의
const zodiacOrder = ["mouse", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];

// 궁합 키 생성 함수 (12간지 순으로 정렬)
export function getCompatibilityKey(id1: string, id2: string): string {
  const order1 = zodiacOrder.indexOf(id1);
  const order2 = zodiacOrder.indexOf(id2);
  return order1 < order2 ? `${id1}-${id2}` : `${id2}-${id1}`;
}

// 궁합 상세 정보 조회 (Flat Key 방식)
// 항상 12간지 순으로 정렬된 첫 번째 띠 기준으로 데이터를 찾습니다.
export function getCompatibilityDetail(
  zodiac1: ZodiacAnimal,
  zodiac2: ZodiacAnimal
): CompatibilityDetail | null {
  // 12간지 순으로 정렬하여 항상 같은 키로 접근
  const order1 = zodiacOrder.indexOf(zodiac1.id);
  const order2 = zodiacOrder.indexOf(zodiac2.id);
  const [firstId, secondId] = order1 < order2 ? [zodiac1.id, zodiac2.id] : [zodiac2.id, zodiac1.id];
  
  // 정렬된 첫 번째 띠의 데이터에서 두 번째 띠 정보를 찾음
  if (firstId === "dog") {
    return dogCompatibilityDetails[secondId] || null;
  }
  if (firstId === "dragon") {
    return dragonCompatibilityDetails[secondId] || null;
  }
  if (firstId === "goat") {
    return goatCompatibilityDetails[secondId] || null;
  }
  if (firstId === "horse") {
    return horseCompatibilityDetails[secondId] || null;
  }
  if (firstId === "monkey") {
    return monkeyCompatibilityDetails[secondId] || null;
  }
  if (firstId === "mouse") {
    return mouseCompatibilityDetails[secondId] || null;
  }
  if (firstId === "ox") {
    return oxCompatibilityDetails[secondId] || null;
  }
  if (firstId === "pig") {
    return pigCompatibilityDetails[secondId] || null;
  }
  if (firstId === "rabbit") {
    return rabbitCompatibilityDetails[secondId] || null;
  }
  if (firstId === "rooster") {
    return roosterCompatibilityDetails[secondId] || null;
  }
  if (firstId === "snake") {
    return snakeCompatibilityDetails[secondId] || null;
  }
  if (firstId === "tiger") {
    return tigerCompatibilityDetails[secondId] || null;
  }
  return null;
}
