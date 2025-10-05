// 12간지 동물 정보
export const animalData = [
  {
    id: "mouse",
    name: "쥐",
    image: "/attached_assets/animal/animal_01.png",
    characterImage: "/attached_assets/animal_character/animal_character_01.png",
    wittyKey: "zodiac.feature.mouse.summary",
    elaborationKey: "zodiac.feature.mouse.description",
    giftKey: "zodiac.giftRecommended.mouse.item",
    giftDetailKey: "zodiac.giftRecommended.mouse.description",
  },
  {
    id: "ox",
    name: "소",
    image: "/attached_assets/animal/animal_02.png",
    characterImage: "/attached_assets/animal_character/animal_character_02.png",
    wittyKey: "zodiac.feature.ox.summary",
    elaborationKey: "zodiac.feature.ox.description",
    giftKey: "zodiac.giftRecommended.ox.item",
    giftDetailKey: "zodiac.giftRecommended.ox.description",
  },
  {
    id: "tiger",
    name: "호랑이",
    image: "/attached_assets/animal/animal_03.png",
    characterImage: "/attached_assets/animal_character/animal_character_03.png",
    wittyKey: "zodiac.feature.tiger.summary",
    elaborationKey: "zodiac.feature.tiger.description",
    giftKey: "zodiac.giftRecommended.tiger.item",
    giftDetailKey: "zodiac.giftRecommended.tiger.description",
  },
  {
    id: "rabbit",
    name: "토끼",
    image: "/attached_assets/animal/animal_04.png",
    characterImage: "/attached_assets/animal_character/animal_character_04.png",
    wittyKey: "zodiac.feature.rabbit.summary",
    elaborationKey: "zodiac.feature.rabbit.description",
    giftKey: "zodiac.giftRecommended.rabbit.item",
    giftDetailKey: "zodiac.giftRecommended.rabbit.description",
  },
  {
    id: "dragon",
    name: "용",
    image: "/attached_assets/animal/animal_05.png",
    characterImage: "/attached_assets/animal_character/animal_character_05.png",
    wittyKey: "zodiac.feature.dragon.summary",
    elaborationKey: "zodiac.feature.dragon.description",
    giftKey: "zodiac.giftRecommended.dragon.item",
    giftDetailKey: "zodiac.giftRecommended.dragon.description",
  },
  {
    id: "snake",
    name: "뱀",
    image: "/attached_assets/animal/animal_06.png",
    characterImage: "/attached_assets/animal_character/animal_character_06.png",
    wittyKey: "zodiac.feature.snake.summary",
    elaborationKey: "zodiac.feature.snake.description",
    giftKey: "zodiac.giftRecommended.snake.item",
    giftDetailKey: "zodiac.giftRecommended.snake.description",
  },
  {
    id: "horse",
    name: "말",
    image: "/attached_assets/animal/animal_07.png",
    characterImage: "/attached_assets/animal_character/animal_character_07.png",
    wittyKey: "zodiac.feature.horse.summary",
    elaborationKey: "zodiac.feature.horse.description",
    giftKey: "zodiac.giftRecommended.horse.item",
    giftDetailKey: "zodiac.giftRecommended.horse.description",
  },
  {
    id: "goat",
    name: "양",
    image: "/attached_assets/animal/animal_08.png",
    characterImage: "/attached_assets/animal_character/animal_character_08.png",
    wittyKey: "zodiac.feature.goat.summary",
    elaborationKey: "zodiac.feature.goat.description",
    giftKey: "zodiac.giftRecommended.goat.item",
    giftDetailKey: "zodiac.giftRecommended.goat.description",
  },
  {
    id: "monkey",
    name: "원숭이",
    image: "/attached_assets/animal/animal_09.png",
    characterImage: "/attached_assets/animal_character/animal_character_09.png",
    wittyKey: "zodiac.feature.monkey.summary",
    elaborationKey: "zodiac.feature.monkey.description",
    giftKey: "zodiac.giftRecommended.monkey.item",
    giftDetailKey: "zodiac.giftRecommended.monkey.description",
  },
  {
    id: "rooster",
    name: "닭",
    image: "/attached_assets/animal/animal_10.png",
    characterImage: "/attached_assets/animal_character/animal_character_10.png",
    wittyKey: "zodiac.feature.rooster.summary",
    elaborationKey: "zodiac.feature.rooster.description",
    giftKey: "zodiac.giftRecommended.rooster.item",
    giftDetailKey: "zodiac.giftRecommended.rooster.description",
  },
  {
    id: "dog",
    name: "개",
    image: "/attached_assets/animal/animal_11.png",
    characterImage: "/attached_assets/animal_character/animal_character_11.png",
    wittyKey: "zodiac.feature.dog.summary",
    elaborationKey: "zodiac.feature.dog.description",
    giftKey: "zodiac.giftRecommended.dog.item",
    giftDetailKey: "zodiac.giftRecommended.dog.description",
  },
  {
    id: "pig",
    name: "돼지",
    image: "/attached_assets/animal/animal_12.png",
    characterImage: "/attached_assets/animal_character/animal_character_12.png",
    wittyKey: "zodiac.feature.pig.summary",
    elaborationKey: "zodiac.feature.pig.description",
    giftKey: "zodiac.giftRecommended.pig.item",
    giftDetailKey: "zodiac.giftRecommended.pig.description",
  },
] as const;

