// Footer.tsx

import React from "react";
import { Layout, Row, Col } from "antd";
import classes from "./FooterComponent.module.scss";
import logo from "../../assets/icon/logo-removebg-preview.png";

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  return (
    <>
      {" "}
      <Footer className={classes.footer}>
        <div className={classes.footer_left}>
          <div className={classes.footer_left_logo}>
            {" "}
            <img src={logo} alt="" />
          </div>
          <br />
          <h1>
            Quality materials, good designs, professional craftsmanship and
            sustainability.
          </h1>
        </div>
        <div className={classes.footer_rows}>
          <Row>
            <Col span={6}>
              <div className={classes.footer_rows_column}>
                <h3>Shop</h3>
                <p>Clothing</p>
                <p>Shoes</p>
                <p>Accessories</p>
                <p>Brands</p>
                <p>Sale</p>
                <p>Gift Cards</p>
              </div>
            </Col>
            <Col span={6}>
              <div className={classes.footer_rows_column}>
                <h3>Gift Cards</h3>
                <p>Buy Gift Cards</p>
                <p>About Gift Cards</p>
                <p>Redeem a Gift Card</p>
                <p>Corporate Gift Cards</p>
                <p>Subscribe </p>
              </div>
            </Col>
            <Col span={6}>
              <div className={classes.footer_rows_column}>
                <h3>About Store</h3>
                <p>About us</p>
                <p>Support</p>
                <p>Careers</p>
                <p>Newsroom</p>
                <p>Investors</p>
              </div>
            </Col>
            <Col span={6}>
              <div className={classes.footer_rows_column}>
                <h3>Legal</h3>
                <p>Legal Notice</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </Col>
          </Row>
        </div>
      </Footer>
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid #00000027",
          margin: "0 50px",
          padding: "48px",
        }}
        className="UnderFooter"
      >
        <p style={{ fontWeight: "400", opacity: "0.65" }}>
          © 2023 Big Bee. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default FooterComponent;
