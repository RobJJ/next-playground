const UserLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="w-full bg-slate-400 p-1 text-2xl font-bold text-center underline">
        A component rendering a list of cards containing user information
        fetched from JSON plaholder
      </h1>
      <div className="h-full w-full ">{children}</div>
    </div>
  );
};

export default UserLayout;
