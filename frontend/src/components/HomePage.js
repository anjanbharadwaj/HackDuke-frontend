import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import CharityRequestCard from './CharityRequestCard';
import RequestPage from './RequestPage';
import Analytics from './Analytics';
import CommunityPage from './CommunityPage';



class HomePage extends React.Component {
    renderPage() {
        const split = window.location.href.split('/')
        const end = split[split.length - 1]
        if (end === "home" || end === "home#") {
            return (
                <RequestPage />
            )
        } else if (end === "analytics" || end === "analytics#") {
            return (
                <Analytics />
            )
        } else if (end === "community" || end === "community#") {
            return <CommunityPage />
        }
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div class="min-h-screen ml-52 pt-20">

                {this.renderPage()}
                    

                </div>

            </div>
        )
    }
}

export default HomePage;