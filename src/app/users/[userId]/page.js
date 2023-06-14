import { loadUsers } from "@/app/lib/users";
import Link from "next/link";

export const metadata = {
  title: "Unique User Page",
};

const UserIdPage = async ({ params, searchParams }) => {
  // console.log("params ?", params);
  // console.log("searchParams ? ", searchParams);

  const uniqueUserData = await loadUsers(params.userId);
  // console.log("uniqueUserData ? ", uniqueUserData);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <h1>Hey I am user {params.userId}</h1>
      <h2>All my data...</h2>
      <div>{JSON.stringify(uniqueUserData)}</div>
      <Link href={"/users"} className="bg-slate-200 rounded p-1">
        Go back to user page
      </Link>
    </div>
  );
};

export default UserIdPage;
