'use client';

import { useRouter } from 'next/router';
import { getResult } from '../src/utils/score';

export default function Result() {
  const router = useRouter();
  const scoreParam = router.query.score as string;
  const score = Number(scoreParam ?? 0);
  const result = getResult(score);

  if (!scoreParam) return null;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className={`mb-4 text-4xl font-bold text-${result.color}-600`}>
          {result.emoji} {result.label}
        </h1>
        <p className="mb-8 text-xl">총점: {score}</p>

        <button
          type="button"
          onClick={() => router.push('/')}
          className="rounded bg-emerald-500 px-5 py-2 text-white hover:bg-emerald-600"
        >
          다시 하기
        </button>
      </main>
    </>
  );
}
