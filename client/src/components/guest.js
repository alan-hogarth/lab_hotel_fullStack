import { useState } from "react";
import {deleteGuestData} from "../helpers/guestService";

const Guest = ({guest, deleteGuest}) => {

    console.log(guest);
    const handleDelete = () => {
        deleteGuestData(guest._id).then(() => {
            deleteGuest(guest._id)
        });
    };

    return(
        <>
            <h3> {guest.name} </h3>
            <h5> {guest.email} </h5>
            <h3> {guest.status} </h3>
            <button onClick = {handleDelete}>🔪</button>
        </>
    )
};

export default Guest; 