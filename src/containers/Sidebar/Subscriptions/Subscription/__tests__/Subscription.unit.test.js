import React from "react";
import { shallow } from "enzyme";
import { Subscription } from "../Subscription";
import { Menu } from "semantic-ui-react";

describe("Subscription", () => {
  test("should render Subscription", () => {
    const wrapper = shallow(<Subscription />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Renders Subscription with Broadcasting property", () => {
    const wrapper = shallow(<Subscription broadcasting/>);
    expect(wrapper).toMatchSnapshot();
  });
  test("Renders Subscription with video count for label", () => {
    const wrapper = shallow(<Subscription label='Courseara' amountNewVideos={10} />);
    expect(wrapper).toMatchSnapshot();
  });
});
