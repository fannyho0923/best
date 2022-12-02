import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import "./Content1.css";

const Content1 = ({ lang, locale, setLocale }) => {
  return (
    <div className="content-1-container">
      <img
        src="https://picsum.photos/1352/1086"
        alt=""
        className="content-1-bg"
      />

      <div className="content-1-red-banner">
        <h1>
          佰事達，
          <br />
          BE A STAR
        </h1>
        <p>
          佰事達創立三十餘年從傳遞價值到創造價值，立志為事業夥伴與廣大的消費者帶來方向與力量，成為為業界最閃耀的一顆星;以永不熄滅的真誠光芒，提供最佳方案，引領世界追尋更美好的價值。
        </p>
        <button>觀看影片</button>
      </div>

      <div className="content-1-white-banner">
        <div className="service service-1">
          <div className="icon"></div>
          <div className="title">
            <h2>商流</h2>
          </div>
          <div className="desc">
            <p>專業團隊提供品牌代理之全方位企劃與拓展</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="service service-2">
          <div className="icon"></div>
          <div className="title">
            <h2>物流</h2>
          </div>
          <div className="desc">
            <p>專業團隊提供物流整合服務的最佳方案</p>
          </div>
        </div>
      </div>

      <div className="content-1-white-banner-mobile">
        <div className="service service-1">
          <div className="icon"></div>
          <div className="desc">
            <h2>商流</h2>
            <p>專業團隊提供品牌代理之全方位企劃與拓展</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="service service-2">
          <div className="icon"></div>
          <div className="desc">
            <h2>物流</h2>
            <p>專業團隊提供物流整合服務的最佳方案</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
