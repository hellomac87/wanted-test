import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_MODAL_CLOSE } from "../../reducers/modal";

import FilterModalSelectButton from "../FilterModalSelectButton";

import styles from "./FilterModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FilterModal = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector(state => state.modal);

  const closeFilterModal = useCallback(() => {
    dispatch({
      type: FILTER_MODAL_CLOSE
    });
  }, []);

  return (
    <section className={cx("container", isOpen && "open")}>
      <div className={cx("mask")} />
      <article className={cx("content")}>
        <header className={cx("header")}>
          <button type={"button"} className={cx("init-btn")}>
            초기화
          </button>
          <h1 className={cx("title")}>필터</h1>
          <button
            onClick={closeFilterModal}
            type={"button"}
            className={cx("close-btn")}
          >
            X
          </button>
        </header>

        <div className={cx("body")}>
          <div className={cx("inner")}>
            {/* 정렬 */}
            <div className={cx("wrap", "order")}>
              <label htmlFor="orderSelector">정렬</label>
              <div className={cx("selector-wrap")}>
                <select name="orderSelector" id="orderSelector">
                  <option value="0">촤신순</option>
                  <option value="1">보상금순</option>
                  <option value="2">인기순</option>
                </select>
              </div>
            </div>

            {/* 국가 */}
            <div className={cx("wrap", "country")}>
              <label htmlFor="yearSelector">국가</label>
              <div className={cx("buttons-wrap")}>
                <FilterModalSelectButton title="전세계" />
                <FilterModalSelectButton title="대만" />
                <FilterModalSelectButton title="싱가폴" />
                <FilterModalSelectButton title="일본" />
                <FilterModalSelectButton title="한국" />
                <FilterModalSelectButton title="홍콩" />
                <FilterModalSelectButton title="기타" />
              </div>
            </div>

            {/* 지역 */}
            <div className={cx("wrap", "region")}>
              <label htmlFor="yearSelector">지역</label>
              <div className={cx("buttons-wrap")}>
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
                <FilterModalSelectButton title="전국" />
              </div>
            </div>

            {/* 경력 */}
            <div className={cx("wrap", "year")}>
              <label htmlFor="yearSelector">경력</label>
              <div className={cx("selector-wrap")}>
                <select name="yearSelector" id="yearSelector">
                  <option value="0">촤신순</option>
                  <option value="1">보상금순</option>
                  <option value="2">인기순</option>
                </select>
              </div>
            </div>

            {/* 체크박스 */}
            <div className={cx("wrap", "saveState")}>
              <input type="checkbox" />
              적용된 필터를 저장하고 유지합니다.
            </div>
          </div>

          <footer className={cx("footer")}>
            <button className={cx("save-button")} type="button">
              적용
            </button>
          </footer>
        </div>
      </article>
    </section>
  );
};

export default FilterModal;
