import { FC } from "react";
import classes from "./ProducktCardList.module.scss";
import { Link } from "react-router-dom";
import ProductCard from "Components/ProducktCard/ProducktCard";
import { producktData } from "data/test/testData";

const ProducktCardList: FC = () => {
  return (
    <section className={classes.preVue}>
      <div className={classes.preVue_head}>
        <h1>Similiar Products</h1>
        <Link to={"#"}>See everything</Link>
      </div>
      <div className={classes.preVue_content}>
        {producktData.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            lastPrice={item.lastPrice}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
};
export default ProducktCardList;
