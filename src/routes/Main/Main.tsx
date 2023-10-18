import { HeaderComponent, Sidebar } from "Components";
import FooterComponent from "Components/FoooterComponent/FooterComponent";
import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "store/hook";
import { setWindowWidth } from "store/slices/windowStateSlice";

export default function Main() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setWindowWidth(window.innerWidth));
    const handleWindowResize = () =>
      dispatch(setWindowWidth(window.innerWidth));
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Layout style={{ overflow: "hidden" }}>
      {/* <Sidebar /> */}
      <Layout>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </Layout>
    </Layout>
  );
}
