import {useEffect, useState} from "react";
import UserCard from "./UserCard";
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs:string;
     };
  };


async function fetchItems(){
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
   const resultJ = await result.json();
   console.log(resultJ);
   return resultJ 

};

export default function UsersFromServer() {
const [data , setData] = useState<User[]>([])

    useEffect(() => {
        fetchItems().then((data)=>
        setData(data)
        )
        }, []);
  return (
    <div>
        {data.map((user)=><UserCard user = {user} />)}
    </div>
  )
}
