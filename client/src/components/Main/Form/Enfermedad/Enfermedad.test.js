import React from "react";
import { shallow } from "enzyme";
import Enfermedad from "./Enfermedad";

describe("Enfermedad", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Enfermedad />);
    expect(wrapper).toMatchSnapshot();
  });
});
