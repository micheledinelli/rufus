import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='h-[calc(100vh-6rem)]'>
        <div className="w-1/2 md:w-1/3 h-full flex flex-col justify-center items-center my-auto mx-auto gap-4">
          <p className="font-bold text-lg text-center">Francesco Rufini</p>
          <img className="w-full object-cover rounded-sm" src="/images/about.webp" alt="a picture of me" />
          <div className="font-jetbrains flex flex-col gap-2 items-start">
            <p className="font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus cumque facere labore, voluptatem dicta, animi et aspernatur est nulla repellat ab. Cum saepe vitae necessitatibus eum sit fugiat quibusdam laborum.</p>
            <a
              href="https://www.instagram.com/rufustology/"
              className="text-accent hover:underline decoration-2">
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/francesco-rufini-741667134/"
              className="text-accent hover:underline decoration-2">
              Linkedin
            </a>
            <div className="text-xs mt-6">Website coded by
              <a className="text-accent hover:underline decoration-2" href="https://micheledinelli.github.io"> Michele Dinelli</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment >
  );
}