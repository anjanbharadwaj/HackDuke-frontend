import React from 'react';
import ReactDOM from 'react-dom';
import CharityRequestCard from './CharityRequestCard';


class RequestPage extends React.Component {

    componentDidMount() {
        
    }

    

    render() {
        return (
            <div class="grid grid-cols-3 gap-8">

                <div class="col-span-2 ...">
                    <p class="font-semibold text-4xl mb-8">My Requests</p>
                    <CharityRequestCard />
                </div>
                <div class="...">5</div>
            </div>

        )
    }
}

export default RequestPage;