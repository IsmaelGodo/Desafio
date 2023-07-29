import React from "react";
import { shallow } from "enzyme";
import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
