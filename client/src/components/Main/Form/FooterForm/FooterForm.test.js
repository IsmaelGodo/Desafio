import React from "react";
import { shallow } from "enzyme";
import FooterForm from "./FooterForm";

describe("FooterForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FooterForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
