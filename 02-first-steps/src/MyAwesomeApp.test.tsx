import { describe, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomApp', () => {
    test('should render firstName and lastName', () => {

        // console.log(document.body);

        const { container } = render(<MyAwesomeApp />);

        screen.debug()
    });
})