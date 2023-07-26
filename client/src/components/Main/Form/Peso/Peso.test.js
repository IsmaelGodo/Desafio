import React from "react";
import { shallow } from "enzyme";
import Peso from "./Peso";

describe("Peso", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Peso />);
    expect(wrapper).toMatchSnapshot();
  });
});
