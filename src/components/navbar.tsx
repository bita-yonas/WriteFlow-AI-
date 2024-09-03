"use client";

import { useState } from "react";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { Logo } from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleToggleAbout = () => {
    setShowAbout((prev) => !prev);
  };

  return (
    <div className="my-2 mx-4 flex flex-col">
      {/* Navbar section */}
      <div className="flex justify-between items-center py-2">
        {/* Logo */}
        <Logo />
        {/* Auth and About */}
        <div className="flex items-center space-x-4">
          <Button onClick={handleToggleAbout}>About</Button>
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* About section */}
      {showAbout && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-xl font-bold">About the App</h2>
          <p className="mt-2">
            Unlock your Writing Potential 🪶 is a cutting-edge web app designed
            to transform your writing experience with the power of AI. Whether
            youre looking to improve your grammar, finish sentences, or
            generate creative ideas, this app is here to help you unlock your
            full potential.
          </p>
          <h3 className="mt-4 text-lg font-bold">About the Developer</h3>
          <p className="mt-2">
            This app was developed by Bitania Yonas, a passionate software
            developer with a strong focus on creating innovative AI-powered
            applications that enhance productivity and creativity.
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;