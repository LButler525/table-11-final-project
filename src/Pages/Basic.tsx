import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


interface BasicProps {
    changePage:(input: string) => void;
}


export function Basic({changePage}:BasicProps) {    
    return(
        <div>
            <h3>Basic Page</h3>
            <Button onClick={() => changePage("Home")}>Home Page</Button>
        </div>
    )
}