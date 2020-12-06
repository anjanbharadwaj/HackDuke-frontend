import { animated, useSpring } from "react-spring";
import React, { useState } from "react";
import axios from 'axios';
const localServer = "http://localhost:3001/"

function RestaurantFoodRequestCard(props) {

    const [isToggled, setToggle] = useState(false);

    const menuAppear = useSpring({
        transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
        opacity: isToggled ? 1 : 0,
    });

    console.log(props.data);

	return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-xl font-bold text-gray-900">{props.data.date}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div className={" rounded-full w-2/5 p-2 text-xl text-center"}>
                    {props.data.name}
                </div>
            </td>
			<td class="px-6 py-4 whitespace-nowrap">
                <div className={" rounded-full w-2/5 p-2 text-xl text-center"}>
                    {props.data.foodGroup}
                </div>
            </td>
			<td class="px-6 py-4 whitespace-nowrap">
                <div className={" rounded-full w-2/5 p-2 text-xl text-center"}>
                    {props.data.amount}
                </div>
            </td>
        </tr>
	)

//     const icon = () => {
//         let totalDonation = 0;
//         props.req.givenDonationIds.forEach(donation => {
//             totalDonation = totalDonation + donation.donationAmount;
//         });
//         if (totalDonation / props.req.amount === 1) {
//             return (
//                 <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg>
//                 </div>
//
//             )
//         } else {
//             return (
//                 <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                 </div>
//             )
//         }
//     }
//
//
//     const getRestaurantById = async (restId) => {
//         let res = await axios.request({
//             method: 'GET',
//             url: `${localServer}auth/restaurant`,
//             params: {
//                 id: restId
//             },
//
//         })
//
//         if (res.data) {
//             console.log(res.data.name)
//             return res.data.name;
//         }
//     }
//
//     const RadioContent = () => {
//         return (
//             <div className="container  mx-auto grid mt-5">
//                 {/*Cards*/}
//                 <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
//                     {/*Card*/}
//
//                     {props.req.givenDonationIds.map(donation => {
//                         console.log(getRestaurantById(donation.restaurantId));
//                         return <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
//                             <div>
//                                 <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
//                                     <span className="font-bold">{"promise issue"}</span> donated
//                             </p>
//                                 <p className="text-md font-semibold text-gray-700 dark:text-gray-200">
//                                     <span className="text-2xl">{donation.donationAmount}</span> lbs
//                             </p>
//                             </div>
//                         </div>
//                     })
//
//                     }
//
//                 </div>
//             </div>
//         );
//     };
//
//     const calculateQuantity = () => {
//         let totalDonation = 0;
//         props.req.givenDonationIds.forEach(donation => {
//             totalDonation = totalDonation + donation.donationAmount;
//         });
//
//         return totalDonation.toString() + "/" + props.req.amount.toString();
//     };
//
//
//     return (
//         [
//             <tr onClick={(e) => {
//                 // if (!props.fulfilled) {
//                 e.preventDefault();
//                 setToggle(!isToggled);
//                 // }
//             }}>
//                 <td class="px-6 py-4 whitespace-nowrap">
//                     <div class="flex items-center">
//                         <div class="flex-shrink-0 h-10 w-10">
//                             {icon()}
//                         </div>
//                     </div>
//                 </td>
//                 <td class="px-6 py-4 whitespace-nowrap">
//                     <div class="text-xl font-bold text-gray-900">{props.group}</div>
//                 </td>
//                 <td class="px-6 py-4 whitespace-nowrap">
//                     <div className={" rounded-full w-2/5 p-2 text-xl text-center"}>
//                         {calculateQuantity()}
//                     </div>
//                 </td>
//             </tr>,
//             <tr>
//                 <td colspan="3" style={{ backgroundColor: "#F3F6FD" }}>
//                     <animated.div style={menuAppear} class="w-full flex flex-col items-center">
//                         {isToggled ? <RadioContent /> : null}
//                     </animated.div>
//                 </td>
//             </tr>
//         ]
//     )
}

export default RestaurantFoodRequestCard;
