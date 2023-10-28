import Button from "./Button";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <nav className="bg-zinc-800 flex gap-x-1 sticky w-full z-20 h-10 top-0 left-0 border-b border-gray-600">
      <img className="my-1 mx-2" about="logo" src="public\logo.png" />
      <NavBarLink to="Home" />
      <NavBarLink to="About" />
      <div className="ml-auto" />
      <Button
        onClick={() => {
          console.log("boi");
        }}
        content="Login"
      />
      <img
        className="my-1 mx-2 rounded-2xl bg-zinc-400"
        about="avatar"
        src="public\UserAvatar.png"
      />
    </nav>
  );
};

export default NavBar;
