import React from "react";

import styles from "./FilterModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FilterModal = () => {
  return (
    <section className={cx("container")}>
      <div className={cx("mask")} />
      <article className={cx("content")}>
        <header className={cx("header")}>
          <button type={"button"} className={cx("init-btn")}>
            초기화
          </button>
          <h1 className={cx("title")}>필터</h1>
          <button type={"button"} className={cx("close-btn")}>
            X
          </button>
        </header>

        <div className={cx("body")}>
          <div className={cx("inner")}>
            {/* 정렬 */}
            <div className={cx("order-wrap")}>
              <label htmlFor="orderSelector">정렬</label>
              <div className={cx("selector-wrap")}>
                <select name="orderSelector" id="orderSelector">
                  <option value="0">촤신순</option>
                  <option value="1">보상금순</option>
                  <option value="2">인기순</option>
                </select>
              </div>
            </div>

            {/* 경력 */}
            <div className={cx("year-wrap")}>
              <label htmlFor="yearSelector">정렬</label>
              <div className={cx("selector-wrap")}>
                <select name="yearSelector" id="yearSelector">
                  <option value="0">촤신순</option>
                  <option value="1">보상금순</option>
                  <option value="2">인기순</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FilterModal;
