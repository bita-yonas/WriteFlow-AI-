"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

export default function IntroPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Existing content */}
        <section className="w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-9xl/none">
                    WriteFlow AI 🪶
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Craft compelling content with AI that fine-tunes your writing, enhancing clarity, style, and impact, ensuring every word resonates, engages your audience, and leaves a lasting impression.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <SignInButton> Get Started</SignInButton>
                  </Link>
                </div>
              </div>
              <Image
                src="/wr.gif"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Middle Content Section */}
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <Image
                src="/wev.gif"
                width="550"
                height="550"
                alt="Start Studying in Seconds"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Unlock your Writing Potential</h2>
                <p className="text-lg text-gray-300">
                  Discover how our cutting-edge products and services can transform your writing with the power of AI. Our seamless experience ensures that you spend more time creating and less time organizing.
                </p>
              </div>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 mt-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Transform Your Writing with AI</h2>
                <p className="text-lg text-gray-300">
                  Our AI-driven platform quickly enhances your writing by providing insightful suggestions and generating content from your input, saving you time and allowing you to focus on crafting the perfect piece.
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-block text-blue-500 underline"
                >
                  CLICK HERE TO SEE EXAMPLES!
                </Link>
              </div>
              <Image
                src="/aaa.gif"
                width="550"
                height="550"
                alt="Create Flashcards from Text"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-10">Pricing</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center bg-white shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-semibold">Free</h3>
                <p className="text-xl mt-2">Free Access</p>
                <p className="text-gray-600 mt-2">
                  Access to basic AI writing tools. Perfect for individuals who are just starting to enhance their writing with AI.
                </p>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 text-white px-6 text-sm font-medium mt-6 hover:bg-green-700 transition"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  CHOOSE FREE
                </button>
              </div>
              <div className="flex flex-col justify-center bg-gray-800 text-white shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-semibold">Pro</h3>
                <p className="text-xl mt-2">$10 / Month</p>
                <p className="mt-2">
                  Access to advanced AI writing tools and priority support. Ideal for power users looking to take their writing to the next level.
                </p>
                <Link
                  href="https://buy.stripe.com/4gw3ev7xg4V5bO8003"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 text-white px-6 text-sm font-medium mt-6 hover:bg-red-700 transition"
                >
                  CHOOSE PRO
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Bar */}
      <footer className="bg-gray-900 text-white py-4 fixed bottom-0 w-full">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div>
            <Link href="#" className="text-white hover:underline">
              Terms of Service
            </Link>
            <span className="mx-2">|</span>
            <Link href="#" className="text-white hover:underline">
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/bita-yonas" aria-label="GitHub" className="hover:text-gray-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.87 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.152-1.11-1.459-1.11-1.459-.909-.62.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.34 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.031-2.688-.103-.254-.447-1.276.098-2.659 0 0 .841-.27 2.75 1.026A9.561 9.561 0 0112 6.846c.854.004 1.717.115 2.524.339 1.908-1.295 2.748-1.026 2.748-1.026.546 1.383.202 2.405.099 2.659.642.701 1.031 1.595 1.031 2.688 0 3.847-2.338 4.694-4.566 4.942.358.309.677.92.677 1.855 0 1.338-.012 2.419-.012 2.747 0 .269.18.579.688.482C19.134 20.163 22 16.418 22 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/bitania-yonas-yirse-46b99a26b/" aria-label="Instagram" className="hover:text-gray-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm10.5 2H7.75A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h10.5A3.75 3.75 0 0022 16.25v-8.5A3.75 3.75 0 0018.25 4zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm6-1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z"
                />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/bitania-yonas-yirse-46b99a26b/" aria-label="LinkedIn" className="hover:text-gray-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0v-8zM8 14h4M12 8h.01"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}