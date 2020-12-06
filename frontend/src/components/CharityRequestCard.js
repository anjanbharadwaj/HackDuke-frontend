import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from "react-spring";
import FoodRequestCard from "./FoodRequestCard";
import moment from 'moment';


function CharityRequestCard(props) {
    // const { createdDate, donationRequestIds } = props.latestReq;
    console.log(props.latestReq);


    const renderCharityFoodTable = () => {
        const list = [{}, {}, {}, {}];

        return (

            <div class="flex flex-col">
                <div class="-my-2 min-w-full sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class=" overflow-hidden ">
                            <table class="min-w-full">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                    </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Item Name
                                    </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Quantity
                                    </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-100">
                                    {props.latestReq ? Object.keys(props.latestReq).map(group => {
                                        
                                        
                                        console.log(props.latestReq.group);
                                        return (<FoodRequestCard req={props.latestReq[group]} group={group} />)
                                    }
                                    ) : <div></div>}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div class="bg-white overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
                <p class="mt-1 max-w-2xl text-sm text-gray-500 mb-2">
                    {/* {createdDate ? moment(new Date(createdDate)).format('LL') : ''} */}
                </p>
                <h3 class="text-3xl leading-6 font-semibold text-gray-900 mb-4">
                    Pending
                </h3>


            </div>
            <div class="">
                {renderCharityFoodTable()}
            </div>
        </div>
    )
}


export default CharityRequestCard;