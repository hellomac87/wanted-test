import React from "react";
import PropTypes from "prop-types";

import styles from "./FilterModalSelectButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FilterModalSelectButton = ({ display, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cx("button", selected && "selected")}
      type="button"
    >
      {display}
    </button>
  );
};

FilterModalSelectButton.propTypes = {
  display: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default FilterModalSelectButton;
