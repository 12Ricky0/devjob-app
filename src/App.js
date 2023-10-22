import React, { createContext, useState, useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Card from "./Components/JobCard";
import Details from "./Components/Details";
import data from "./data.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";

export const ThemeContext = createContext()

const initialState = {
  filter: false,
  fullTime: false,
  locationSearch: '',
  titleSearch: '',
  filteredResults: data,
  id: '',
}


const jobReducer = (state, action) => {
  switch (action.type) {
    case 'ID':
      return { ...state, id: action.payload }
    case 'FILTER':
      return { ...state, filter: !state.filter };
    case 'FTO':
      return {
        ...state, fullTime: action.payload
      };
    case 'TITLE':
      return {
        ...state, titleSearch: action.value
      };
    case 'SEARCH':
      return {
        ...state, locationSearch: action.value
      };
    case 'SEARCH-FILTER':
      if (state.fullTime && state.locationSearch) {
        const results = data.filter((ft) => ft.contract === 'Full Time' && ft.location.toLowerCase().includes(state.locationSearch.toLowerCase()))
        return {
          ...state, filteredResults: results
        }
      }

      else if (state.fullTime) {
        const results = data.filter((ft) => ft.contract === 'Full Time')
        return {
          ...state, filteredResults: results
        }
      }
      else if (state.locationSearch) {
        const results = data.filter((ft) => ft.location.toLowerCase().includes(state.locationSearch.toLowerCase()))
        return {
          ...state, filteredResults: results
        }
      }
      else if (!state.locationSearch || state.fullTime) {
        return {
          ...state, filteredResults: data,

        }
      };
      break

    case 'TITLE-FILTER':
      if (state.titleSearch) {
        const results = data.filter((ft) => ft.position.toLowerCase().includes(state.titleSearch.toLowerCase()))
        return { ...state, filteredResults: results }

      }
      break
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(jobReducer, initialState);
  const [theme, setTheme] = useState('light')
  const userTheme = localStorage.getItem('theme')



  useEffect(() => {
    if (userTheme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')

    } else {
      document.documentElement.classList.remove('dark')

    }
  }, [userTheme, theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, state, dispatch }}>
      <main className="App">
        <ErrorBoundary>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Card />} />
              <Route path="/details" element={<Details />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
