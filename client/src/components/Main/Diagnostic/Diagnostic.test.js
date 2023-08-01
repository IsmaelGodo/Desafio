import React from "react";
import { shallow } from "enzyme";
import Diagnostic from "./Diagnostic";

describe("Diagnostic", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Diagnostic />);
    expect(wrapper).toMatchSnapshot();
  });
});
