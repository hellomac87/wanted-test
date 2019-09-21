import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_MODAL_OPEN } from "../../reducers/modal";

import Button from "../Button";

import styles from "./FilterList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FilterList = () => {
  const dispatch = useDispatch();

  const openFilterModal = useCallback(() => {
    dispatch({
      type: FILTER_MODAL_OPEN
    });
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("left")}>
        <Button onClick={openFilterModal} title={"최신순"} />
        <Button
          onClick={openFilterModal}
          isDefault={false}
          label={"국가"}
          title={"한국"}
        />
        <Button
          onClick={openFilterModal}
          isDefault={true}
          label={"지역"}
          title={"전국"}
        />
        <Button
          onClick={openFilterModal}
          isDefault={false}
          label={"경력"}
          title={"신입"}
        />
      </div>
      <div className={cx("right")}>
        <Button onClick={openFilterModal} isDefault={false} title={"필터"} />
      </div>
    </div>
  );
};

export default FilterList;
