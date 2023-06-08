"use client"; // have to set this because we are using useEffect hook

import { useQuery } from "@tanstack/react-query";
import UserCard from "../components/UserCard";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const UsersPage = () => {
  const {
    data: usersData = [],
    isLoading,
    isError,
  } = useQuery(["userData"], async () => {
    await sleep(2000);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  });

  console.log("[DATA] : ", usersData);
  console.log("[LOADING] : ", isLoading);
  console.log("[ERROR] : ", isError);

  return (
    <div className="w-full h-full p-1 flex flex-col gap-2">
      <h1 className="w-full bg-blue-100 text-2xl font-bold text-center underline">
        A component rendering a list of cards containing user information
        fetched from JSON plaholder
      </h1>
      <section className="w-full h-full bg-blue-100 flex flex-wrap p-5 gap-5 items-center justify-center">
        {usersData.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </section>
    </div>
  );
};

export default UsersPage;
