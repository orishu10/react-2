import React, { ReactNode, useRef } from "react";

type Props = {};
type User = {
  id: number;
  email: string;
  password: string;
};
export default function Users({}: Props) {
  // const userRef = useRef<HTMLInputElement>(null);
  const usersArr: User[] = [
    { id: 1, email: "ori@gmail.com", password: "ori123" },
    { id: 2, email: "dani@gmail.com", password: "dani123" },
    { id: 3, email: "elad@gmail.com", password: "elad123" },
  ];
  return (
    <>
      <ul>
        <li>
          <p>{usersArr[0].id}</p>
          <p>{usersArr[0].email}</p>
          <p>{usersArr[0].password}</p>
        </li>
        <li>
          <p>{usersArr[1].id}</p>
          <p>{usersArr[1].email}</p>
          <p>{usersArr[1].password}</p>
        </li>
        <li>
          <p>{usersArr[2].id}</p>
          <p>{usersArr[2].email}</p>
          <p>{usersArr[2].password}</p>
        </li>
      </ul>
      {/* <form action="">
        <input ref={userRef}  type="email" placeholder="email" />
        <input ref={userRef}  type="password" placeholder="password" />
        <button type="submit" onClick={(e)=> userRef.current.email = '' }></button>
    </form> */}
    </>
  );
}
