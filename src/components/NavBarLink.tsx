import { Link } from "react-router-dom";

interface NavBarLinkProps {
  to: string;
}

const NavBarLink = (props: NavBarLinkProps) => {
  return (
    <div className="p-2 cursor-pointer block text-white hover:text-cyan-600">
      <Link className="" to={`/${props.to}`}>
        {props.to}
      </Link>
    </div>
  );
};

export default NavBarLink;
