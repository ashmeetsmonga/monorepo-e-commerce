import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between p-5">
      <div className="text-lg font-semibold">Fashionista</div>
      <div className="flex gap-4">
        <div>User</div>
        <div>Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
