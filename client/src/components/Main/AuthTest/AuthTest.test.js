import React from "react";
import { shallow } from "enzyme";
import AuthTest from "./AuthTest";

describe("AuthTest", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AuthTest />);
    expect(wrapper).toMatchSnapshot();
  });
});
