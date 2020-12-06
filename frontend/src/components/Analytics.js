import React from 'react';
import ReactDOM from 'react-dom';

class Analytics extends React.Component {

    renderIntroCard() {
        return (
            <div class="w-full max-w-3xl">
                <div class="-mx-2 md:flex">
                    <div class="w-full md:w-1/3 px-2">
                        <div class="rounded-lg shadow-sm mb-4">
                            <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                    <h4 class="text-sm uppercase text-gray-500 leading-tight">Users</h4>
                                    <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">3,682</h3>
                                    <p class="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                                </div>
                                <div class="absolute bottom-0 inset-x-0">
                                    <canvas id="chart1" height="70"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-2">
                        <div class="rounded-lg shadow-sm mb-4">
                            <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                    <h4 class="text-sm uppercase text-gray-500 leading-tight">Subscribers</h4>
                                    <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">11,427</h3>
                                    <p class="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                                </div>
                                <div class="absolute bottom-0 inset-x-0">
                                    <canvas id="chart2" height="70"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-2">
                        <div class="rounded-lg shadow-sm mb-4">
                            <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                    <h4 class="text-sm uppercase text-gray-500 leading-tight">Comments</h4>
                                    <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">8,028</h3>
                                    <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                                </div>
                                <div class="absolute bottom-0 inset-x-0">
                                    <canvas id="chart3" height="70"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderTotalDonations() {
        return (
            <div class="bg-white text-black rounded-lg shadow-xl pt-10 pb-12 py-8 px-10 w-full" x-data="{cardOpen:false,cardData:cardData()}" x-init="$watch('cardOpen', value => value?(cardData.countUp($refs.total,0,11602,null,0.8),cardData.sessions.forEach((el,i) => cardData.countUp($refs[`device${i}`],0,cardData.sessions[i].size,null,1.6))):null);setTimeout(()=>{cardOpen=true},100)">
                <div class="flex w-full">
                    <h3 class="text-lg font-semibold leading-tight flex-1">TOTAL DONATIONS</h3>
                    <div class="relative h-5 leading-none">
                        <button class="text-xl text-gray-500 hover:text-gray-300 h-6 focus:outline-none">
                            <i class="mdi" class="'mdi-chevron-'+(cardOpen?'up':'down')"></i>
                        </button>
                    </div>
                </div>
                <div class="relative overflow-hidden transition-all duration-500 " x-ref="card" >
                    <div>
                        <div class="pb-4 lg:pb-6">
                            <h4 class="text-2xl lg:text-3xl text-black font-semibold leading-tight inline-block" x-ref="total">0</h4>
                        </div>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                            </div>
                            <div class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-yellow-200">
                                <div style={{ "width": "10%", "backgroundColor": '#6965DB' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
                                <div style={{ "width": "15%", "backgroundColor": '#648AF2' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                                <div style={{ "width": "25%", "backgroundColor": '#5DB1FD' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                                <div style={{ "width": "25%", "backgroundColor": '#34DEEC' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                                <div style={{ "width": "25%", "backgroundColor": '#6FF9E0' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                            </div>
                        </div>
                        <div class="flex items-stretch mt-8">
                            <div class="w-1/4 inline px-8 border-r mr-4" class="{'border-l border-gray-700':index!==0}">
                                <div class="text-sm mr-10">
                                    <span class="inline-block w-2 h-2 rounded-full mr-1 align-middle" style={{ "backgroundColor": '#6965DB' }} >&nbsp;</span>
                                    <span class="align-middle">Protein</span>
                                </div>
                                <div class="font-medium text-lg text-black">
                                    <span x-ref="`device${index}`">10</span>%
                                </div>
                            </div>
                            <div class="w-1/4 inline px-8 border-r border-gray-700 mr-4" class="{'border-l border-gray-700':index!==0}">
                                <div class="text-sm mr-10 ">
                                    <span class="inline-block w-2 h-2 rounded-full mr-1 align-middle" style={{ "backgroundColor": '#648AF2' }} >&nbsp;</span>
                                    <span class="align-middle">Grain</span>
                                </div>
                                <div class="font-medium text-lg text-black">
                                    <span x-ref="`device${index}`">15</span>%
                                </div>
                            </div>
                            <div class="w-1/4 inline px-8 border-r mr-4" class="{'border-l border-gray-700':index!==0}">
                                <div class="text-sm mr-10">
                                    <span class="inline-block w-2 h-2 rounded-full mr-1 align-middle" style={{ "backgroundColor": '#5DB1FD' }} >&nbsp;</span>
                                    <span class="align-middle">Dairy</span>
                                </div>
                                <div class="font-medium text-lg text-black">
                                    <span x-ref="`device${index}`">25</span>%
                                </div>
                            </div>
                            <div class="w-1/4 inline px-8 border-r mr-4" class="{'border-l border-gray-700':index!==0}">
                                <div class="text-sm mr-10">
                                    <span class="inline-block w-2 h-2 rounded-full mr-1 align-middle" style={{ "backgroundColor": '#34DEEC' }} >&nbsp;</span>
                                    <span class="align-middle">Meat</span>
                                </div>
                                <div class="font-medium text-lg text-black">
                                    <span x-ref="`device${index}`">25</span>%
                                </div>
                            </div>
                            <div class="w-1/4 inline px-8 border-r mr-4" class="{'border-l border-gray-700':index!==0}">
                                <div class="text-sm mr-10">
                                    <span class="inline-block w-2 h-2 rounded-full mr-1 align-middle" style={{ "backgroundColor": '#6FF9E0' }} >&nbsp;</span>
                                    <span class="align-middle">Water</span>
                                </div>
                                <div class="font-medium text-lg text-black">
                                    <span x-ref="`device${index}`">25</span>%
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        )
    }

    renderTopDonors() {
        return (
            <div class="flex flex-col">
                <div class="gap-2  -my-2 sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block w-full mr-auto ml-auto sm:px-6 lg:px-8">
                        <div class=" flex-col overflow-hidden border-b border-gray-50 px-4">
                            <table class="min-w-full">
                                <thead class="bg-gray-10">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 mr-10 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Organization
              </th>
                                        <th scope="col" class="px-6  py-3 text-left float-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Rank
              </th>

                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="">
                                                    <div class="text-sm font-medium text-gray-900">
                                                        Second Harvest
                    </div>
                                                    <div class="text-sm text-gray-500">
                                                        15,000 lbs
                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-8 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900 float-right">#1</div>
                                        </td>


                                    </tr>




                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (

            <div class="grid grid-cols-3 gap-8 h-screen ">
                <div class="... h-5/6">
                    <div class=" mb-4 h-full space-y-6">
                        <div class="rounded-lg bg-blue-reg shadow-lg  md:shadow-xl relative h-1/4 overflow-hidden">
                            <div class="py-10 px-10 mb-8">
                                <p class="text-md  text-white ">Welcome back,</p>
                                <p class="font-bold text-white text-5xl ">Fresh Choice</p>
                            </div>
                        </div>
                        <div class="rounded-lg bg-white shadow-lg  md:shadow-xl relative  h-4/6 overflow-hidden">

                            <div class="mt-8">
                                {this.renderTopDonors()}
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-span-2 ...">
                    <div class="grid grid-cols-3 gap-8 mr-20 ">
                        <div class="col-span-3 ...">
                            {this.renderTotalDonations()}
                        </div>
                        <div class="col-span-3 ...">
                            {this.renderIntroCard()}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Analytics;