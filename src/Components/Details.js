import React, { useContext } from "react";
import { ThemeContext } from "../App";
import data from "../data.json"
import MediaQuery from "react-responsive";



export default function Details() {
    const { state } = useContext(ThemeContext);

    const details = data.find(info => info.id === state.id)



    return (
        <div>
            <MediaQuery maxWidth={699}>
                <section className="relative top-[-50px] m-auto  w-[87%] h-[207px] rounded-md py-1 bg-secondary-white dark:bg-primary-very-dark-blue">
                    <div style={{ backgroundColor: details && details.logoBackground }} className="absolute top-[-25px] left-[43.5%] mx-auto w-[50px] h-[50px] flex items-center justify-center rounded-[15px]">
                        <img alt="com-logo" src={details && details.logo} />
                    </div>
                    <div className="text-center mt-9">
                        <h2 className="leading-normal my-3 font-bold text-base text-primary-very-dark-blue dark:text-secondary-white">{details && details.company}</h2>

                        <span className="leading-normal font-normal text-sm text-secondary-dark-gray">{details && details.company.toLowerCase() + '.com'}</span>
                        <button onClick={() => { window.location.href = `${details && details.website}` }} className="text-primary-violet text-sm font-bold bg-primary-light-violet bg-opacity-10 h-12 mx-auto my-6 w-[147px] block  rounded-[5px]" type="button">Company Site</button>

                    </div>
                </section>
            </MediaQuery>


            <MediaQuery minWidth={700}>
                <section className="relative top-[-40px] m-auto flex justify-between items-center lg:w-[730px] md:w-[689px] h-[140px] rounded-md  bg-secondary-white dark:bg-primary-very-dark-blue ">
                    <div className="inline-flex items-center">
                        <div style={{ backgroundColor: details && details.logoBackground }} className=" rounded-bl-md w-[140px] h-[140px] flex items-center justify-center">
                            <img className="w-[70px]" alt="com-logo" src={details && details.logo} />
                        </div>

                        <div className="mx-10">
                            <h2 className="leading-normal my-3 font-bold text-base text-primary-very-dark-blue dark:text-secondary-white">{details && details.company}</h2>

                            <span className="leading-normal font-normal text-sm text-secondary-dark-gray">{details && details.company.toLowerCase() + '.com'}</span>

                        </div>
                    </div>
                    <button onClick={() => { window.location.href = `${details && details.website}` }} className="text-primary-violet text-sm font-bold bg-primary-light-violet hover:bg-primary-light-violet bg-opacity-10 h-12 mx-6 my-6 w-[147px] block  rounded-[5px]" type="button">Company Site</button>

                </section>

            </MediaQuery>

            <section className="m-auto pb-10 w-[87%] lg:w-[730px] md:w-[689px] rounded-md  bg-secondary-white dark:bg-primary-very-dark-blue">
                <div className="md:flex md:justify-between">
                    <div className="ml-8 pt-10">
                        <span className="leading-normal font-normal text-sm text-secondary-dark-gray">{details && details.postedAt}</span>
                        <div className="w-1 h-1 bg-secondary-dark-gray rounded-[3px] inline-block mx-4" />
                        <span className="leading-normal font-normal text-sm text-secondary-dark-gray">{details && details.contract}</span>

                        <h2 className="leading-normal font-bold text-base text-primary-very-dark-blue dark:text-secondary-white">{details && details.position}</h2>
                        <h4 className="text-xs text-primary-violet font-bold ">{details && details.location}</h4>

                    </div>
                    <button onClick={() => { window.location.href = `${details && details.apply}` }} className="text-secondary-white text-sm font-bold bg-primary-violet hover:bg-primary-light-violet h-12 mx-6 mt-[54px] mb-8 w-[87%] md:w-[141px] rounded-[5px]" type="button">Apply Now</button>
                </div>
                <article className="mx-8 mb-10 text-secondary-dark-gray">
                    {details && details.description}
                </article>
                <h2 className="mx-8 leading-normal font-bold text-base text-primary-very-dark-blue dark:text-secondary-white mb-7 ">Requirements</h2>
                <article className="mx-8 text-secondary-dark-gray">
                    {details.requirements && details.requirements.content}
                    <ul className="mx-4 mb-10 list-disc marker:text-primary-violet">

                        {details.requirements.items && details.requirements.items.map((item, index) =>

                            <li key={index} className="my-2 pl-6">
                                {item}
                            </li>

                        )}
                    </ul>

                </article>
                <h2 className="mx-8 leading-normal font-bold text-base text-primary-very-dark-blue dark:text-secondary-white mb-7 ">What You Will Do</h2>
                <article className="mx-8 text-secondary-dark-gray">
                    {details.role.content}
                    <ol className=" mt-8 mb-10">
                        {details.role.items && details.role.items.map((item, index) =>
                            <li key={index} className="my-2 flex">
                                <p className="text-primary-violet mr-7">{index + 1}</p>
                                <p>{item}</p>
                            </li>
                        )}
                    </ol>

                </article>

            </section>
            <MediaQuery maxWidth={699}>
                <footer className="bg-secondary-white dark:bg-primary-very-dark-blue mt-16">
                    <button onClick={() => { window.location.href = `${details && details.apply}` }} className="text-secondary-white text-sm font-bold bg-primary-violet h-12 m-6  w-[87%] rounded-[5px]" type="button">Apply Now</button>

                </footer>
            </MediaQuery>
            <MediaQuery minWidth={700}>
                <footer className="bg-secondary-white dark:bg-primary-very-dark-blue h-24 mt-16">
                    <div className="flex md:justify-around lg:justify-evenly items-center ">
                        <div>
                            <p className="leading-normal font-bold text-base text-primary-very-dark-blue dark:text-secondary-white">{details.position}</p>
                            <span className="leading-normal font-normal text-sm text-secondary-dark-gray">Devjobs Inc.</span>
                        </div>
                        <button onClick={() => { window.location.href = `${details && details.apply}` }} className="text-secondary-white text-sm font-bold bg-primary-violet hover:bg-primary-light-violet h-12 my-6 w-[141px] rounded-[5px]" type="button">Apply Now</button>
                    </div>
                </footer>
            </MediaQuery>
        </div>
    )
}