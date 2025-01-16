import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
