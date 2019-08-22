import React from "react";
import { shallow } from "enzyme";
import Loader from "./Loader";

const setup = () => {
  const enzymeWrapper = shallow(<Loader />);

  return {
    enzymeWrapper
  };
};

describe("components", () => {
  describe("Loader", () => {
    it("should render self and child elements", () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find(".mp-loader-wrapper").length).toBe(1);
      expect(enzymeWrapper.find(".mp-loader"));
    });
  });
});
