import axios from 'axios'

import React from 'react';
import ReactDOM from 'react-dom';
import CharityRequestCard from './CharityRequestCard';
import "./restaurant.css"
import { confirmAlert } from 'react-confirm-alert'; // Import

import 'react-confirm-alert/src/react-confirm-alert.css';
class RestaurantDonationModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {file: null};
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        this.splitsRef = React.createRef();
        this.perform = this.perform.bind(this);

    }

    perform() {
        let token = localStorage.getItem('token')
        axios({
            method: 'post',
            url: "http://localhost:3001/restaurant/approved",
            headers: {'Authorization':
            'Bearer ' + token},
            data: this.state.obj
        }).then((result) => {
            this.setState({confirm: false})

        });
    }
    decrement(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
          'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        if (value > 1){
            value--;
        }
        target.value = value;
    }

      increment(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
          'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        value++;
        target.value = value;
      }
     componentDidMount() {

    }

    handleFile = (e) => {
        console.log(e.target.files)
        this.setState({file: e.target.files[0]});
    }

    handleUpload() {
        const file = this.state.file
        console.log(file);

        let formData = new FormData();
        formData.append('inventory', file);

        let token = localStorage.getItem('token');
        const splits = this.splitsRef.current.value;
        console.log(splits)
        formData.append('splits', parseInt(splits))
        // get the charity id

        // let userFormData = new FormData();
        // userFormData.append('user', {"id": localStorage.getItem('token')});

        // axios({
        //     method: 'get',
        //     url: "http://localhost:3001/auth/user",
        //     headers: {'Authorization':
        //         'Bearer ' + token}
        // }).then((result) => {
        //     console.log("hereeee");
        //     console.log(result.data);
        //     formData.append('charity', result.data);
        //     },(err) => {
        //         console.log("Did not register 4");
        //         console.log(err)
        //     }
        // )


        axios({
            method: 'post',
            url: "http://localhost:3001/restaurant/donate",
            data: formData,
            headers: {'Authorization':
                'Bearer ' + token}
        }).then((result) => {
                //worked
                let val = result.data

                console.log(result.data)

                // axios({
                //     method: 'post',
                //     url: extraurl,
                //     body: val
                // }).then((result) => {
                //         //worked
                //         let valSuccess = result.data
                //         console.log("WOOT")
                //         console.log(valSuccess)
                // }
                //     ).catch(function (error) {
                //         console.log(JSON.stringify(error))
                //       });
// axios.post(localServer +"login", {
//             email: email,
//             password: pwd
//         })
                axios({
                    method: 'post',
                    url: "URL_REMOVED",
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        mode: 'no-cors',
                      },
                    data: val
                }).then((result) => {
                        //worked
                        let valSuccess = result.data
                        console.log("WOOT")
                        console.log(valSuccess)
                        // Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>

                        // let total = 0
                        let output = []
                        let tag = <ul class="list-disc"></ul>
                        // console.log(arr[j].amount_donated)
                        let arr = valSuccess.out
                        for (let j = 0; j < arr.length; j++) {
                            console.log(arr[j].amount_donated)
                            let mystr =  arr[j].amount_donated + " " + arr[j].food_type + "(s)"
                            output.push(mystr)
                        }
                        let fi = <ul class="list-disc">
                            {output.map((o) => (
                            <li key={o}>{o}</li>
                        ))}
                        </ul>

                        this.setState({confirm: true, obj: valSuccess, tag: fi})


            //             confirmAlert({
            //                 customUI: ({ onClose }) => {
            //                   return (
            //                     <div >
            //                                                           <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
            //                             You will be donating:
            // </h3>
            //                                   {tag}
            //                       <p>You want to delete this file?</p>
            //                       <button onClick={onClose}>No</button>
            //                       <button
            //                         onClick={() => {
            //                           this.handleClickDelete();
            //                           onClose();
            //                         }}
            //                       >
            //                         Yes, Delete it!
            //                       </button>
            //                     </div>
            //                   );
            //                 }
            //               });
                        // confirmAlert({
                        //     title: 'Confirm donation',
                        //     message: 'You will be making a total of ',
                        //     buttons: [
                        //       {
                        //         label: 'Yes',
                        //         onClick: () => alert('Click Yes')
                        //       },
                        //       {
                        //         label: 'No',
                        //         onClick: () => alert('Click No')
                        //       }
                        //     ]
                        //   });

                }
                    ).catch(function (error) {
                        console.log(JSON.stringify(error))
                      });
        }
            ).catch(function (error) {
                console.log(JSON.stringify(error))
              });

        // let [file, setFile] = useState(null);
        //
        // const handleFile = (e) => {
        //     setFile(e.target.files[0]);
        // }
        //
        // const handleUpload = (e) => {
        //     e.preventDefault();
        //     console.log(file);
        //
        //     let formData = new FormData();
        //
        //     formData.append('inventory', file);
        //     formData.append('name', "Rohan");
        //
        //     axios({
        //         url:'http://localhost:3001/parse/',
        //         method: "POST",
        //         data: formData
        //     }).then((res) => {
        //
        //     });
        // }
        //
        //
        // return (
        //     <div className="App">
        //         <h1>
        //             FORM TEST
        //         </h1>
        //         <form>
        //             <div>
        //                 <label>Select File</label>
        //                 <input type="file" name="file" onChange={(e) => handleFile(e)}/>
        //             </div>
        //             <button onClick={(e) => handleUpload(e)}>
        //                 Upload
        //             </button>
        //         </form>
        //     </div>
        // );

    }



    render() {
        if (this.state.confirm) {
            return (
                <div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              You are donating:
            </h3>
            <div class="mt-2">
                {this.state.tag}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" onClick={() => this.perform()} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
          Confirm
        </button>
        <button type="button" onClick={() => this.setState({confirm: false})} class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>) } else {
        return (
            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div class="fixed inset-0 transition-opacity " onClick={() => this.props.toggleReqModal()} aria-hidden="true">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span class="hidden sm:inline-block  sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div class="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">

                                <div class="mt-3 text-center sm:mt-0 ml-6 mr-6 sm:text-left">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        Make a donation.
            </h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500 ">
                                            Upload a CSV file containing your organization's current inventory list. We will then generate a donation and match you with recipients!
              </p>
                                        <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" class="sr-only" onChange={(e) => this.handleFile(e)}/>
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs text-gray-500">
                                                    CSV up to 10MB
                                    </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="custom-number-input h-10 w-32">
  <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold"># of trips you are willing to make
  </label>
  <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button data-action="decrement" onClick={(e) => this.decrement(e)} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input  ref={this.splitsRef} type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="1"></input>
  <button data-action="increment"onClick={(e) => this.increment(e)} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span class="m-auto text-2xl font-thin">+</span>
  </button>
</div>
</div>


                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse flex-center">
                            <button onClick={() => this.handleUpload()} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-reg text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Optimize My Donation!
        </button>
                            <button onClick={() => this.props.toggleReqModal()} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Cancel
        </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    }
}

export default RestaurantDonationModal;
