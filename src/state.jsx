import React from 'react'
export default function State() {
    const [myFavouriteThings,setMyFavouriteThings]=React.useState([])

    const allFavouriteThings=["🍕","🍔","🍟","🍿","🥗","🥯","🍗","🧂"]
    const thingsElements=myFavouriteThings.map(thing=> <p key={thing}>{thing}</p>)
    function addFavouriteThings(){
        setMyFavouriteThings(
            prevFavThings=>[
            ...prevFavThings,
            allFavouriteThings[prevFavThings.length]
            ]
        )
    }
    return (
        <main className="main-content">
            <button className="button" onClick={addFavouriteThings}>Add item</button>
            <section aria-live="polite">{thingsElements}</section>
        </main>
    )
}

