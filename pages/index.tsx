import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="mb-8 text-3xl font-bold text-center">
        나는 대학원 생활이 맞을까?
      </h1>
      <Link href="/quiz" className="rounded bg-emerald-500 px-6 py-3 text-white hover:bg-emerald-600">
        시작하기
      </Link>
    </main>
  );
}
