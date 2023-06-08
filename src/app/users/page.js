import UserCard from "../components/UserCard";

const UsersPage = () => {
  return (
    <div className="w-full h-full p-1 flex flex-col gap-2">
      <h1 className="w-full bg-blue-100 text-2xl font-bold text-center underline">
        A component rendering a list of cards containing user information
        fetched from JSON plaholder
      </h1>
      <section className="w-full h-full bg-blue-100 flex flex-wrap p-5 gap-5 items-center justify-center">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </section>
    </div>
  );
};

export default UsersPage;
