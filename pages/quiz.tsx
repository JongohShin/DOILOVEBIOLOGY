
import { useState } from 'react';
import { QUESTIONS } from '../src/data/questions';
import { useRouter } from 'next/router';

export default function Quiz() {
  // ① 각 문항 점수를 0으로 초기화
  const [answers, setAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(0));
  const router = useRouter();

  // ② 버튼 클릭 → 점수 저장
  const handleSelect = (idx: number, val: number) => {
    const next = [...answers];
    next[idx] = val;                    // 반드시 숫자!
    setAnswers(next);
  };

  // ③ 결과 페이지로 이동
  const handleSubmit = () => {
    const total = answers.reduce((a, b) => a + b, 0);
    router.push(`/result?score=${total}`);
  };

  return (
    <main className="mx-auto max-w-2xl p-4">
      <h2 className="mb-6 text-xl font-semibold">
        문항을 읽고 1‒5점을 선택하세요
      </h2>

      {QUESTIONS.map((q, idx) => (
        <div key={q.id} className="mb-6 rounded border p-4 shadow">
          <p className="mb-2 text-lg">
            {q.emoji} {q.text}
          </p>

          {/* 점수 버튼 */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"                        // 폼 submit 방지
                onClick={() => handleSelect(idx, n)}// n은 이미 숫자라서 Number() 불필요
                className={`px-3 py-1 rounded border
                  ${answers[idx] === n
                    ? 'bg-emerald-500 text-white'
                    : 'hover:bg-gray-100'}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* 결과 보기 */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={answers.some((v) => v === 0)}      // 답 안 고른 문항 있으면 비활성
        className="mt-4 w-full rounded bg-emerald-600 py-3 text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        결과 보기
      </button>
    </main>
  );
}
