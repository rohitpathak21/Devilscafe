import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductProps) => {
  const server = "agefleger";
  return (
    <div className="p-4">
      <div className="w-72 h-80 p-4 flex-none flex flex-col justify-start items-center gap-1 relative bg-white">
        <img
          src={photo}
          alt={name}
          className="h-[calc(18rem-3rem)] w-[calc(18rem-3rem)] object-contain mx-4"
        />
        <p>{name}</p>
        <span className="font-semibold text-lg mb-2">₹{price}</span>
        <div className="absolute top-0 left-0 bg-black opacity-0 hover:opacity-70 h-full w-full flex items-center justify-center text-lg ">
          <button
            onClick={() => handler()}
            className= "flex justify-center items-center bg-red-800 text-black w-10 h-10 rounded-full transition-all duration-75 hover:rotate-[20deg] cursor-pointer "          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
