import React from "react";
import { shallow } from "enzyme";
import PhysicalData from "./PhysicalData";

describe("PhysicalData", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PhysicalData />);
    expect(wrapper).toMatchSnapshot();
  });
});
