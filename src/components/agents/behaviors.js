// 단순 행동 유틸: 손 스윙/바운스 계산 등

export function computeBodyBounce(t, size, phase){
  return Math.abs(Math.sin(t*4 + phase)) * 0.12 * size;
}

export function computeWalkSwing(t, size, phase, moving){
  const walkCycle = Math.sin(t*4 + phase);
  if(!moving){
    return { walkCycle, swingFwd: 0, swingUp: 0 };
  }
  return { walkCycle, swingFwd: 0.24*size, swingUp: 0.08*size };
}


