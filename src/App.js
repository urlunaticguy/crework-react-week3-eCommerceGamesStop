import React, { useState, useCallback } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import HomePageMain from "./Components/HomePageMain";

function App() {
  const [content, setcontent] = useState(<HomePageMain />);

  return (
    <div>
      <header className=" h-[3.5rem] w-[100%] bg-black grid place-content-center">
        <Header />
      </header>
      <main className=" h-auto bg-black grid">
        <Main val={content} />
      </main>
      <footer className=" h-[6rem] bg-black grid place-content-center border-t-2 border-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
