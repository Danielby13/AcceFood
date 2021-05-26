import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import data from "../data/data.json";
import Store from "./Store";

export const List = (props) => {
  const stors = data.data.map((elm) => <Store elem={elm} />);
  return (
    <div
      style={{
        float: "right",
        // border: "2px solid black",
        width: "300px",
        height: "90vh",
      }}
    >
      {stors}
    </div>
  );
};

List.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
