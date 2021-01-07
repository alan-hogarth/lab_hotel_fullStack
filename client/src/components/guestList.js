import Guest from './guest';

const GuestList = ({guests, deleteGuest}) => {

    const guestDetails = guests.map((guest) => {
        return <Guest deleteGuest = {deleteGuest} guest = {guest}/>
    });

    return (
        <>
            {guestDetails}
        </>
    )
};

export default GuestList;