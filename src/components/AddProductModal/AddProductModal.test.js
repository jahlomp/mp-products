import React from "react";
import ReactDOM from "react-dom";
import AddProductModal from "./AddProductModal";
import AddProductForm from "../AddProductForm/AddProductForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AddProductModal visible={true} onCancel={() => {}}>
      <AddProductForm addProduct={() => {}} />
    </AddProductModal>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
