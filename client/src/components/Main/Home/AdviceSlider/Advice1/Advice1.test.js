import React from "react";
import { shallow } from "enzyme";
import Advice1 from "./Advice1";

describe("Advice1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Advice1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
