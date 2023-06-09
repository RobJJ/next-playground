// "use client"; // have to set this because we are using useEffect hook

import { useQuery } from "@tanstack/react-query";
import UserCard from "../components/UserCard";

import { loadUsers } from "../lib/users";

export const metadata = {
  title: "User Page",
};

export default async function UsersPage() {
  // const { data: usersData = [], isLoading, isError } = useQuery(["userData"], functionHere);
  const data = await loadUsers();
  // const {
  //   data: usersData = [],
  //   isLoading,
  //   isError,
  // } = useQuery(["userData"], loadUsers);
  // // console.log("[DATA] : ", data);
  // if (isLoading) return <div>Loading</div>;

  return (
    <section className="w-full h-full bg-blue-100 flex flex-wrap p-5 gap-5 items-center justify-center">
      {data.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </section>
  );
}
