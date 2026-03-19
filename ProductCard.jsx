import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const discount =
    product.discountPercentage?.toFixed(0);

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >

      {discount && (
        <div className="sale">
          -{discount}%
        </div>
      )}

      <img src={product.thumbnail} />

      <h4>{product.title}</h4>

      <div className="price">
        <span className="new">
          ${product.price}
        </span>
      </div>

    </div>
  );
};

export default ProductCard;