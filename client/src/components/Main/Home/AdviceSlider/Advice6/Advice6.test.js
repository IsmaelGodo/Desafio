import React from "react";
import { shallow } from "enzyme";
import Advice6 from "./Advice6";

describe("Advice6", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Advice6 />);
    expect(wrapper).toMatchSnapshot();
  });
});
