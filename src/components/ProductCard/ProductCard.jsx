import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/features/cartSlice/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  const { image, price, description, title, id, rating } = product;
  // const [disabled, setDisabled] = useState(false);
  //============ add to cart item ================
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
        price,
      })
    );
  };

  //======== handling view item details ==========

  return (
    <div >
      <div className="card w-ful shadow-lg max-w-sm h-[500px] glass">
        <div className="w-[190px] mx-auto">
          <figure className="px-4 ">
            <img
              className=" mx-auto max-h-[230px] pt-5  object-cover  transform scale-100 hover:scale-105 transition-transform duration-300"
              src={image}
              alt="product!"
            />
          </figure>
        </div>
        <div className="card-body bottom-0 absolute overflow-hidden">
          <h2 className="card-title overflow-ellipsis overflow-hidden  font-semibold text-[18px]">
            {/* eslint-disable-next-line react/prop-types */}
            {title?.length > 50 ? title?.slice("0", "40") : title}
          </h2>
          <div>
            <p className="text-xl font-bold">$ {price}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl line-through opacity-50">
                $ {Math.ceil(price + 10)}
              </span>
              <span className="bg-green-400 text-white rounded-md text-xs px-1 py-0.5">
                Save 10 $
              </span>
            </div>
            <Rating
              className="flex-grow-1 text-warning"
              placeholderRating={rating.rate}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <span className="flex-grow-1 ms-2">{rating.rate}</span>
          </div>
          <div className="card-actions items-center mt-5 justify-between">
            <Link to={`/details/${id}`}>
              <button
                className="bg-indigo-500/80 hover:bg-yellow-500/90 btn tracking-wider transition text-white font-medium"
               
              >
                View Details
              </button>
            </Link>
            <button
              className="btn btn-outline btn-md "
              onClick={addToCart}
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
