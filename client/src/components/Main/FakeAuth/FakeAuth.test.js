import React from "react";
import { shallow } from "enzyme";
import FakeAuth from "./FakeAuth";

describe("FakeAuth", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FakeAuth />);
    expect(wrapper).toMatchSnapshot();
  });
});
