/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Redux/features/cartSlice/cartSlice";
import Swal from "sweetalert2";

const Carts = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="overflow-x-auto mx-20 ">
      <table className="table ">
        <thead className="bg-slate-600 text-xl text-white">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-base-900 text-black p-40">
          {cartProducts.map((product, index) => (
            <Tr
              className="rounded-md"
              product={product}
              index={index}
              key={product.id}
            ></Tr>
          ))}
        </tbody>
      </table>
      <tfoot className="text-2xl flex justify-around text-black font-bold">
        <button className="btn btn-outline">Please Checkout</button>
        <p>
          <span className="text-black  text-3xl font-bold">Subtotal:</span> ${" "}
          {totalAmount.toFixed(2)}
        </p>
      </tfoot>
    </div>
  );
};

const Tr = ({ product, index }) => {
  const dispatch = useDispatch();
  const { image, price, quantity, title, id } = product;

  //======= increment cart item ===========
  const incrementItem = (event) => {
    dispatch(
      cartActions.addItem({
        id,
      })
    );
    event.stopPropagation();
  };

  //======== decrement cart item ========
  const decreaseItem = (event) => {
    dispatch(cartActions.removeItem(id));
    event.stopPropagation();
  };

  //======== delete cart item ========
  const deleteItem = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cartActions.deleteItem(product.id));
      }
    });
  };
  return (
    <tr>
      <td className="w-7">{index + 1}</td>
      <td>
        <img className="mask mask-squircle w-12 h-12" src={image} />
      </td>
      <td>{title}</td>
      <td>{price}</td>
      <td>
        <div className=" flex  items-center text-xl w-32 bg-pink-100 justify-between border px-2 py-1 border-red-900 rounded-lg">
          <button
            className="btn btn-square  btn-xs  text-black text-xl"
            onClick={(event) => decreaseItem(event)}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="btn btn-square btn-xs"
            onClick={(event) => incrementItem(event)}
          >
            +
          </button>
        </div>
      </td>
      <td>
        <button
          onClick={() => deleteItem(id)}
          className="btn btn-sm btn-error text-white"
        >
          <FaTrashAlt></FaTrashAlt> Delete
        </button>
      </td>
    </tr>
  );
};

export default Carts;
