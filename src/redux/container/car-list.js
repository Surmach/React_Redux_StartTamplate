import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { select } from "../actions/actions";

class CarList extends React.Component {
  showCars() {
    return this.props.cars.map(car => {
      return (
        <li>
          <button
            onClick={() => {
              this.props.select(car);
            }}
            key={car.id}
          >
            {car.model}
          </button>
        </li>
      );
    });
  }

  render() {
    return <ul>{this.showCars()}</ul>;
  }
}

let mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators({ select: select }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
