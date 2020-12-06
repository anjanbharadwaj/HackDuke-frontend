import moment from 'moment';

function PastRequestCard(props) {
    return (
        <div class="flex flex-col w-full bg-white rounded shadow-lg mb-4">
            <div class="flex flex-col w-full md:flex-row">
                <div class="flex w-1/2 flex-row justify-around p-4 font-bold leading-none text-blue-reg uppercase bg-blue-reg rounded md:flex-col md:items-center md:justify-center md:w-1/2">
                    <div class="text-white md:text-lg">{moment(new Date(props.date)).format('M')}</div>
                    <div class="text-white md:text-4xl">{moment(new Date(props.date)).format('D')}</div>
                    <div class="text-white md:text-md">{moment(new Date(props.date)).format('LT')}</div>
                </div>
                <div class="px-6 py-8 font-normal text-gray-800 md:w-3/4">
                <p class="leading-normal">You recieved a</p>
                    <h1 class="text-4xl font-bold leading-none tracking-tight text-gray-800">Donation</h1>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default PastRequestCard;