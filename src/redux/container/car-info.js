import React from "react";
import { connect } from "react-redux";

class CarInfo extends React.Component {
  render() {
    if (!this.props.car) {
      return <div></div>;
    }
    return (
      <div>
        <span>{this.props.car.model}</span> <br></br>
        <span>{this.props.car.weight}</span> <br></br>
        <span>{this.props.car.speed}</span> <br></br>
        <span>{this.props.car.color}</span> <br></br>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    car: state.action
  };
};

export default connect(mapStateToProps)(CarInfo);
