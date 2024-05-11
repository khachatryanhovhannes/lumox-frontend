"use client";
import { getMe } from "@/service/api/userService";
import { useEffect, useState } from "react";

function UseAuth() {
  const [user, setUser] = useState();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMe()
      .then((me) => {
        setUser(me.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return { user, pending, error };
}

export default UseAuth;
