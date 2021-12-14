import React from "react";
import Link from "next/link";

export default function MyComponent() {

  // aditional route without id
  // /users/myNewRoute
  
  return (
    <div>
      <Link href={"/"}>
        <button>Go to home</button>
      </Link>
      Hello from my route
    </div>
  );
}
