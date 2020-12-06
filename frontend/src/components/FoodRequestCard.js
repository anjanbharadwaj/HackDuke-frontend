import {animated, useSpring} from "react-spring";
import React, {useState} from "react";

function FoodRequestCard(props) {

    const [isToggled, setToggle] = useState(false);

    const menuAppear = useSpring({
        transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
        opacity: isToggled ? 1 : 0,
    });

    const icon = () => {
        if (props.fulfilled) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7"/>
                </svg>
            )
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                </svg>
            )
        }
    }

    const RadioContent = () => {
        return (
            <div className="container  mx-auto grid mt-5">
                {/*Cards*/}
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    {/*Card*/}
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div>
                            <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
                                <span className="font-bold">Restaurant</span> donated
                            </p>
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">
                                <span className="text-2xl">100</span> pounds!
                            </p>
                        </div>
                    </div>
                    {/*Card*/}
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div>
                            <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
                                <span className="font-bold">Restaurant</span> donated
                            </p>
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">
                                <span className="text-2xl">100</span> pounds!
                            </p>
                        </div>
                    </div>
                    {/*Card*/}
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div>
                            <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
                                <span className="font-bold">Restaurant</span> donated
                            </p>
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">
                                <span className="text-2xl">100</span> pounds!
                            </p>
                        </div>
                    </div>
                    {/*Card*/}
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div>
                            <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
                                <span className="font-bold">Restaurant</span> donated
                            </p>
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">
                                <span className="text-2xl">100</span> pounds!
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div>
                            <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
                                <span className="font-bold">Restaurant</span> donated
                            </p>
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">
                                <span className="text-2xl">100</span> pounds!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    let quantity = "500 / 500";
    let color = "bg-green-100"
    if (!props.fulfilled) {
        quantity = "0 / 100";
        color = "bg-red-100";
    }

    return (
        [
            <tr onClick={() => {
                if (props.fulfilled) {
                    setToggle(!isToggled);
                }
            }}>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            {icon()}
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-xl font-bold text-gray-900">Food Name</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div className={color + " rounded-full w-2/5 p-2 text-xl text-center"}>
                        {quantity}
                    </div>
                </td>
            </tr>,
            <tr>
                <td colspan="3" style={{backgroundColor: "#F3F6FD"}}>
                    <animated.div style={menuAppear} class="w-full flex flex-col items-center">
                        {isToggled ? <RadioContent/> : null}
                    </animated.div>
                </td>
            </tr>
        ]
    )
}

export default FoodRequestCard;