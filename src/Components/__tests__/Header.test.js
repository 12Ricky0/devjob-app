import React from "react";
import '@testing-library/jest-dom'
import { screen, render, waitFor, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../Header";
import { ThemeContext } from "../../App";

const themeContex = {
    theme: 'light',
    setTheme: jest.fn(),
    state: jest.fn(),
    dispatch: jest.fn(),
}

const HeaderComponent = () => {
    return (
        <BrowserRouter>
            <ThemeContext.Provider initialEntries={["/"]} value={themeContex}>
                <Header />
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

// afterEach(cleanup)

describe("HeaderComponent", () => {

    it("should render with all items", () => {
        render(<HeaderComponent />)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
    });

    it('swich theme when clicked', async () => {
        render(<HeaderComponent />)
        const checkbox = screen.getByRole('checkbox');

        await userEvent.click(checkbox)

        await waitFor(() => {
            expect(themeContex.setTheme.mock.calls).toHaveLength(1)
        })



    })

    it('reload page when clicked', async () => {
        render(<HeaderComponent />)

        act(() => {
            userEvent.click(screen.getByAltText('devjob'))

        })

        await expect(window.location.pathname).toBe('/')

        // await waitFor(() => {
        //     expect(window.location.pathname).toBe('/')
        // })

    })

})