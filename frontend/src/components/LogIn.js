import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
const localServer = "http://localhost:3001/auth/"

class LogIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {signedIn: false, incorrect: false}
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

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
                                <input ref={this.emailRef} onChange={this.handleEmailChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
                            </div>
                        </div>
                        <div class="-mx-3 md:flex text-left">
                            <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                    Password
                            </label>
                                <input ref={this.passwordRef} onChange={this.handlePassChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************" />
                            </div>

                        </div>


                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

                        <button onClick={this.loginAttempt} type="submit" class="inline-flex justify-center w-4/12 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-reg hover:bg-blue-reg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-reg">
                            Log in
                        </button>
                    </div>
                </div>


            </div>


        )
    }


    loginAttempt = (e)  => {
        e.preventDefault();
        console.log("login attempt")
        const email = this.emailRef.current.value;
        const pwd = this.passwordRef.current.value;
        axios.post(localServer +"login", {
            email: email,
            password: pwd
        }).then((result) => {
                if (result.data.message == "success") {
                    console.log("Log in successful! Token: " + result.data.token);
                    localStorage.setItem('token', result.data.token)
                    localStorage.setItem('usertype', result.data.type)
                    this.props.history.push('/home');
                } else {
                    console.log("Did not log in");
                    this.setState({incorrect: true})
                }},(err) => {
                    console.log("Did not log in");
                    this.setState({incorrect: true})
                }
            )
    }





}

export default LogIn;
