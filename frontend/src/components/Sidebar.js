import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';


class Sidebar extends React.Component {


    active = "flex flex-row items-center rounded-full rounded-lg h-16 w-16 text-gray-600 bg-blue-reg shadow-2xl";
    notActive = "flex flex-row items-center rounded-full rounded-lg h-16 w-16 text-gray-600 bg-transparent hover:bg-gray-200 motion-safe:hover:scale-110";

    activeText = "flex items-center justify-center rounded-full h-16 w-16 text-lg text-white";
    notActiveText = "flex items-center justify-center rounded-full h-16 w-16 text-lg text-gray-dim";

    state = {
        colors: [this.active, this.notActive, this.notActive],
        textColors: [this.activeText, this.notActiveText, this.notActiveText]
    }

    onButtonClick = (end) => {
        if (end === "home") {
            this.setState({colors: [this.active, this.notActive, this.notActive]});
            this.setState({textColors: [this.activeText, this.notActiveText, this.notActiveText]});
        } else if (end === "community") {
            this.setState({colors: [this.notActive, this.active, this.notActive]});
            this.setState({textColors: [this.notActiveText, this.activeText, this.notActiveText]});
        } else if (end === "analytics") {
            this.setState({colors: [this.notActive, this.notActive, this.active]});
            this.setState({textColors: [this.notActiveText, this.notActiveText, this.activeText]});
        } else if (end === "signout") {
            localStorage.removeItem('token')
            localStorage.removeItem('usertype')
            this.props.history.push('/login');
            return;
        }
        this.props.history.push(end);
    }

    componentDidMount() {

    }

    render() {

        return (

            <div class="fixed z-10 flex min-h-screen w-16  ml-20 pt-20">
                <ul class="flex flex-col">
                    <li class="my-px py-4">
                        <a href="#"
                           class={this.state.colors[0]}
                           onClick={() => this.onButtonClick("home")}
                        >
                            <span class={this.state.textColors[0]}>
                                <svg fill="none"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     stroke-width="2"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor"
                                     class="h-8 w-8">
                                    <path
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                            </span>
                            {/* <span class="ml-3"></span> */}
                        </a>
                    </li>
                    <li class="my-px py-4">
                        <a href="#"
                           onClick={() => this.onButtonClick("community")}
                           class={this.state.colors[1]}>
                            <span class={this.state.textColors[1]}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </span>
                            {/* <span class="ml-3"></span> */}
                        </a>
                    </li>
                    <li class="my-px py-4">
                        <a href="#"
                           onClick={() => this.onButtonClick("analytics")}
                           class={this.state.colors[2]}>
                            <span class={this.state.textColors[2]}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </span>
                            {/* <span class="ml-3"></span> */}
                        </a>
                    </li>
                    <li class="my-px py-4">
                        <a href="#"
                           onClick={() => this.onButtonClick("signout")}
                           class={this.state.colors[2]}>
                            <span class={this.state.textColors[2]}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                         d="M10 9.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7zm6-3c-1.787 0-3.46.474-4.911 1.295l.228.2 1.396 1.221c1.004-.456 2.114-.716 3.287-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.283-.26-3.288-.715l-1.396 1.221-.228.2c1.452.82 3.125 1.294 4.912 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/>
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
export default withRouter(Sidebar);

