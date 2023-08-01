import React from "react";
import { shallow } from "enzyme";
import Diagnostico from "./Diagnostico";

describe("Diagnostico", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Diagnostico />);
    expect(wrapper).toMatchSnapshot();
  });
});
