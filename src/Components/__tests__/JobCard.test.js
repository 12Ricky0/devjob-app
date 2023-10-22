import React from "react";
import '@testing-library/jest-dom'
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "../../App";
import Card from "../JobCard";


const jobContext = {
    state: jest.fn(),
    dispatch: jest.fn(),
}

const CardComponent = () => {
    return (
        <BrowserRouter>
            <ThemeContext.Provider initialEntries={["/"]} value={jobContext}>
                <Card />
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

afterEach(cleanup)

describe("JobCard", () => {

    it('renders the job component', () => {
        render(<CardComponent />)
        expect(screen.getByTestId('container')).toBeInTheDocument()
    })

})
