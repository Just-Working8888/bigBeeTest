import { Layout, Select, Space } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./HeaderComponent.module.scss";
import logo from "../../assets/icon/logo-removebg-preview.png";
import { navCategories } from "data/categories/navCategories";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

type Props = {};

const HeaderComponent: FC<Props> = () => {
  return (
    <>
      <header className={classes.header_top}>
        <Space wrap>
          <Select
            defaultValue="USD"
            style={{ width: 90 }}
            bordered={false}
            options={[
              { value: "USD", label: "USD" },
              { value: "KGC", label: "KGC" },
              { value: "RUR", label: "RUR" },
            ]}
            className={classes.header_top_curens}
          />
          <Select
            defaultValue="en"
            style={{ width: 90 }}
            bordered={false}
            options={[
              { value: "en", label: "en" },
              { value: "ru", label: "ru" },
              { value: "kg", label: "kg" },
            ]}
            className={classes.header_top_curens}
          />
        </Space>
        <div>
          <h2 className={classes.header_top_inf}>
            Free delivery on orders above $50
          </h2>
        </div>
        <div>
          <h2>Help & Contact</h2>
          <h2>Returns Policy</h2>
        </div>
      </header>
      <Header className={classes.header}>
        <div className={classes.header_small}>
          <MenuOutlined />
          <SearchOutlined />
        </div>
        <div className={classes.header_rightBar}>
          <div className={classes.header_rightBar_logo}>
            <img src={logo} alt="" />
          </div>

          <ul className={classes.header_rightBar_categories}>
            {navCategories.map((category) => (
              <li>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className={classes.header_leftBar}>
          <SearchOutlined />
          <ShoppingOutlined />
          <UserOutlined />
        </div>
      </Header>
    </>
  );
};

export default HeaderComponent;
