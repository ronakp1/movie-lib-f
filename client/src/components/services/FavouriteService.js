import FavouritesList from "pages/FavouritesList";

const addFavourite = async (favourite) => {
    console.log("hey2", favourite);
    const res = await fetch('/api/favourite/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(favourite)
    })
    const data = await res.json();
    console.log("hey2", data);
    return data;
}

const checkFavourite = async (favourite) => {
    // console.log("hey2", favourite);
    const res = await fetch('/api/favourite/favourited', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(favourite)
    })
    const data = await res.json();
    // console.log("hey2", data);
    return data;
}

const removeFavourite = async (favourite) => {
    console.log("hey2", favourite);
    const res = await fetch('/api/favourite/removeFavourite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(favourite)
    })
    const data = await res.json();
    console.log("hey2", data);
    return data;
}



const getFavourites = async () => {
    const userId = 2;
    const res = await fetch('/api/favourite/getFavourite');
    const data = await res.json();
    console.log("hey2", data);
    return data;
}

export {
    addFavourite, checkFavourite, removeFavourite, getFavourites
}