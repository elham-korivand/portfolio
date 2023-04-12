import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();
  console.log(pathname);

  const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
  }> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <span
          onClick={() => setActiveItem(name)}
          className="hover:text-green-400"
        >
          {name}
        </span>
      </Link>
    ) : null;
  };

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/project") setActiveItem("Project");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-white border-green-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-3 text-lg text-white">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />

        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
