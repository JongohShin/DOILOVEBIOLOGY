import { useState } from 'react';
import { QUESTIONS } from '../src/data/questions';
import { useRouter } from 'next/router';

export default function Quiz() {
  const [answers, setAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(0));
  const router = useRouter();

  const handleSubmit = () => {
    const total = answers.reduce((a, b) => a + b, 0);
    router.push(`/result?score=${total}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      {QUESTIONS.map((q, idx) => (
        <div key={q.id}>
          <p>{q.emoji} {q.text}</p>
          {[1,2,3,4,5].map((n) => (
            <button key={n} onClick={() => {
              const newAns = [...answers];
              newAns[idx] = n;
              setAnswers(newAns);
            }}>{n}</button>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>결과 보기</button>
    </div>
  );
}
