import React from "react";
import { shallow } from "enzyme";
import Confirmation from "./Confirmation";

describe("Confirmation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Confirmation />);
    expect(wrapper).toMatchSnapshot();
  });
});
