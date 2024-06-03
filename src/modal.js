import React, {useState} from "react";


export default function modal({open, children, onClose}) {
    if (!open) return null

    return ( 
        <div>
            <button onClick={onClose}> X </button>
            {children}
        </div>
    )


}