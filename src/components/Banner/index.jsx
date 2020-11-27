import React from "react";

const Banner = (props) => {
  const { title, backgroundUrl } = props;

  const bannerStyle = backgroundUrl
    ? { background: `url(${backgroundUrl})` }
    : {};

  return (
    <section className="banner" style={bannerStyle}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
};

export default Banner;
