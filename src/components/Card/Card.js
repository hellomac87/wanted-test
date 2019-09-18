import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const dummy = {
  address: {
    country: "Korea",
    location: "Seoul"
  },
  company: {
    id: 5290,
    industry_name: "IT, Media",
    name: "크라우드웍스"
  },
  compare_country: true,
  due_time: null,
  id: 27386,
  is_bookmark: false,
  is_like: false,
  like_count: 2,
  ogo_img: {
    origin: "https://static.wanted.co.kr/images/wdes/0_4.ff99dbe1.jpg",
    thumb: "https://static.wanted.co.kr/images/wdes/0_5.ff99dbe1.jpg"
  },

  position: "FE 개발자",
  reward: {
    formatted_recommendee: "US$100",
    formatted_recommender: "US$100",
    formatted_total: "US$200"
  },

  status: "active",
  title_img: {
    origin:
      "https://static.wanted.co.kr/images/company/5290/nth3n9bjbosqbhse__1080_790.jpg",
    thumb:
      "https://static.wanted.co.kr/images/company/5290/nth3n9bjbosqbhse__400_400.jpg"
  }
};

const Card = props => {
  return (
    <div className={cx("container")}>
      <a href="/wd/27386?referer_id=459737" target="_self" className="">
        <header
          className={cx("header")}
          style={{ backgroundImage: `url(${dummy.title_img.thumb})` }}
        >
          <button type="button" className={cx("likeButton")}>
            {/* <i class="icon-ic_favorite_black_24px"></i>2 */}
            {dummy.like_count}
          </button>
        </header>
        <div className={cx("body")}>
          <dl>
            <dt>{dummy.position}</dt>
            <dd>
              {dummy.company.name}
              <br />
              <span>{dummy.address.location}</span>
              <span className={cx("addressDot")}>.</span>
              <span>{dummy.address.country}</span>
            </dd>
          </dl>

          <div className={cx("reward")}>
            채용보상금 {dummy.reward.formatted_recommendee}
          </div>
        </div>
      </a>
    </div>
  );
};

Card.propTypes = {};

export default Card;