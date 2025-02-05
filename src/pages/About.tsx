import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="h-[calc(100vh-7rem)]">
        <div className="w-3/4 md:w-1/3 h-full flex flex-col justify-center items-center my-auto mx-auto gap-4">
          <p className="font-bold text-lg text-center">Francesco Rufini</p>
          <img
            className="w-full object-cover rounded"
            src="/images/about.webp"
            alt="a picture of me"
          />
          <div className="font-jetbrains flex flex-col gap-2 items-start">
            <p className="font-bold">
              Milan based Videographer with a strong passion for motion design
              and VFX. Specialized in crafting unique visual content by
              combining high-quality footage with innovative and creative
              editing.
            </p>
            <a
              href="https://www.instagram.com/rufustology/"
              className="text-accent hover:underline decoration-2"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/francesco-rufini-741667134/"
              className="text-accent hover:underline decoration-2"
            >
              Linkedin
            </a>
            <div className="text-xs mt-6 flex flex-col">
              <div>
                Website coded by
                <p className="text-accent hover:underline decoration-2">
                  <a href="https://micheledinelli.github.io">
                    {" "}
                    Michele Dinelli
                  </a>
                </p>
              </div>
              <div className="h-12">
                Source code available on
                <p className="text-accent hover:underline decoration-2">
                  <a href="https://github.com/micheledinelli/rufus"> GitHub </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
