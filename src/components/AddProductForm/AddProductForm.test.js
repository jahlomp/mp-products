import React from "react";
import { mount } from "enzyme";
import AddProductForm from "./AddProductForm";

const setup = () => {
  const props = {
    addProduct: jest.fn()
  };

  const enzymeWrapper = mount(<AddProductForm {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("components", () => {
  describe("AddProductForm", () => {
    it("should render self, inputs and button", () => {
      const { enzymeWrapper } = setup();

      expect(
        enzymeWrapper.find(".add-product-name-input").hostNodes().length
      ).toBe(1);
      expect(
        enzymeWrapper.find(".add-product-latest-price-input").hostNodes().length
      ).toBe(1);
      expect(enzymeWrapper.find(".add-product-button").hostNodes().length).toBe(
        1
      );
    });
  });
});
