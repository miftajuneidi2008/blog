import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-2 mt-20 bg-[#1d1e22] text-slate-200">
      <div className="mx-auto  max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl md:text-3xl font-bold">M.Blog</h1>
          <p className="text-slate-400 text-md max-w-md">It is a platform for sharing your thoughts and ideas.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="footer-title">Blog categories</h3>
          <div className="flex flex-col gap-2">
            <p className="text-slate-400">Programming </p>
            <p className="text-slate-400">Data Structures</p>
            <p className="text-slate-400">Artificial Intelligence</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="footer-title">Popular Blogs</h3>
          <div className="flex flex-col gap-2">
            <Link href={`/`} className="text-slate-300 hover:text-slate-50 transition-all ease-in-out duration-300">The role of AI in software development</Link>
            <Link href={`/`}>Can AI replace developers</Link>
            <Link href={`/`}>Next js 16 (beta) full guide</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
