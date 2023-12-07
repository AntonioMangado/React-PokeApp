import React from "react";
import { shallow } from "enzyme";
import PkmnList from "./PkmnList";

describe("PkmnList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PkmnList />);
    expect(wrapper).toMatchSnapshot();
  });
});
