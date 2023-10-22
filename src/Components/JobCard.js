import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive'



export default function Card() {

    const { state, dispatch } = useContext(ThemeContext);
    const [currentPage, setCurrentPage] = useState(6)
    const userTheme = localStorage.getItem('theme')
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })


    function handleFilter(e) {
        e.preventDefault();
        dispatch({ type: 'SEARCH-FILTER' })
    }

    function handleLoadMore() {
        setCurrentPage(currentPage + 3)
    }

    const jobsToDisplay = state.filteredResults && state.filteredResults.slice(0, currentPage)

    const jobList = jobsToDisplay && jobsToDisplay.map(job => {

        return (
            <section onClick={() => { dispatch({ type: 'ID', payload: job.id }) }} className="mb-14 m-auto block lg:w-[92%] md:w-[92%] w-[87%] h-[230px] rounded-md bg-secondary-white dark:bg-primary-very-dark-blue">
                <Link key={job.id} to="/details">

                    <div style={{ backgroundColor: job.logoBackground }} className="relative bottom-7 left-[32px] w-[50px] h-[50px] flex items-center justify-center rounded-[15px]">
                        <img alt="com-logo" src={job.logo} />
                    </div>
                    <div className="ml-8">
                        <span className="leading-normal font-normal text-sm text-secondary-dark-gray">{job.postedAt}</span>
                        <div className="w-1 h-1 bg-secondary-dark-gray rounded-[3px] inline-block mx-4" />
                        <span className="leading-normal font-normal text-sm text-secondary-dark-gray">{job.contract}</span>

                        <h2 className="leading-normal my-3 font-bold text-base text-primary-very-dark-blue dark:text-secondary-white hover:opacity-40">{job.position}</h2>

                        <span className="leading-normal font-normal text-sm text-secondary-dark-gray">{job.company}</span>
                        <h4 className="text-xs mt-7 text-primary-violet font-bold ">{job.location}</h4>

                    </div>
                </Link>

            </section>
        )
    })

    return (
        <div>
            <MediaQuery maxWidth={699}>
                <form className="flex bg-secondary-white dark:bg-primary-very-dark-blue w-[87%] m-auto rounded-md py-8 px-6 h-20 relative top-[-60px]">
                    <div className=" flex  ">
                        <input onChange={(e) => dispatch({ type: 'TITLE', value: e.target.value })} className="caret-primary-violet focus:outline-none dark:text-secondary-white text-sm placeholder:text-sm font-normal placeholder:text-secondary-gray dark:bg-primary-very-dark-blue" type="text" placeholder="Filter by title..." />
                        <span className="absolute right-4 top-1/4 flex justify-center items-center">
                            <svg onClick={() => dispatch({ type: 'FILTER' })} data-testid="my-svg" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                                    fill={userTheme === 'dark' ? '#FFFFFF' : "#6E8098"} fillRule="nonzero" /></svg>
                            <div className="bg-primary-violet ml-6 flex justify-center items-center rounded-md w-12 h-12">
                                <img onClick={() => dispatch({ type: 'TITLE-FILTER' })} className="" src="assets/desktop/icon-search.svg" alt="Logo" />
                            </div>
                        </span>
                    </div>
                </form>
            </MediaQuery>

            <MediaQuery minWidth={700}>
                <form className="flex justify-center bg-secondary-white dark:bg-primary-very-dark-blue w-[87%] lg:w-[78%] md:w-[88%] m-auto rounded-md px-6 h-20 relative top-[-40px]">
                    <div className="flex w-[40%] lg:w-[40%] py-8">
                        <svg className="w-8" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                                fill="#5964E0" fill-rule="nonzero" /></svg>
                        <input data-testid="title-search" onChange={(e) => dispatch({ type: 'TITLE', value: e.target.value })} className="w-[100%] mx-4 caret-primary-violet pr-4  focus:outline-none dark:text-secondary-white text-sm placeholder:text-sm font-normal placeholder:text-secondary-gray dark:bg-primary-very-dark-blue" type="text" placeholder={isBigScreen ? 'Filter by title, companies, expertise...' : 'Filter by title...'} />
                    </div>

                    <div className="border-x border-x-secondary-dark-gray flex w-[35%] lg:w-[30%]  items-center border-opacity-20">
                        <img className="mx-4" src="assets/desktop/icon-location.svg" alt="filter" />
                        <input onChange={(e) => dispatch({ type: 'SEARCH', value: e.target.value })} className="caret-primary-violet w-[100%] focus:outline-none dark:text-secondary-white text-sm placeholder:text-sm font-normal placeholder:text-secondary-gray dark:bg-primary-very-dark-blue" type="text" placeholder="Filter by location..." />

                    </div>
                    <div className="flex items-center">
                        <label className="group cursor-pointer mx-4">
                            <input onChange={(e) => dispatch({ type: 'FTO', payload: e.target.checked })} id="myCheckbox" className="opacity-0 h-0 w-0 absolute cursor-pointer checked:bg-blue-500" type="checkbox" checked={state.fullTime} />
                            <span className={`checkmark w-6 h-6 relative rounded-[3px] inline-block bg-secondary-dark-gray hover:opacity-[1] ${state.fullTime ? 'opacity-[1]' : 'opacity-10'}`}></span>
                        </label>
                        <h3 className="text-sm font-bold dark:text-secondary-white">{isBigScreen ? 'Full Time Only' : 'Full Time'}</h3>

                        <button onClick={() => {
                            state.titleSearch ? dispatch({ type: 'TITLE-FILTER' }) : dispatch({ type: 'SEARCH-FILTER' })
                        }} className="text-secondary-white text-sm ml-4 font-bold bg-primary-violet lg:w-[122px] md:w-[80px] h-12 rounded-[5px] hover:bg-primary-light-violet" type="button">Search</button>

                    </div>
                </form>

            </MediaQuery>

            <section data-testid="container" className="lg:grid lg:grid-cols-3 lg:mx-[10%] md:grid md:grid-cols-2 lg:mt-[60px] md:mx-[4%] mt-[30px]">

                {jobList}
                {
                    state.filter === true &&
                    <section className="fixed top-0 left-0 h-[100%] w-[100%] z-50 bg-[rgba(0, 0, 0, 0.5] " >

                        <svg fill="#5964E0" onClick={() => dispatch({ type: 'FILTER' })} className="m-auto mt-[60%]" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        <form className="m-auto block w-[87%] h-[217px] rounded-md bg-secondary-white dark:bg-primary-very-dark-blue absolute top-[50%] left-[7%] ">
                            <span className="flex mx-6 py-6">
                                <img className="mr-4" alt="location" src="assets/desktop/icon-location.svg" />
                                <input onChange={(e) => dispatch({ type: 'SEARCH', value: e.target.value })} className="caret-primary-violet dark:text-secondary-white focus:outline-none text-sm placeholder:text-sm font-normal placeholder:text-secondary-gray dark:bg-primary-very-dark-blue" type="text" placeholder="Filter by location..." />
                            </span>
                            <hr className="mb-6 h-px opacity-20 bg-secondary-dark-gray" />
                            <span className="flex mx-6 ">
                                <label className="group cursor-pointer mr-4">
                                    <input onChange={(e) => dispatch({ type: 'FTO', payload: e.target.checked })} id="myCheckbox" className="opacity-0 h-0 w-0 absolute cursor-pointer checked:bg-blue-500" type="checkbox" checked={state.fullTime} />
                                    <span className="checkmark w-6 h-6 relative rounded-[3px] inline-block bg-secondary-light-gray"></span>
                                </label>
                                <h3 className="text-sm font-bold dark:text-secondary-white">Full Time Only</h3>
                            </span>
                            <button onClick={handleFilter} className="text-secondary-white text-sm font-bold bg-primary-violet h-12 mx-6 my-6 w-[87%] rounded-[5px]" type="button">Search</button>
                        </form>
                    </section>

                }
                {jobsToDisplay && jobsToDisplay.length < state.filteredResults.length && (
                    <button onClick={handleLoadMore} className="text-secondary-white text-sm font-bold bg-primary-violet h-12 hover:bg-primary-light-violet my-14 w-[141px] mx-auto lg:mx-[130%] rounded-[5px] block" type="button">Load More</button>
                )}

            </section>
        </div>
    )
}

