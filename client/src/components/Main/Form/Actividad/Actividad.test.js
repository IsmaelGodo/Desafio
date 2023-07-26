import React from "react";
import { shallow } from "enzyme";
import Actividad from "./Actividad";

describe("Actividad", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Actividad />);
    expect(wrapper).toMatchSnapshot();
  });
});
