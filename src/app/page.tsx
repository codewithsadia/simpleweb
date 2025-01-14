import Image from "next/image";
import Link from "next/link";
import React from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Service from "./service/page";
import GraphicDesign from "./service/graphic-design/page";
import VideoEditing from "./service/video-editing/page";
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/about">About</Link>{" "}</li>
          <li> <Link href="/contact">Contact</Link></li>
          <li><Link href="/services">Service</Link></li>
        </ul>
      </nav>

      <h1>This is my home page</h1>
    
    </div>
  );
};

export default Home;
