'use client'

import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["Engineer", "YouTuber", "Teacher"];
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Browser में setTimeout number return करता है
    let timeout: ReturnType<typeof setTimeout>;

    function typeWord(word: string, charIndex = 0) {
      if (charIndex < word.length) {
        setDisplayText((prev) => prev + word[charIndex]);
        timeout = setTimeout(() => typeWord(word, charIndex + 1), 150);
      } else {
        timeout = setTimeout(() => {
          setDisplayText("");
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 1000);
      }
    }

    typeWord(words[currentWordIndex]);

    return () => clearTimeout(timeout); // cleanup
  }, [currentWordIndex]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center bg-black text-white px-6 md:px-16">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left">
       <br/>
       <br/>
       <br/>
       <br/>
        <span className="text-lg">Hello!</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-3">
          I'm <span className="text-blue-500">Amnesh Pal</span>
        </h1>

        <span className="block text-xl md:text-2xl text-blue-300 mt-2 min-h-[28px]">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>

        <h2 className="text-lg md:text-xl text-gray-300 mt-4">MCA</h2>
        <h2 className="text-lg md:text-xl text-gray-300">Passionate Web Developer</h2>

        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a
            href="https://www.youtube.com/@amneshpal5757"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-800 text-white rounded hover:scale-105 transition"
          >
            YouTube
          </a>
          <a
            href="https://github.com/amneshpal"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-800 text-blue-800 rounded hover:bg-blue-800 hover:text-white transition"
          >
            My Works
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 relative w-full h-[400px] md:h-screen mt-10 md:mt-0">
        <img
          src="/image.png"
          alt="Amnesh Pal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black-900 to-black-700 opacity-40"></div>
      </div>
    </section>
  );
}
