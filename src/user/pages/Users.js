import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "q1",
      name: "Sunbir Singh",
      image:
        "https://www.pexels.com/photo/blonde-hair-blur-daylight-environment-214574/",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
