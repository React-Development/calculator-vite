import React from "react";
import { getAllByText, render } from "@testing-library/react";

import { HelloWorldApp } from "../src/HelloWorldApp";

describe("tests on HelloWorldApp", () => {
  test("must match with the snapshot", () => {
    const title = "Hello, I'm Goku";
    const { container } = render(<HelloWorldApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show title on h1", () => {
    const title = "Hello, I'm Goku";
    const { container, getByText, getByTestId } = render(
      <HelloWorldApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("should show subtitle sent by props", () => {
    const title = "Hello, I'm Goku";
    const subtitle = "I'm a subtitle";

    const { getByText, getAllByText } = render(
      <HelloWorldApp title={title} subtitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
