// 동물 캐릭터 이미지 임포트
import mouseImage from '@assets/stock_images/cute_cartoon_mouse_c_a2272cff.jpg';
import oxImage from '@assets/stock_images/cute_cartoon_ox_bull_a92e0254.jpg';
import tigerImage from '@assets/stock_images/cute_cartoon_tiger_c_b6fb7185.jpg';
import rabbitImage from '@assets/stock_images/cute_cartoon_rabbit__c8bc9a92.jpg';
import dragonImage from '@assets/stock_images/cute_cartoon_dragon__0c88ccde.jpg';
import snakeImage from '@assets/stock_images/cute_cartoon_snake_c_2181ebcc.jpg';
import horseImage from '@assets/stock_images/cute_cartoon_horse_c_bb735356.jpg';
import goatImage from '@assets/stock_images/cute_cartoon_goat_sh_a1a8ec9d.jpg';
import monkeyImage from '@assets/stock_images/cute_cartoon_monkey__d304f7ab.jpg';
import roosterImage from '@assets/stock_images/cute_cartoon_rooster_7b3a4f74.jpg';
import dogImage from '@assets/stock_images/cute_cartoon_dog_cha_e49660dc.jpg';
import pigImage from '@assets/stock_images/cute_cartoon_pig_cha_bfe58e3b.jpg';

// 관계 이미지 임포트
import loveImage from '@assets/stock_images/cute_animals_love_he_12100265.jpg';
import romanticImage from '@assets/stock_images/animals_heart_love_r_67f44ad9.jpg';
import friendshipImage from '@assets/stock_images/cute_cartoon_animals_dad7a8f0.jpg';
import holdingHandsImage from '@assets/stock_images/cute_animals_holding_51b1ce7d.jpg';
import sadImage from '@assets/stock_images/sad_cute_cartoon_ani_e96b6a81.jpg';

// 12간지 동물 정보
export const zodiacAnimals = [
  { id: 'mouse', name: '쥐', emoji: '🐭', image: mouseImage },
  { id: 'ox', name: '소', emoji: '🐂', image: oxImage },
  { id: 'tiger', name: '호랑이', emoji: '🐅', image: tigerImage },
  { id: 'rabbit', name: '토끼', emoji: '🐰', image: rabbitImage },
  { id: 'dragon', name: '용', emoji: '🐲', image: dragonImage },
  { id: 'snake', name: '뱀', emoji: '🐍', image: snakeImage },
  { id: 'horse', name: '말', emoji: '🐎', image: horseImage },
  { id: 'goat', name: '양', emoji: '🐐', image: goatImage },
  { id: 'monkey', name: '원숭이', emoji: '🐵', image: monkeyImage },
  { id: 'rooster', name: '닭', emoji: '🐓', image: roosterImage },
  { id: 'dog', name: '개', emoji: '🐕', image: dogImage },
  { id: 'pig', name: '돼지', emoji: '🐷', image: pigImage }
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

// 궁합 점수에 따른 관계 이미지
export function getRelationshipImage(score: number): string {
  if (score >= 90) return loveImage; // 환상적인 궁합: 사랑스러운 이미지
  if (score >= 80) return romanticImage; // 매우 좋은 궁합: 로맨틱한 이미지
  if (score >= 70) return friendshipImage; // 좋은 궁합: 친구같은 이미지
  if (score >= 60) return holdingHandsImage; // 평범한 궁합: 손잡는 이미지
  return sadImage; // 낮은 궁합: 슬픈/거리두는 이미지
}

// 궁합 점수에 따른 관계 설명
export function getRelationshipDescription(score: number): string {
  if (score >= 90) return '서로 사랑하며 포옹하는 완벽한 커플';
  if (score >= 80) return '하트가 넘치는 로맨틱한 관계';
  if (score >= 70) return '함께 웃으며 즐거워하는 좋은 친구';
  if (score >= 60) return '서로 손을 잡고 지지하는 관계';
  return '서로 거리를 두며 아쉬워하는 관계';
}