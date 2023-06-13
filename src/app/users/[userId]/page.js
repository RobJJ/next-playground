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
    <div>
      <h1>Hey I am user {params.userId}</h1>
      <Link href={"/users"}>Go back to user page</Link>
    </div>
  );
};

export default UserIdPage;
