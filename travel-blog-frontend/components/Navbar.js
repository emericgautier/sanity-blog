import Image from "next/image";
import Link from "next/link";
import logo from "../public/travel-blog-logo.png";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <Link href="/">
          <Image src={logo} alt="Travel Blog Logo" width={200} height={200} />
        </Link>
      </div>
      <div className="nav-item-container">
        <p></p>
      </div>
    </nav>
  );
};

export default Navbar;
