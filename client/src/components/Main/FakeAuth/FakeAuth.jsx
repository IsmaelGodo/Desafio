import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const FakeAuth = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = Cookies.get("access-token");
    console.log(token);
    
    const userLogged = Cookies.get("user-logged");
    console.log(userLogged);
  }, []);

  const handleClick = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setUser(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Dame usuarios</button>
      <p>{user.username}</p>
    </>
  );
};

export default FakeAuth;
