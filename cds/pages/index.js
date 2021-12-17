import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>
          Welcome to <Link href="/post">Posts</Link>
        </h1>
      </main>

      <footer></footer>
    </div>
  );
}
