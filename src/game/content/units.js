// 시민(유닛) 관련 공통 정의: 스탯/스킬 키, 기본 인벤토리, 이름/외형 풀, 롤 함수들

export const STAT_KEYS = ["STR", "AGI", "VIT", "INT"];
export const SKILL_KEYS = [
  "Farming",
  "Woodcutting",
  "Gathering",
  "Mining",
  "Magic",
  "Sword",
  "Smithing",
  "Admin",
];

export const BASE_STATS = { STR: 5, AGI: 5, VIT: 5, INT: 5 };

export const DEFAULT_INVENTORY = () => ({
  items: {},        // { itemKey: count }
  equipment: {},    // { slot: itemKey }
  capacity: 20,
  weight: 0,
});

const SKIN_TONES = ["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524"];
const HAIR_COLORS = ["#2c1b10", "#4b3621", "#6f4e37", "#a0522d", "#d2b48c", "#000000", "#343434", "#b5651d"];
const HAIR_STYLES = ["short", "medium", "long", "ponytail", "buzz"];
const OUTFIT_TOPS = ["#6b705c", "#a5a58d", "#b7b7a4", "#cb997e", "#ddbea9", "#b08968", "#7f5539", "#9c6644"];
const OUTFIT_BOTTOMS = ["#5c677d", "#475569", "#334155", "#1f2937", "#4b5563"];

const FAMILY_NAMES = [
  "김", "이", "박", "최", "정", "강", "조", "윤", "장", "임",
  "오", "한", "신", "서", "권", "황", "안", "송", "유", "홍",
];
const GIVEN_NAMES = [
  "민수", "지훈", "서연", "지우", "서준", "하윤", "도윤", "예준", "은우", "시우",
  "하준", "수아", "서윤", "지후", "윤서", "연우", "지현", "예원", "채원", "민준",
  "유진", "현우", "다은", "윤우", "채윤", "지원", "지안", "소윤", "민서", "지민",
];

function randChoice(arr){ return arr[(Math.random()*arr.length)|0]; }
function randRange(min, max){ return Math.random()*(max-min)+min; }
function randInt(min, max){ return (Math.random()*(max-min+1) + min) | 0; }

export function rollStats(){
  const out = { ...BASE_STATS };
  for(const k of STAT_KEYS){
    // 기본 5를 중심으로 -2~+2 분포(정수), 하한 1
    out[k] = Math.max(1, BASE_STATS[k] + randInt(-2, 2));
  }
  return out;
}

export function rollTalent(){
  const talent = {};
  for(const k of SKILL_KEYS){
    // 시작 재능: 0~10 범위의 소량 랜덤
    talent[k] = Math.max(0, Math.min(10, randInt(0, 6)));
  }
  return talent;
}

export function rollPractice(){
  const practice = {};
  for(const k of SKILL_KEYS){
    // 초기 수련치: 정수 0~10
    practice[k] = randInt(0, 10);
  }
  return practice;
}

export function randomName(){
  return `${randChoice(FAMILY_NAMES)}${randChoice(GIVEN_NAMES)}`;
}

export function randomAppearance(){
  return {
    skinTone: randChoice(SKIN_TONES),
    hairColor: randChoice(HAIR_COLORS),
    hairStyle: randChoice(HAIR_STYLES),
    outfit: { topColor: randChoice(OUTFIT_TOPS), bottomColor: randChoice(OUTFIT_BOTTOMS) },
    // 렌더에서 사용하는 크기/얼굴 프리셋 등 확장 가능
  };
}


