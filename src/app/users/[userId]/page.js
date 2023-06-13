import Link from "next/link";

export const metadata = {
  title: "Unique User Page",
};

const UserIdPage = ({ params }) => {
  console.log("params ?", params);
  return (
    <div>
      <h1>Hey I am user {params.userId}</h1>
      <Link href={"/users"}>Go back to user page</Link>
    </div>
  );
};

export default UserIdPage;
