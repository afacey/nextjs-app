import Head from "next/head";
import Dashboard from "../components/Dashboard";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Daily Productivity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Dashboard />
      </main>
    </div>
  );
}
