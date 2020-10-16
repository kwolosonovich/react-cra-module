import React from "react";

const choice = (items) => {
    let numOfItems = items.length;
    let randomIndex = Math.floor(Math.random() * numOfItems);

    return (
        items[randomIndex]
    )
}

const remove = (items, item) => {

    let matchRemoved; 

    for (let i=0; i<items.length; i++) {
        if (items[i] === item) {
            matchRemoved = items.splice(1, i)            
        }
    }

    return matchRemoved;
}

export {choice, remove}