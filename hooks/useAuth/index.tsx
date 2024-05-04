"use client";
import { getMe } from "@/service/api/userService";
import { useEffect, useState } from "react";

function UseAuth() {
  const [user, setUser] = useState();

  useEffect(() => {
    getMe().then((me) => {
      setUser(me.data);
    });
  }, []);

  return { user };
}

export default UseAuth;
