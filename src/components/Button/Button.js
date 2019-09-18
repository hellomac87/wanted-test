import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({ label, title, isDefault }) => {
  return (
    <button
      className={cx("basic")}
      type={"button"}
      onClick={() => console.log("click")}
    >
      <span className={cx("label")}>{label && label}</span>
      <span className={cx("title", isDefault && "default")}>{title}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string
};

export default Button;
