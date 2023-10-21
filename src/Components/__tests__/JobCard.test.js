import React from "react";
import '@testing-library/jest-dom'
import { screen, render, cleanup, waitFor, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
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

        expect(screen.getByText('senior')).toBeInTheDocument()
    })

})
