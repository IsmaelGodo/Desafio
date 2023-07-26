import React from "react";
import { shallow } from "enzyme";
import Agua from "./Agua";

describe("Agua", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Agua />);
    expect(wrapper).toMatchSnapshot();
  });
});
