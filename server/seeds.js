use hotel;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "Chris P. Bacon",
        email: "lovesthebacon@yahoo.com",
        checkedIn: true
    },
    {
        name: "Pat McGroin",
        email: "stay_away@hotmail.com",
        checkedIn: true
    },
    {
        name: "R. Stornaway",
        email: "nailsinbannister@gmail.com",
        checkedIn: true
    }
]);