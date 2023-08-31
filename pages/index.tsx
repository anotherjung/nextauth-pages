import type { NextPage } from "next";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <main >
        <button
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </main>
      <Link href="/"><p>index</p></Link>
      <Link href="/protected"><p>protected</p></Link>
        <Link href="/admin"><p>admin</p></Link>
    </div>
  );
};

export default Home;