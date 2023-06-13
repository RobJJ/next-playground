import { useQuery } from "@tanstack/react-query";

export async function loadUsers(id) {
  console.log("id from loadUsers : ", id);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id ? id : ""}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

// this function name needs capital letter to mark as component?
// export async function LoadUsersWithQuery() {
//   const {
//     data: usersData = [],
//     isLoading,
//     isError,
//   } = useQuery(["userData"], async () =>
//     fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//       res.json()
//     )
//   );

//   return { usersData, isLoading, isError };
// }
