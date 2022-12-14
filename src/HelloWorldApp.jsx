import React from "react";
import PropTypes from "prop-types";

export const HelloWorldApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

HelloWorldApp.defaultProps = {
  // title: "There is no title.",
  subtitle: "There is no subtitle",
  name: "Brayan Garcia",
};
