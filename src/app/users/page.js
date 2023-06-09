// "use client"; // have to set this because we are using useEffect hook

import { useQuery } from "@tanstack/react-query";
import UserCard from "../components/UserCard";

import { loadUsers } from "../lib/users";

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// export async function getStaticProps() {
//   const res = await loadUsers();
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default async function UsersPage() {
  // const { data: usersData = [], isLoading, isError } = useQuery(["userData"], functionHere);
  const data = await loadUsers();
  // console.log("[DATA] : ", usersData);
  // console.log("[LOADING] : ", isLoading);
  // console.log("[ERROR] : ", isError);

  return (
    <div className="w-full h-full p-1 flex flex-col gap-2">
      <head>
        <title>Users Page</title>
      </head>
      <h1 className="w-full bg-blue-100 text-2xl font-bold text-center underline">
        A component rendering a list of cards containing user information
        fetched from JSON plaholder
      </h1>
      <section className="w-full h-full bg-blue-100 flex flex-wrap p-5 gap-5 items-center justify-center">
        {data.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </section>
    </div>
  );
}
