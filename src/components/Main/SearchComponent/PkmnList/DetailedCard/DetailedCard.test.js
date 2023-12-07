import React from "react";
import { shallow } from "enzyme";
import DetailedCard from "./DetailedCard";

describe("DetailedCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailedCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
