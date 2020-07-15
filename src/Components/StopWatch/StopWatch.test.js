import React from "react";
import { shallow } from "enzyme";
import StopWatch from "./index";

describe("Stop Watch component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StopWatch />);
  });
  it("should render stopwatch component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has the initial state count of zero", () => {
    expect(wrapper.state().timerOn).toEqual(false);
  });

  //   describe('The Count Up Button', () => {
  //     it('increments state count by 1 on click', () => {
  //       wrapper.find('#count-up').props().onClick();
  //       expect(wrapper.state()).toEqual({ count: 1 });
  //     });
  //   });

  //   describe('The Count Down Button', () => {
  //     it('decrements state count by 1 on click', () => {
  //       wrapper.find('#count-down').props().onClick();
  //       expect(wrapper.state()).toEqual({ count: -1 });
  //     });
  //   });
  it("should have start button", () => {
    wrapper.find("#startButton").simulate("click");
    expect(wrapper.state().timerOn).toEqual(true);
  });
});
