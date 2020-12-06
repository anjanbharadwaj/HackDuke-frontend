import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {useSpring, animated} from "react-spring";
import FoodRequestCard from "./FoodRequestCard";
import RestaurantFoodRequestCard from './RestaurantFoodRequestCard'
import axios from 'axios'


function RestaurantDonationCard(props) {

    const [cardList, setCardList] = useState([{fulfilled: Math.random() > 0.5}, {fulfilled: Math.random() > 0.5}, {fulfilled: Math.random() > 0.5}, {fulfilled: Math.random() > 0.5}]); // empty defaults

    useEffect(() => {
        let token = localStorage.getItem('token');
        let formData = new FormData();

        axios({
            method: 'get',
            url: "http://localhost:3001/auth/user",
            headers: {'Authorization':
                'Bearer ' + token}
        }).then((result) => {
            axios({
                method: 'get',
                url: "http://localhost:3001/restaurant/donationbatches",
                data: {id: result.data._id},
                headers: {'Authorization':
                    'Bearer ' + token}
            }).then((result) => {
                        console.log("yeet");
                        console.log(result);

                        let resultList = [];

                        let donationBatches = result.data.donationBatches;

                        for (const db of donationBatches) {
                            let givenDonationIds = db.givenDonationIds;

                            for (const gd of givenDonationIds) {
                                console.log("GD")
                                console.log(gd)

                                let name = gd.charityId.name;
                                let date = gd.deliveredDate;
                                let amount = gd.donationAmount;
                                let foodGroup = gd.foodTypeId.group;

                                date = date.slice(0,10);

                                resultList.push({name: name, date: date, amount: amount, foodGroup: foodGroup});
                            }
                        }

                        console.log("resultList")
                        console.log(resultList)
                        // put result into cardList
                        setCardList(resultList);
                    },(err) => {
                        console.log("Did not register 4");
                        console.log(err)
                    }
            )

            },(err) => {
                console.log("Did not register 4");
                console.log(err)
            }
        )

    }, []);

    const renderCharityFoodTable = () => {
        const list = cardList;
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
                                        Date
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Charity
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Food
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-100">
                                {list.map(data => {
                                        console.log(data);
                                        return (<RestaurantFoodRequestCard data={data}/>)
                                    }
                                )}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // {list.map(data => {
    //         console.log(data);
    //         return (<FoodRequestCard data={data}/>)
    //     }
    // )}

    return (

        <div class="bg-white overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
                <p class="mt-1 max-w-2xl text-sm text-gray-500 mb-2">
                    Monday, December 3
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


export default RestaurantDonationCard;
