import React from "react";
import { shallow } from "enzyme";
import AdviceText from "./AdviceText";

describe("AdviceText", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdviceText />);
    expect(wrapper).toMatchSnapshot();
  });
});
