import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
