import React from "react";
import { shallow } from "enzyme";
import Advice4 from "./Advice4";

describe("Advice4", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Advice4 />);
    expect(wrapper).toMatchSnapshot();
  });
});
