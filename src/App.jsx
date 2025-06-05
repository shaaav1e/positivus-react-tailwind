import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Services from "./components/Services";
import Services2 from "./components/Services2";
import Proposal from "./components/Proposal";
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Sponsors />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Services2 />
        </section>
        <section>
          <Proposal />
        </section>
      </main>
    </div>
  );
}

export default App;
