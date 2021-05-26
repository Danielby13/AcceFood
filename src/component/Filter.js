import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import meat from "../icons/005-meat.png";
import no_meat from "../icons/004-no-meat.png";
import pizza from "../icons/006-pizza-slice.png";
import grocery from "../icons/008-grocery.png";

export const Filter = (props) => {
  return (
    <div
      style={{
        float: "right",
        border: "1px solid black",
        width: "320px",
        height: "90vh",
        marginRight: "10px",
        marginTop: "10px",
      }}
    >
      &nbsp;&nbsp;&nbsp;
      <img src={meat} alt="Meat" /> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <img src={no_meat} alt="no_Meat" a href="/" />
      <br />
      &nbsp;&nbsp;&nbsp;
      <img src={pizza} alt="pizza" a href="/" /> &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      <img src={grocery} alt="grocery" a href="/" />
      <br />
    </div>
  );
};

Filter.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
