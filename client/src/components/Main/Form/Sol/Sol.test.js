import React from "react";
import { shallow } from "enzyme";
import Sol from "./Sol";

describe("Sol", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Sol />);
    expect(wrapper).toMatchSnapshot();
  });
});