export type ZodiacAnimal = (typeof animalData)[number];

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
export function getAnimalByYear(year: number): ZodiacAnimal {
  const index = (year - 1900) % 12;
  const adjustedIndex = index < 0 ? index + 12 : index;
  return animalData[adjustedIndex];
}

// 두 띠의 궁합 점수 계산
export function getCompatibilityScore(
  zodiac1: ZodiacAnimal,
  zodiac2: ZodiacAnimal
): number {
  const index1 = animalData.findIndex(z => z.id === zodiac1.id);
  const index2 = animalData.findIndex(z => z.id === zodiac2.id);
  return compatibilityMatrix[index1][index2];
}

// 궁합 상세 정보 타입 정의
export interface CompatibilityDetail {
  result: {
    summary: string; // 궁합 결과 요약 키
    description: string; // 궁합 결과 상세 키
  };
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

// 궁합 상세 정보 (삼각형 구조로 중복 제거)
export const compatibilityDetails: Record<string, Record<string, CompatibilityDetail>> = {
  mouse: {
    mouse: {
      result: {
        summary: "compatibilityDetail.mouse.mouse.result.summary",
        description: "compatibilityDetail.mouse.mouse.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.ox.result.summary",
        description: "compatibilityDetail.mouse.ox.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.tiger.result.summary",
        description: "compatibilityDetail.mouse.tiger.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.rabbit.result.summary",
        description: "compatibilityDetail.mouse.rabbit.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.dragon.result.summary",
        description: "compatibilityDetail.mouse.dragon.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.snake.result.summary",
        description: "compatibilityDetail.mouse.snake.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.horse.result.summary",
        description: "compatibilityDetail.mouse.horse.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.goat.result.summary",
        description: "compatibilityDetail.mouse.goat.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.monkey.result.summary",
        description: "compatibilityDetail.mouse.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.rooster.result.summary",
        description: "compatibilityDetail.mouse.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.dog.result.summary",
        description: "compatibilityDetail.mouse.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.mouse.pig.result.summary",
        description: "compatibilityDetail.mouse.pig.result.description"
      },
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
  },

  ox: {
    ox: {
      result: {
        summary: "compatibilityDetail.ox.ox.result.summary",
        description: "compatibilityDetail.ox.ox.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.tiger.result.summary",
        description: "compatibilityDetail.ox.tiger.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.rabbit.result.summary",
        description: "compatibilityDetail.ox.rabbit.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.dragon.result.summary",
        description: "compatibilityDetail.ox.dragon.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.snake.result.summary",
        description: "compatibilityDetail.ox.snake.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.horse.result.summary",
        description: "compatibilityDetail.ox.horse.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.goat.result.summary",
        description: "compatibilityDetail.ox.goat.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.monkey.result.summary",
        description: "compatibilityDetail.ox.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.rooster.result.summary",
        description: "compatibilityDetail.ox.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.dog.result.summary",
        description: "compatibilityDetail.ox.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.ox.pig.result.summary",
        description: "compatibilityDetail.ox.pig.result.description"
      },
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
  },

  tiger: {
    tiger: {
      result: {
        summary: "compatibilityDetail.tiger.tiger.result.summary",
        description: "compatibilityDetail.tiger.tiger.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.rabbit.result.summary",
        description: "compatibilityDetail.tiger.rabbit.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.dragon.result.summary",
        description: "compatibilityDetail.tiger.dragon.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.snake.result.summary",
        description: "compatibilityDetail.tiger.snake.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.horse.result.summary",
        description: "compatibilityDetail.tiger.horse.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.goat.result.summary",
        description: "compatibilityDetail.tiger.goat.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.monkey.result.summary",
        description: "compatibilityDetail.tiger.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.rooster.result.summary",
        description: "compatibilityDetail.tiger.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.dog.result.summary",
        description: "compatibilityDetail.tiger.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.tiger.pig.result.summary",
        description: "compatibilityDetail.tiger.pig.result.description"
      },
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
  },

  rabbit: {
    rabbit: {
      result: {
        summary: "compatibilityDetail.rabbit.rabbit.result.summary",
        description: "compatibilityDetail.rabbit.rabbit.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rabbit.dragon.result.summary",
        description: "compatibilityDetail.rabbit.dragon.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rabbit.snake.result.summary",
        description: "compatibilityDetail.rabbit.snake.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rabbit.horse.result.summary",
        description: "compatibilityDetail.rabbit.horse.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rabbit.goat.result.summary",
        description: "compatibilityDetail.rabbit.goat.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rabbit.monkey.result.summary",
        description: "compatibilityDetail.rabbit.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rabbit.rooster.result.summary",
        description: "compatibilityDetail.rabbit.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rabbit.dog.result.summary",
        description: "compatibilityDetail.rabbit.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rabbit.pig.result.summary",
        description: "compatibilityDetail.rabbit.pig.result.description"
      },
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
  },

  dragon: {
    dragon: {
      result: {
        summary: "compatibilityDetail.dragon.dragon.result.summary",
        description: "compatibilityDetail.dragon.dragon.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.dragon.snake.result.summary",
        description: "compatibilityDetail.dragon.snake.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.dragon.horse.result.summary",
        description: "compatibilityDetail.dragon.horse.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.dragon.goat.result.summary",
        description: "compatibilityDetail.dragon.goat.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.dragon.monkey.result.summary",
        description: "compatibilityDetail.dragon.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.dragon.rooster.result.summary",
        description: "compatibilityDetail.dragon.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.dragon.dog.result.summary",
        description: "compatibilityDetail.dragon.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.dragon.pig.result.summary",
        description: "compatibilityDetail.dragon.pig.result.description"
      },
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
  },

  snake: {
    snake: {
      result: {
        summary: "compatibilityDetail.snake.snake.result.summary",
        description: "compatibilityDetail.snake.snake.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.snake.horse.result.summary",
        description: "compatibilityDetail.snake.horse.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.snake.goat.result.summary",
        description: "compatibilityDetail.snake.goat.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.snake.monkey.result.summary",
        description: "compatibilityDetail.snake.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.snake.rooster.result.summary",
        description: "compatibilityDetail.snake.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.snake.dog.result.summary",
        description: "compatibilityDetail.snake.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.snake.pig.result.summary",
        description: "compatibilityDetail.snake.pig.result.description"
      },
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
  },

  horse: {
    horse: {
      result: {
        summary: "compatibilityDetail.horse.horse.result.summary",
        description: "compatibilityDetail.horse.horse.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.horse.goat.result.summary",
        description: "compatibilityDetail.horse.goat.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.horse.monkey.result.summary",
        description: "compatibilityDetail.horse.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.horse.rooster.result.summary",
        description: "compatibilityDetail.horse.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.horse.dog.result.summary",
        description: "compatibilityDetail.horse.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.horse.pig.result.summary",
        description: "compatibilityDetail.horse.pig.result.description"
      },
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
  },

  goat: {
    goat: {
      result: {
        summary: "compatibilityDetail.goat.goat.result.summary",
        description: "compatibilityDetail.goat.goat.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.goat.monkey.result.summary",
        description: "compatibilityDetail.goat.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.goat.rooster.result.summary",
        description: "compatibilityDetail.goat.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.goat.dog.result.summary",
        description: "compatibilityDetail.goat.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.goat.pig.result.summary",
        description: "compatibilityDetail.goat.pig.result.description"
      },
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
  },

  monkey: {
    monkey: {
      result: {
        summary: "compatibilityDetail.monkey.monkey.result.summary",
        description: "compatibilityDetail.monkey.monkey.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.monkey.rooster.result.summary",
        description: "compatibilityDetail.monkey.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.monkey.dog.result.summary",
        description: "compatibilityDetail.monkey.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.monkey.pig.result.summary",
        description: "compatibilityDetail.monkey.pig.result.description"
      },
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
  },

  rooster: {
    rooster: {
      result: {
        summary: "compatibilityDetail.rooster.rooster.result.summary",
        description: "compatibilityDetail.rooster.rooster.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rooster.dog.result.summary",
        description: "compatibilityDetail.rooster.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.rooster.pig.result.summary",
        description: "compatibilityDetail.rooster.pig.result.description"
      },
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
  },

  dog: {
    dog: {
      result: {
        summary: "compatibilityDetail.dog.dog.result.summary",
        description: "compatibilityDetail.dog.dog.result.description"
      },
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
      result: {
        summary: "compatibilityDetail.dog.pig.result.summary",
        description: "compatibilityDetail.dog.pig.result.description"
      },
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
  },

  pig: {
    pig: {
      result: {
        summary: "compatibilityDetail.pig.pig.result.summary",
        description: "compatibilityDetail.pig.pig.result.description"
      },
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
  return compatibilityDetails[firstId]?.[secondId] || null;
}