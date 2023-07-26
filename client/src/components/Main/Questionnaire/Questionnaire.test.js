import React from "react";
import { shallow } from "enzyme";
import Questionnaire from "./Questionnaire";

describe("Questionnaire", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper).toMatchSnapshot();
  });
});
