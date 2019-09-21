import React from "react";
import PropTypes from "prop-types";

import styles from "./FilterModalSelectButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FilterModalSelectButton = ({ title }) => {
  return (
    <button className={cx("button", "active")} type="button">
      {title}
    </button>
  );
};

FilterModalSelectButton.propTypes = {};

export default FilterModalSelectButton;
