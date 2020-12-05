import React from 'react';
import ReactDOM from 'react-dom';

class LogIn extends React.Component {

    state = {
        password: "",
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePassChange = (e) => {
        this.setState({ password: e.target.value })
    }

    componentDidMount() {
        // check if user is already logged in, if so, push to home page
    }
    loginWithEmailPass = () => {
        const { orgName, email, password, lat, long, charity } = this.state;
        console.log(orgName, email, password, lat, long, charity);
        //signUp code
    }

    render() {
        return (

            <div class="flex flex-col">
                <h1 class="font-bold text-4xl mt-40 mb-4" style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }}>Welcome back! Log in.</h1>
                <div class="bg-white shadow-sm rounded-lg mb-4  my-2 w-4/12 flex-center object-center" style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }}>
                    <div class="px-8 pt-6 pb-8 ">

                        <div class="-mx-3 md:flex mb-6 text-left">
                            <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                    Email
                            </label>
                                <input onChange={this.handleEmailChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
                            </div>
                        </div>
                        <div class="-mx-3 md:flex text-left">
                            <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                    Password
                            </label>
                                <input onChange={this.handlePassChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************" />
                            </div>
                        </div>


                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

                        <button onClick={this.signUpWithEmailPass} type="submit" class="inline-flex justify-center w-4/12 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-reg hover:bg-blue-reg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-reg">
                            Log in
                        </button>
                    </div>
                </div>


            </div>


        )
    }
}

export default LogIn;