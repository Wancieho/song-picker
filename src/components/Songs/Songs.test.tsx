import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import useSongs, { Song } from "../../hooks/data";
import Songs from "./Songs";

describe("<Songs />", () => {
  test("it should mount", () => {
    const { data } = useSongs();
    render(<Songs songs={data} />);

    const songs = screen.getByTestId("Songs");

    expect(songs).toBeInTheDocument();
  });
});
