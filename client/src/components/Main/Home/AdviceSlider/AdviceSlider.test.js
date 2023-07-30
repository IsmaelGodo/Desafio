import React from "react";
import { shallow } from "enzyme";
import AdviceSlider from "./AdviceSlider";

describe("AdviceSlider", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdviceSlider />);
    expect(wrapper).toMatchSnapshot();
  });
});
