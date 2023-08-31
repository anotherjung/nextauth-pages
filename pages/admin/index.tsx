import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Protected: NextPage = (): JSX.Element => {
  const session = useSession();
  console.log("p",session)
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        Admin page using middleware
        {JSON.stringify(data.user, null, 2)}
        <Link href="/"><p>index</p></Link>
        <Link href="/admin"><p>admin</p></Link>
      </div>
    );

  return <div>loading</div>;
};

export default Protected;