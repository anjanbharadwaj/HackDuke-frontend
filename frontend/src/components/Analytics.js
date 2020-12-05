import React from 'react';
import ReactDOM from 'react-dom';

class Analytics extends React.Component {

    renderIntroCard() {
        return (
            <div class="bg-blue-light rounded-xl">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-md font-medium tracking-tight text-gray-dim">
                        <span class="block">Welcome back,</span>
                        <span class="text-4xl block text-black font-extrabold">Praneeth Guduguntla</span>
                    </h2>
                    
                </div>
            </div>
        )
    }

    render() {
        return (

            <div class="grid grid-cols-3 gap-8">
                <div class="col-span-1 ...">
                    {this.renderIntroCard()}
                </div>

                <div class="...">

                </div>



            </div>
        )
    }
}

export default Analytics;