import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Clone 2.0</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="bg-black h-screen overflow-hidden">
        <Sidebar />
        {/* Center */}
      </main>

      {/* Player */}
      <div></div>
    </div>
  );
}
