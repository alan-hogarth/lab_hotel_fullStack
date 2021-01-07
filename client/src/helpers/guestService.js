const baseUrl = 'http://localhost:3000/api/guests/';

export const getGuestData = ()=>{
    return fetch(baseUrl)
    .then(res => res.json())
};

export const postGuestData = (payload)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())  
};

export const deleteGuestData = (id) => {
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
};

