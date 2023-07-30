import React from "react";
import { shallow } from "enzyme";
import Advice3 from "./Advice3";

describe("Advice3", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Advice3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
