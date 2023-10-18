import classes from "./MainPage.module.scss";
import { Button } from "antd";

import { useAppSelector } from "store/hook";

import { UnderMainInfoData } from "data/UnderMainInfo/underMainInfoData";
import UnderMainInfo from "Components/UnderMainInfo/UnderMainInfo";
import { bigCards, producktData } from "data/test/testData";
import BigCard from "Components/BigCard/BigCard";
import { Link } from "react-router-dom";
import ProductCard from "Components/ProducktCard/ProducktCard";

const MainPage = () => {
  const { indentKey, indentValues } = useAppSelector(
    (state) => state.windowState
  );
  return (
    <div className={classes.main}>
      <section className={classes.main_baner}>
        <div className={classes.main_baner_title}>
          <h1>Explore Our Newest Cosmetic Arrivals!</h1>
          <h2>
            Our latest cosmetic arrivals have just landed, and they're sure to
            dazzle you. Check out the freshest makeup, skincare, beauty products
            and elevate your beauty routine.
          </h2>
          <br />
          <Button style={{ color: "black" }} type="primary">
            Primary Button
          </Button>
        </div>
      </section>
      <section className={classes.main_info}>
        {UnderMainInfoData.map((item) => (
          <UnderMainInfo
            key={item.id}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </section>
      <section
        style={{ width: "40vw", margin: "48px 0 48px 0", padding: "0 2.8rem" }}
      >
        <UnderMainInfo
          icon={null}
          title="Shop by Collection"
          content="Discover a carefully curated selection of unique and stylish products. From trendy fashion pieces to timeless home decor, our collections offer a wide range of items that are handpicked to suit your taste and style."
        />
      </section>
      <section className={classes.main_bigcards}>
        {bigCards.map((card) => (
          <BigCard
            key={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        ))}
      </section>
      <section className={classes.main_preVue}>
        <div className={classes.main_preVue_head}>
          <h1>Similiar Products</h1>
          <Link to={"#"}>See everything</Link>
        </div>
        <div className={classes.main_preVue_content}>
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
      <section className={classes.main_preVue}>
        <div className={classes.main_preVue_head}>
          <h1>Similiar Products</h1>
          <Link to={"#"}>See everything</Link>
        </div>
        <div className={classes.main_preVue_content}>
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
      <section className={classes.main_media}>
        <div className={classes.main_media_left}>
          <h1>Final stock. Up to 50% off.</h1>
          <Button type="primary" style={{ color: "black" }}>
            Shop now
          </Button>
        </div>
        <div className={classes.main_media_rigth}>
          <div className={classes.main_media_rigth_leftImages}>
            <br />
            <br />
            <br />
            <div className={classes.main_media_rigth_leftImages_image}>
              <img
                src="https://cdn-almcc.nitrocdn.com/bzuhBsmvJjyUaJIXurkHPMzfMQTmmTYd/assets/images/optimized/rev-22dba06/packagingbee.com/wp-content/uploads/2023/09/What-Is-E-Commerce-Packaging.jpg"
                alt=""
              />
            </div>
            <div className={classes.main_media_rigth_leftImages_image}>
              <img
                src="https://cdn-almcc.nitrocdn.com/bzuhBsmvJjyUaJIXurkHPMzfMQTmmTYd/assets/images/optimized/rev-22dba06/packagingbee.com/wp-content/uploads/2023/09/What-Is-E-Commerce-Packaging.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={classes.main_media_rigth_rigthImages}>
            <div className={classes.main_media_rigth_rigthImages_image}>
              {" "}
              <img
                src="https://cdn-almcc.nitrocdn.com/bzuhBsmvJjyUaJIXurkHPMzfMQTmmTYd/assets/images/optimized/rev-22dba06/packagingbee.com/wp-content/uploads/2023/09/What-Is-E-Commerce-Packaging.jpg"
                alt=""
              />
            </div>
            <div className={classes.main_media_rigth_rigthImages_image}>
              {" "}
              <img
                src="https://cdn-almcc.nitrocdn.com/bzuhBsmvJjyUaJIXurkHPMzfMQTmmTYd/assets/images/optimized/rev-22dba06/packagingbee.com/wp-content/uploads/2023/09/What-Is-E-Commerce-Packaging.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={classes.main_preVue}>
        <div className={classes.main_preVue_head}>
          <h1>Similiar Products</h1>
          <Link to={"#"}>See everything</Link>
        </div>
        <div className={classes.main_preVue_content}>
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
      
    </div>
  );
};

export default MainPage;
