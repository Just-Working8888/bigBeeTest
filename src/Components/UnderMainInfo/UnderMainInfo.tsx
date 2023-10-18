import { FC } from "react";

import classes from "./UnderMainInfo.module.scss";

type Props = {
  icon: any;
  title: string;
  content: string;
};

const UnderMainInfo: FC<Props> = ({ icon, title, content }) => {
  return (
    <div className={classes.UnderMainInfo}>
      <div className={classes.UnderMainInfo_right}>{icon}</div>
      <div className={classes.UnderMainInfo_left}>
        <h1>{title}</h1>
        <h2>{content}</h2>
      </div>
    </div>
  );
};

export default UnderMainInfo;
