import { useState } from 'react';
import { QUESTIONS } from '../src/data/questions';
import { useRouter } from 'next/router';

export default function Quiz() {
  const [answers, setAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(0));
  const router = useRouter();

  const handleSelect = (idx: number, value: number) => {
    const next = [...answers];
    next[idx] = value;
    setAnswers(next);
  };

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

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => handleSelect(idx, n)}
                className={`px-3 py-1 rounded border ${
                  answers[idx] === n
                    ? 'bg-emerald-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={answers.some((v) => v === 0)}
        className="mt-4 w-full rounded bg-emerald-600 py-3 text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        결과 보기
      </button>
    </main>
  );
}
