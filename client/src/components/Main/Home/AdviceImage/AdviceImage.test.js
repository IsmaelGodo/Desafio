import React from "react";
import { shallow } from "enzyme";
import AdviceImage from "./AdviceImage";

describe("AdviceImage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdviceImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
