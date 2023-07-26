import React from "react";
import { shallow } from "enzyme";
import Altura from "./Altura";

describe("Altura", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Altura />);
    expect(wrapper).toMatchSnapshot();
  });
});
