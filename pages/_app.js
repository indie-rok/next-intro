import "../styles/globals.css";
import { createContext, useState } from "react";

export const MyContext = createContext();

function MyApp({ Component, pageProps }) {
  const [number, setNumber] = useState(0);

  return (
    <MyContext.Provider value={{ number: number, setNumber: setNumber }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
