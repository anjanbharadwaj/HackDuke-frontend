import { useEffect, useState } from "react";
import PastRequestCard from "./PastRequestCard";
import axios from 'axios';
const localServer = "http://localhost:3001/"


function PastRequests(props) {

    const [requests, setRequests] = useState(false);


    useEffect(async () => {
        if (!requests && props.id) {
            let res = await axios.request({
                method: 'GET',
                url: `${localServer}charity/requests`,
                params: {
                    id: props.id
                },

            })
            console.log(res)

            if (res.data) {
                setRequests(res.data.requests);
            }
        }

    });

    console.log(requests);

    if (!requests) {
        return <div></div>
    }

    return (

        requests.map(request => {
            console.log(request);
            return <PastRequestCard date={request.createdDate} />
        })

    )
}

export default PastRequests;