import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {
    render() {
        return (

            <div class="flex w-full min-h-screen max-w-xs p-8 ml-10">
                <ul class="flex flex-col">
                    <li class="my-px py-4">
                        <a href="#"
                            class="flex flex-row items-center rounded-full rounded-lg h-16 w-16 text-gray-600 bg-blue-reg">
                            <span class="flex items-center justify-center rounded-full h-16 w-16 text-lg text-white">
                                <svg fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    class="h-8 w-8">
                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                            </span>
                            {/* <span class="ml-3"></span> */}
                        </a>
                    </li>
                    <li class="my-px py-4">
                        <a href="#"
                            class="flex flex-row items-center rounded-full rounded-lg h-16 w-16 text-gray-600 bg-transparent">
                            <span class="flex items-center justify-center rounded-full h-16 w-16 text-lg text-gray-dim">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                            {/* <span class="ml-3"></span> */}
                        </a>
                    </li>
                    <li class="my-px py-4">
                        <a href="#"
                            class="flex flex-row items-center rounded-full rounded-lg h-16 w-16 text-gray-600 bg-transparent">
                            <span class="flex items-center justify-center rounded-full h-16 w-16 text-lg text-gray-dim">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            {/* <span class="ml-3"></span> */}
                        </a>
                    </li>

                </ul>
            </div>
        )

    }
}

export default HomePage;