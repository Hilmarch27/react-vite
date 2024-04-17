import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import Button from "../Elements/Button";

const NavbarLayout = () => {
  const username = useLogin();

  const [ totalCart, setTotalCart ] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      setTotalCart(sum);
    }
  }, [cart]);

  // Event handler local storage
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between h-14 bg-blue-600 text-white items-center px-10">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
{totalCart}
      </div>
    </div>
  );
}


export default NavbarLayout;