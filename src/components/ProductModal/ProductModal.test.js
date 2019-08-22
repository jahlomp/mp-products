import React from "react";
import { shallow } from "enzyme";
import ProductModal from "./ProductModal";

describe("components", () => {
  describe("ProductModal", () => {
    it("renders children when passed in", () => {
      const props = {
        onCancel: jest.fn()
      };
      const wrapper = shallow(
        <ProductModal {...props}>
          <div className="unique" />
        </ProductModal>
      );

      expect(wrapper.contains(<div className="unique" />)).toBe(true);
    });
  });
});
