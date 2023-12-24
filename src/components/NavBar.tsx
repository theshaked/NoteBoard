import Button from "./Button";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  // const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  return (
    <nav className="bg-zinc-800 flex gap-x-2 sticky w-full z-20 h-10 top-0 left-0 border-b border-gray-600">
      <img className="my-1 mx-2" about="logo" src="public\logo.png" />
      <NavBarLink to="Home" />
      <NavBarLink to="Board" />
      <NavBarLink to="About" />
      <div className="ml-auto" />
      <Button
        widthFit
        primaryStyle
        onClick={() => {
          console.log("Login");
        }}
        children="Login"
      />
      <Button
        widthFit
        primaryStyle
        onClick={() => {
          console.log("Sign Up");
        }}
        children="Sign Up"
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
