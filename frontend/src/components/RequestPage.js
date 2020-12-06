import React,  {useState} from 'react';
import ReactDOM from 'react-dom';
import CharityRequestCard from './CharityRequestCard';
import CharityRequestModal from './CharityRequestModal';
import {useSpring, animated} from "react-spring";
import PastRequests from "./PastRequests";

function RequestPage(props) {

    const [reqModal, setReqModal] = useState(false);


    return (
        <div class="grid grid-cols-3 gap-8">
            <div class="col-span-2">
                <div class="grid grid-cols-3 gap-8">
                    <div class="col-span-2">
                        <p class="font-semibold text-4xl mb-8">My Requests</p>
                    </div>
                    <div class="col-span-1 ...">
                        <button onClick={() => setReqModal(!reqModal)} type="submit"
                                class="float-right inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-reg hover:bg-blue-reg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-reg">
                            Create Request
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <CharityRequestCard/>
                {reqModal ? <CharityRequestModal toggleReqModal={() => setReqModal(!reqModal)}/> : <div></div>}
            </div>
            <div class="col-span-1 h-full mr-5">
                <PastRequests/>
            </div>
        </div>

    )
}

export default RequestPage;