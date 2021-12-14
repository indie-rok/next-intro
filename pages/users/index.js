import React, { useContext } from "react";
import Button from "../../components/Button";
import { MyContext } from "../_app";


export default function Hello(props) {

  const test = useContext(MyContext)

  console.log(props, test);
  // works for home folder
  // /users

  return (
    <div>
      hello from users
      {props.myAdditionalData.map((user) => {
        return <li>{user.name}</li>;
      })}
      <Button />
    </div>
  );
}

export async function getServerSideProps() {
  //code to get stuff from api or ther service

  // fetch("http://localhost:3000/api/users")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {});

  const response = await fetch("http://localhost:3000/api/users");
  const json = await response.json();

  return {
    props: {
      myAdditionalData: json,
    },
  };
}
