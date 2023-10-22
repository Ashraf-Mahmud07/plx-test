import { Link } from "react-router-dom";
import logo from "../../../public/vite.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="navbar bg-slate-900  text-white px-2 md:px-5 lg:px-10 ">
      <div className="flex-auto">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          <p className="justify-normal text-3xl">
            <span>Shop</span>
            <span className="text-pink-500">Pable</span>
          </p>
        </Link>
      </div>
      <div className="flex-auto items-center">
        <Link to='/'>Home</Link>
        <Link to='/products' className="mx-6">All Products</Link>
        <Link to='/cart'>Cart</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle w-10 me-5">
            <div className="indicator w-6 " to='/cart'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item text-red-950 font-bold ">
               {totalQuantity}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card ms-10 card-compact dropdown-content w-52 bg-slate-800 text-white shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{totalQuantity} Items</span>
              <span className="text-info">Subtotal: $ {totalAmount}</span>
              <div className="card-actions">
                <Link to='/cart'>
                  <button className="btn btn-primary btn-block" >
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">{logo}</div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 text-white rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a className="btn btn-accent">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
