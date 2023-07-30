import React from "react";
import { shallow } from "enzyme";
import Advice5 from "./Advice5";

describe("Advice5", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Advice5 />);
    expect(wrapper).toMatchSnapshot();
  });
});
