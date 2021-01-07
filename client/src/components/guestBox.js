import GuestList from "./guestList";
import {useState} from 'react';
import {postGuestData} from '../helpers/guestService';

const GuestBox = ({addGuest}) => {

    const [formData, setFormData] = useState({});

    const onChange = (event) =>{
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        postGuestData(formData)
        .then(()=>{
            addGuest(formData)
        });
    };

    return(
        <form onSubmit={onSubmit} id="guests-form" >
        <h2>Add a Guest</h2>
        <div class="formWrap">
            <label for="name">Name:</label>
            <input onChange={onChange} type="text" id="name"  />
        </div>
        <div class="formWrap">
            <label for="email">Email:</label>
            <input onChange={onChange} type="text" id="email"  />
        </div>
        <div class="formWrap">
            <label for="status">Check In:</label>
            <input onChange={onChange} type="text" id="status" />
        </div>

        <input type="submit" value="Save" id="save"/>
    </form>
    )
};

export default GuestBox;