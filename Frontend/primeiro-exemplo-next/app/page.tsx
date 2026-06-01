import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Exemplos de Renderização</h1>

      <ul>
        <li>
          <Link href="/SSG">
            SSG
          </Link>
        </li>

        <li>
          <Link href="/SSR">
            SSR
          </Link>
        </li>

        <li>
          <Link href="/CSR">
            CSR
          </Link>
        </li>
      </ul>
    </>
  );
}