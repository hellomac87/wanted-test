import React from "react";
import Button from "../Button";

import styles from "./FilterList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FilterList = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("left")}>
        <Button title={"최신순"} />
        <Button isDefault={false} label={"국가"} title={"한국"} />
        <Button isDefault={true} label={"지역"} title={"전국"} />
        <Button isDefault={false} label={"경력"} title={"신입"} />
      </div>
      <div className={cx("right")}>
        <Button isDefault={false} title={"필터"} />
      </div>
    </div>
  );
};

export default FilterList;
