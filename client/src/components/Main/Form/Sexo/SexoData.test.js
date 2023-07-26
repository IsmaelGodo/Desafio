import React from "react";
import { shallow } from "enzyme";
import Sexo from "./Sexo";

describe("Sexo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Sexo />);
    expect(wrapper).toMatchSnapshot();
  });
});
