import { useRouter } from 'next/router';
import { getResult } from '../src/utils/score';

export default function Result() {
  const router = useRouter();
  const score = parseInt((router.query.score as string) || '0', 10);
  const result = getResult(score);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{result.emoji} {result.label}</h1>
      <p>총점: {score}</p>
    </div>
  );
}
