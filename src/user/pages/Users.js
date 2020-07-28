import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sunbir Singh",
      image:
        "https://images.pexels.com/photos/4318999/pexels-photo-4318999.jpeg?cs=srgb&dl=topless-man-sitting-on-white-concrete-bench-4318999.jpg&fm=jpgauto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
