import React from "react";
import { shallow } from "enzyme";
import Resultado from "./Resultado";

describe("Resultado", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Resultado />);
    expect(wrapper).toMatchSnapshot();
  });
});
