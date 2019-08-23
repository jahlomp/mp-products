import React from "react";
import { mount } from "enzyme";
import Product from "./Product";

const setup = () => {
  const props = {
    id: 0,
    price: 20.1,
    name: "Product 1"
  };

  const enzymeWrapper = mount(<Product {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("components", () => {
  describe("Product", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper, props } = setup();

      expect(
        enzymeWrapper
          .find(".ant-card-head-title")
          .hostNodes()
          .text()
      ).toEqual(props.name);

      expect(
        parseFloat(
          enzymeWrapper
            .find(".price")
            .hostNodes()
            .text()
        )
      ).toEqual(props.price);
    });
  });
});
