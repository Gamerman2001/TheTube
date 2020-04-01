import { render } from '@testing-library/react';
import {HeaderNav} from './containers/HeaderNav/HeaderNav'
import {SideBar} from './containers/SideBar/SideBar'
import { create } from "react-test-renderer";
import React from 'react';
import {shallow} from 'enzyme'
import {App} from './App';
import assert from 'assert'

test('Renders App component', () => {
  const wrapper = shallow(
    <App />
  )
  expect(wrapper).toMatchSnapshot();
});

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return { text: "PROCEED TO CHECKOUT" };
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text || this.props.text}
      </button>
    );
  }
}

describe("Button component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = create(<Button text="SUBSCRIBE TO BASIC" />);
    const instance = component.root;
    console.log( component.root.props)
    const button = instance.findByType("button");
    button.props.onClick();
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  });
});

assert.deepEqual({'hi': "no"},{'hi': 'no'})