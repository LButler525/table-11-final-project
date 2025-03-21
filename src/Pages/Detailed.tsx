import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


interface DetailedProps {
    changePage:(input: string) => void;
}


export function Detailed({changePage}:DetailedProps) {    
    return(
        <div>
            <h3>Detailed Page</h3>
            <Button onClick={() => changePage("Home")}>Home Page</Button>
            <Button onClick={() => changePage("Basic")}>Basic Page</Button>
            
        </div>
    )
}