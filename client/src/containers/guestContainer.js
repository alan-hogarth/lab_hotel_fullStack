import {useState, useEffect} from 'react';
import { getGuestData } from '../helpers/guestService';
import GuestBox from '../components/guestBox';
import GuestList from '../components/guestList';

const GuestContainer = () => {

    const [guestData, setGuestData] = useState([]);

    useEffect(()=>{
        getGuestData()
        .then((allGuests)=>{
            setGuestData(allGuests);
        })
    }, []);

    const addGuest = (guest) => {
        const tempVar = guestData.map(g => g);
        tempVar.push(guest);
        setGuestData(tempVar)
    };

    const deleteGuest = (id) => {
        const tempVar = guestData.map(g => g);
        const indexToDel = tempVar.map(g => g._id).indexOf(id);
        console.log(indexToDel);
        
        tempVar.splice(indexToDel, 1);
        setGuestData(tempVar);
    };

    return (
        <>
            <GuestBox addGuest = {addGuest} />
            <GuestList deleteGuest = {deleteGuest} guests = {guestData}/>
        </>
    )
};

export default GuestContainer;