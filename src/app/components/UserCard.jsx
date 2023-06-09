"use client";

import Link from "next/link";

const UserCard = ({ user }) => {
  // async function handleUserCardClick(id) {}

  return (
    <div className="bg-slate-300 p-5 rounded flex flex-col justify-around">
      <h4>Name: {user.name} :</h4>
      <span>Company: {user.company.name} </span>
      <span>Email: {user.email} </span>
      <span>Website: {user.website} </span>
      <Link className="text-blue-800" href={`users/${user.id}`}>
        Click for more...
      </Link>
    </div>
  );
};

export default UserCard;
