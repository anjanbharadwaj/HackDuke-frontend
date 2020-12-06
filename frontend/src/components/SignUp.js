import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
const localServer = "http://localhost:3001/"

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            registered: false,
            incorrect: false,
            charity: false,
            restaurant: false
        }
        this.nameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.emailRef = React.createRef();
        this.charityRef = React.createRef();
        this.restaurantRef = React.createRef();
        // this.locationRef = Re
    }
    
    // orgName: "",
    // email: "",
    // password: "",
    // lat: null,
    // long: null,
    // charity: false,

    handleNameChange = (e) => {
        this.setState({ orgName: e.target.value })
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePassChange = (e) => {
        this.setState({ password: e.target.value })
    }

    handleCharityButton = (e) => {
        console.log(this.state.charity)
        if (!this.state.charity && this.state.restaurant) {
            this.setState({charity: e.target.checked, restaurant: false })
        } else {
            this.setState({ charity: e.target.checked }) 
        }   
    }
    handleRestaurantButton = (e) => {
        if (this.state.charity && !this.state.restaurant) {
            this.setState({charity: false, restaurant: e.target.checked })
        } else{
            this.setState({ restaurant: e.target.checked })
        }
    }
    handleFile = (e) => {
        console.log(e.target.files)
        this.setState({file: e.target.files[0]});
    }

    componentDidMount() {
        if ("geolocation" in navigator) {
            console.log("Available");

        } else {
            console.log("Not Available");
        }
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords: { latitude, longitude } } = position;
            this.setState({
                lat: latitude,
                long: longitude
            });
            console.log(position)
        });
    }

    signUpWithEmailPass = () => {
        const { orgName, email, password, lat, long, charity } = this.state;
        console.log(orgName, email, password, lat, long, charity);
        //signUp code
    }

    render() {
        let incorrectText = <p></p>
        if (this.state.incorrect){
            incorrectText = <p class="text-center text-red-400 text-s pb-4">This username is taken. Please try again!</p>
        } else if (this.state.needFile) {
            incorrectText = <p class="text-center text-red-400 text-s pb-4">Please upload your inventory file!</p>
        } else if (this.state.needLocation) {
            incorrectText = <p class="text-center text-red-400 text-s pb-4">Please allow location access!</p>
        }
        return (

            <div class="flex flex-col">
                <h1 class="font-bold text-4xl mt-20 mb-4" style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }}>Create an Account.</h1>
                <div class="bg-white shadow-sm rounded-lg mb-4  my-2 w-6/12 flex-center object-center" style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }}>
                    <div class="px-8 pt-6 pb-8 ">
                    {incorrectText}
                        <div class="-mx-3 md:flex mb-6 text-left ">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Organization Name
                            </label>
                                <input ref={this.nameRef} onChange={this.handleNameChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
                                <p class="text-red text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    Email
                            </label>
                                <input ref={this.emailRef} onChange={this.handleEmailChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div class="-mx-3 md:flex mb-6 text-left">
                            <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                    Password
                            </label>
                                <input ref={this.passwordRef} onChange={this.handlePassChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************" />
                                <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                            </div>
                        </div>
                        <div class="-mx-3 md:flex mb-6 text-left">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                    Location
                                    </label>
                                <button type="submit" onClick={this.getLocation} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-reg hover:bg-blue-reg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-reg">
                                    Share my location
                            </button>
                            </div>
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                    Organization Type
                                    </label>
                                <div class="flex items-center">
                                    <input checked={this.state.charity} ref={this.charityRef} onChange={this.handleCharityButton} id="charityButton" name="push_notifications" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    <label for="charityButton" class="ml-3 block text-sm font-medium text-gray-700">
                                        Food Bank
                                    </label>
                                    <input checked={this.state.restaurant} ref={this.restaurantRef} onChange={this.handleRestaurantButton} id="restaurantButton" name="push_notifications" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 ml-5 text-indigo-600 border-gray-300 rounded" />
                                    <label for="restaurantButton" class="ml-3 block text-sm font-medium text-gray-700">
                                        Restaurant
                                    </label>
                                </div>
                            </div>



                        </div>
                       { this.state.charity ? <div>
                            <label class="mt-6 text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                Upload your dream inventory
                                    </label>
                            <p class="text-left text-red text-xs italic">Please share how a fully stocked inventory would look like at your organization. We will use this information to optimize the donations your recieve.</p>
                            <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" onChange={this.handleFile}name="file-upload" type="file" class="sr-only" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-gray-500">
                                        CSV up to 10MB
                                    </p>
                                </div>
                            </div> 
                       </div> 
                     
                    : <div></div> }
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

                        <button onClick={this.registerAttempt} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-reg hover:bg-blue-reg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-reg">
                            Create Account
                        </button>
                    </div>
                </div>


            </div>


        )
    }

    switch = (e) => {
        e.preventDefault();
        console.log('switch')
        this.props.history.push('/login');
    }


    // name: req.body.name,
    // email: req.body.email,
    // password: hashedPassword,
    // locationAddress: req.body.locationAddress,
    // latitude: req.body.latitude,
    // longitude: req.body.longitude,
    // dreamInventory: ObjectId(req.body.dreamInventory),
    // charityRequestIds: req.body.charityRequestIds
    registerAttempt = (e)  => {
        this.setState({needFile: false})
        this.setState({needLocation: false})
        this.setState({incorrect: false})

        e.preventDefault();
        console.log("register attempt")
        const name = this.nameRef.current.value;
        const pwd = this.passwordRef.current.value;
        const charityOrRestaurant = this.charityRef.current.value;
        const email = this.emailRef.current.value;
        const latitude = this.state.lat
        const longitude = this.state.long
        const file = this.state.file
        console.log(latitude, longitude)
        console.log(this.state.charity)
        if (latitude == null || longitude == null) {
            console.log("Did not register 1");
            this.setState({needLocation: true})
            return
        }
        let usertype = "restaurant";
        if (this.state.charity) {
            usertype = "charity"
            if (file == null) {
                console.log("Did not register 2");
                this.setState({needFile: true})
                return
            }
        }
        let formData = new FormData();
        formData.append('inventory', file);

        if (usertype=="charity") {
            formData.append('name', name);
            formData.append('password', pwd);
            formData.append('email', email);
            formData.append('latitude', latitude);
            formData.append('longitude', longitude);
            
            axios({
                method: 'post',
                url: localServer + "auth/register?usertype=" + usertype,
                data: formData,
            }).then((result) => {
                    if (result.data.message == "success") {
                        console.log("Registered!");
                        this.switch(e)
                    } else {
                        console.log("Did not register 3");
                        this.setState({incorrect: true})
                         // switch page to proper url
                    }},(err) => {
                        console.log("Did not register 4");
                        this.setState({incorrect: true})
                        console.log(err)
                    }
                )
        } else {
            console.log("restaurant auth begins")
            axios.post(localServer + "auth/register?usertype=" + usertype, {
                name: name,
                password: pwd,
                email: email,
                latitude: latitude,
                longitude: longitude
            }).then((result) => {
                    if (result.data.message == "success") {
                        console.log("Registered!");
                        this.switch(e)
                    } else {
                        console.log("Did not register");
                        this.setState({incorrect: true})
                         // switch page to proper url
                    }},(err) => {
                        console.log("Did not register");
                        this.setState({incorrect: true})
                        console.log(err)
                    }
                )
        }

        
    }
}

export default SignUp;