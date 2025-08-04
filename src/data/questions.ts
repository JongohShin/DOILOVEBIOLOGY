export interface Question {
  id: number;
  text: string;
  emoji: string;
}

export const QUESTIONS: Question[] = [
  { id: 1, text: '실험 실패 후에도 "다시 해보자!"가 먼저 떠오른다.', emoji: '🧪🔁' },
  { id: 2, text: '주말에 논문 읽다가 밥 먹는 걸 잊어본 적이 있다.', emoji: '📚⏰' },
  { id: 3, text: '데이터 분석 과정에서 “코딩沼”에 빠져도 재미있다.', emoji: '💻🌊' },
  // ... 총 20문항 추가
];
