import React from "react";
import { mount } from "enzyme";
import SetProductNewPriceForm from "./SetProductNewPriceForm";

const setup = () => {
  const props = {
    addProduct: jest.fn()
  };

  const enzymeWrapper = mount(<SetProductNewPriceForm {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("components", () => {
  describe("SetProductNewPriceForm", () => {
    it("should render self, inputs and button", () => {
      const { enzymeWrapper } = setup();

      expect(
        enzymeWrapper.find(".set-product-latest-price-input").hostNodes().length
      ).toBe(1);
      expect(enzymeWrapper.find(".set-product-button").hostNodes().length).toBe(
        1
      );
    });
  });
});
