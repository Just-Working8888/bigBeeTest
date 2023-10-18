import { FC } from "react";
import classes from "./BigCard.module.scss";
interface Props {
  image: string;
  title: string;
  content: string;
}

const BigCard: FC<Props> = ({ image, title, content }) => {
  return (
    <div className={classes.BigCard}>
      <div className={classes.BigCard_image}>
        <img src={image} alt={title} />
      </div>
      <h1>{title}</h1>
      <h2>{content}</h2>
    </div>
  );
};

export default BigCard;
