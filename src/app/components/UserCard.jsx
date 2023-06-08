import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-slate-300 w-64 h-32 rounded flex flex-col justify-around pl-2">
      <h4>Name:</h4>
      <span>Contact:</span>
      <span>Email:</span>
      <span>Website:</span>
    </div>
  );
};

export default UserCard;
