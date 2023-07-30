import React from "react";
import { shallow } from "enzyme";
import Advice2 from "./Advice2";

describe("Advice2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Advice2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
