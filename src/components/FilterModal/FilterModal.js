import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_MODAL_CLOSE } from "../../reducers/modal";
import { CHANGE_JOB_SORT, CHANGE_COUNTRIES } from "../../reducers/filters";
import FilterModalSelectButton from "../FilterModalSelectButton";

import styles from "./FilterModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FilterModal = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector(state => state.modal);
  const {
    countries,
    employee_count,
    job_sort,
    years,
    selected_job_sort,
    selected_countries
  } = useSelector(state => state.filters);

  const closeFilterModal = useCallback(() => {
    dispatch({
      type: FILTER_MODAL_CLOSE
    });
  }, []);

  const onChangeCountries = key => {
    dispatch({
      type: CHANGE_COUNTRIES,
      key
    });
  };
  const onChangeYears = value => {};
  const onChangeLocations = value => {};
  const onChangeJobSort = useCallback(e => {
    dispatch({
      type: CHANGE_JOB_SORT,
      selected_job_sort: e.target.value
    });
  }, []);

  const selectedJobSort = arr => {
    return arr.find(item => item.selected);
  };

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
                <select
                  name="orderSelector"
                  id="orderSelector"
                  value={selected_job_sort}
                  onChange={onChangeJobSort}
                >
                  {job_sort.map(item => (
                    <option value={item.key} key={item.key}>
                      {item.display}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 국가 */}
            <div className={cx("wrap", "country")}>
              <label htmlFor="yearSelector">국가</label>
              <div className={cx("buttons-wrap")}>
                {countries.map(item => (
                  <FilterModalSelectButton
                    key={item.key}
                    display={item.display}
                    locations={item.locations}
                    selected={selected_countries.key === item.key}
                    onClick={() => onChangeCountries(item.key)}
                  />
                ))}
              </div>
            </div>

            {/* 지역 */}
            {selected_countries.locations &&
              selected_countries.locations.length > 0 && (
                <div className={cx("wrap", "region")}>
                  <label htmlFor="yearSelector">지역</label>
                  <div className={cx("buttons-wrap")}>
                    {selected_countries.locations.map(item => (
                      <FilterModalSelectButton
                        key={item.key}
                        display={item.display}
                      />
                    ))}
                  </div>
                </div>
              )}

            {/* 경력 */}
            <div className={cx("wrap", "year")}>
              <label htmlFor="yearSelector">경력</label>
              <div className={cx("selector-wrap")}>
                <select name="yearSelector" id="yearSelector">
                  {years.map(item => (
                    <option value={item.key} key={item.key}>
                      {item.display}
                    </option>
                  ))}
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
