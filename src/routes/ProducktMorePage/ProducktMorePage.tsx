import { FC } from "react";
import classes from "./ProducktMorePage.module.scss";
import { Breadcrumb, Button, Image, Progress, Select, Space } from "antd";
import { HeartOutlined, StarOutlined, StarTwoTone } from "@ant-design/icons";
import { ButtonComponent } from "Components";
import ReviewsListComponent from "Components/Reviews/ReviewsListComponent";
import ProducktCardList from "Components/ProductCardList/ProductCardList";

const ProducktMorePage: FC = () => {
  return (
    <div className={classes.main}>
      <section className={classes.main_produckt}>
        <div className={classes.main_produckt_image}>
          <Image
            width={"100%"}
            height={"100%"}
            src="https://images.indianexpress.com/2022/08/M2-Macbook-Air-featured-14082022.jpg"
          />
        </div>
        <div className={classes.main_produckt_inf}>
          <div className={classes.main_produckt_inf_top}>
            <Breadcrumb
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="">Application Center</a>,
                },
                {
                  title: <a href="">Application List</a>,
                },
                {
                  title: "An Application",
                },
              ]}
            />
          </div>
          <div className={classes.main_produckt_inf_title}>
            <h1>Noname brand</h1>
            <h2>Classic T-shirt</h2>
          </div>
          <div className={classes.main_produckt_inf_price}>
            <h1>
              $99.99 <u>$199.99</u>
            </h1>
            <div>
              <StarTwoTone twoToneColor="#ffd000" />
              <h1>4.8</h1>
              <h2>{"(See all 32 reviews)"}</h2>
            </div>
          </div>
          <div className={classes.main_produckt_inf_form}>
            <div className={classes.main_produckt_inf_form_select}>
              <h1>Color</h1>
              <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                // onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
            <div className={classes.main_produckt_inf_form_select}>
              <h1>Size</h1>
              <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                // onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
            <div className={classes.main_produckt_inf_form_select}>
              <h1>Quantity</h1>
              <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                // onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
          </div>
          <div className={classes.main_produckt_inf_button}>
            <Button style={{ color: "black", width: "100%" }} type="primary">
              Add to cart
            </Button>
            <ButtonComponent>
              <HeartOutlined />
            </ButtonComponent>
          </div>
          <div className={classes.main_produckt_inf_dop}>
            <h1>Features</h1>
            <ul>
              <li>100% Cotton</li>
              <li>Fabric: Jersey</li>
              <li>
                Care instructions: Do not tumble dry, machine wash at 30°C
              </li>
              <li>Neckline: Crew neck</li>
              <li>Pattern: Print</li>
            </ul>
          </div>
          <div className={classes.main_produckt_inf_dop}>
            <h1>Description</h1>
            <p>
              This classic white t-shirt is made from 100% cotton, providing a
              comfortable and breathable fit. The unisex design makes it a
              versatile option for men and women. Perfect for layering or
              wearing on its own, this t-shirt is a must-have in any wardrobe.
              It is available in a variety of sizes, making it easy to find the
              perfect fit. Whether you're running errands or dressing up for a
              night out, this white t-shirt is a versatile and timeless piece.
            </p>
          </div>
          <div className={classes.main_produckt_inf_dop}>
            <h1>Delivery</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus
              volutpat aliquet mauris, et blandit.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className={classes.main_reviews}>
        <div className={classes.main_reviews}>
          {" "}
          <ReviewsListComponent />
        </div>
        <div className={classes.main_reviews_add}>
          {" "}
          <div className={classes.main_produckt_inf_price}>
            <h1>
              $99.99 <u>$199.99</u>
            </h1>
            <div>
              <StarTwoTone twoToneColor="#ffd000" />
              <h1>4.8</h1>
              <h2>{"(See all 32 reviews)"}</h2>
            </div>
          </div>
          <div className={classes.main_reviews_add_prog}>
            <div className={classes.main_reviews_add_prog_item}>
              5
              <StarTwoTone twoToneColor="#f5c423" />
              <Progress percent={30} strokeColor="#f5c423" />
            </div>

            <div className={classes.main_reviews_add_prog_item}>
              4
              <StarTwoTone twoToneColor="#f5c423" />
              <Progress percent={30} strokeColor="#f5c423" />
            </div>
            <div className={classes.main_reviews_add_prog_item}>
              3
              <StarTwoTone twoToneColor="#f5c423" />
              <Progress percent={30} strokeColor="#f5c423" />
            </div>
            <div className={classes.main_reviews_add_prog_item}>
              2
              <StarTwoTone twoToneColor="#f5c423" />
              <Progress percent={30} strokeColor="#f5c423" />
            </div>
            <div className={classes.main_reviews_add_prog_item}>
              1
              <StarTwoTone twoToneColor="#f5c423" />
              <Progress percent={30} strokeColor="#f5c423" />
            </div>
          </div>
          <div className={classes.main_reviews_add_title}>
            <h1>Share your review</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
              hendrerit ex vitae sodales.
            </p>
            <Button style={{ color: "black", width: "100%" }} type="primary">
              Primary Button
            </Button>
          </div>
        </div>
      </section>
      <ProducktCardList />
    </div>
  );
};

export default ProducktMorePage;
