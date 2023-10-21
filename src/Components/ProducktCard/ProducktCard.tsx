import { FC } from "react";
import classes from "./ProduckCard.module.scss";
import { useNavigate } from "react-router-dom";
interface Props {
  image: string;
  title: string;
  name: string;
  price: number;
  lastPrice: number;
}

const ProductCard: FC<Props> = ({ image, title, name, price, lastPrice }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/productmore")}
      className={classes.ProductCard}
    >
      <div className={classes.ProductCard_image}>
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <h1>{name}</h1>

      <article>
        <h1>${price}</h1>
        <h4>${lastPrice}</h4>
      </article>
    </div>
  );
};

export default ProductCard;
