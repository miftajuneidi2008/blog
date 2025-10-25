import Link from "next/link";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-20 w-full shadow-sm backdrop-blur-xs bg-white">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <Link
          href={`/`}
          className="md:text:3xl text-2xl font-bold text-blue-600"
        >
          M.Blog
        </Link>
        <Menu />
        <SocialMedia />
      </nav>
    </header>
  );
};

export default Navbar;
