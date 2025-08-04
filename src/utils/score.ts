export interface Result {
  label: string;
  emoji: string;
  color: string;
}

export function getResult(score: number): Result {
  if (score >= 80) return { label: '진학 추천', emoji: '🎓', color: 'emerald' };
  if (score >= 50) return { label: '진학 보류', emoji: '🤔', color: 'yellow' };
  return { label: '진학 비권장', emoji: '🏖️', color: 'red' };
}
