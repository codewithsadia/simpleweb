import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/services">Service</Link>
          </li>
        </ul>
      </nav>

      <h1>This is my home page</h1>
    </div>
  );
};

export default Home;
