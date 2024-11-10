import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const user = { _id: "123", role: "admin" };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <Link to={"/"}></Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingCart />
      </Link>
      {user?._id ? (
        <>
          <button onClick={()=>{setIsOpen((prev)=> !prev)}}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
                {user.role === "admin" && (<Link to={"/admin/dashboard"}>Admin</Link>)}
                <Link to={"/orders"}>Orders</Link>
                <button><FaSignOutAlt/></button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
