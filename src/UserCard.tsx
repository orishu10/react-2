import React from 'react'
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

type Props = {
    user:User
}

export default function UserCard(props: Props) {
  return (
    <div>
      <p>  {props.user.id}</p>
      <p>  {props.user.email}</p>
        </div>
  )
}