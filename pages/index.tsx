import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>나는 대학원 생활이 맞을까?</h1>
      <Link href="/quiz">
        <button>시작하기</button>
      </Link>
    </div>
  );
}
