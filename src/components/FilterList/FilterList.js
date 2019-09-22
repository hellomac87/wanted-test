import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_MODAL_OPEN } from "../../reducers/modal";

import Button from "../Button";

import styles from "./FilterList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FilterList = () => {
  const dispatch = useDispatch();
  const {
    selected_job_sort,
    selected_countries,
    selected_year,
    selected_locations
  } = useSelector(state => state.filters);

  const openFilterModal = useCallback(() => {
    dispatch({
      type: FILTER_MODAL_OPEN
    });
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("left")}>
        <Button onClick={openFilterModal} title={selected_job_sort.display} />
        <Button
          onClick={openFilterModal}
          isDefault={false}
          label={"국가"}
          title={selected_countries.display}
        />
        <Button
          onClick={openFilterModal}
          isDefault={true}
          label={"지역"}
          title={selected_locations.display}
        />
        <Button
          onClick={openFilterModal}
          isDefault={false}
          label={"경력"}
          title={selected_year.display}
        />
      </div>
      <div className={cx("right")}>
        <Button onClick={openFilterModal} isDefault={false} title={"필터"} />
      </div>
    </div>
  );
};

export default FilterList;
