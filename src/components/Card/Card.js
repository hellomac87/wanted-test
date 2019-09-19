import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Card = ({ job }) => {
  return (
    <li className={cx("container")}>
      <a
        href={`https://www.wanted.co.kr/wd/${job.id}`}
        target="_self"
        className=""
      >
        <header
          className={cx("header")}
          style={{ backgroundImage: `url(${job.title_img.thumb})` }}
        >
          <button type="button" className={cx("likeButton")}>
            {/* <i class="icon-ic_favorite_black_24px"></i>2 */}
            {job.like_count}
          </button>
        </header>
        <div className={cx("body")}>
          <dl>
            <dt>{job.position}</dt>
            <dd>
              {job.company.name}
              <br />
              <span>{job.address.location}</span>
              <span className={cx("addressDot")}>.</span>
              <span>{job.address.country}</span>
            </dd>
          </dl>

          <div className={cx("reward")}>
            채용보상금 {job.reward.formatted_recommendee}
          </div>
        </div>
      </a>
    </li>
  );
};

Card.propTypes = {};

export default Card;
