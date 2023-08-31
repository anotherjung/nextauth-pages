import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Protected: NextPage = (): JSX.Element => {
  const session = useSession();
  
  const { status, data } = useSession();
  console.log("p",session, status, data)
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        page is protected by session
        {JSON.stringify(data.user, null, 2)}
        <Link href="/"><p>index</p></Link>
        <Link href="admin"><p>admin</p></Link>
      </div>
    );

  return <div>loading</div>;
};

export default Protected;