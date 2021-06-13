import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Vladis Markin",
      image:
        "https://neilpatel.com/wp-content/themes/neilpatel/images/quiz/neil.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
