import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


interface ReviewProps {
    changePage:(input: string) => void;
}


export function Review({changePage}:ReviewProps) {    
    return(
        <div>
            <h3>Review Page</h3>
            <Button onClick={() => changePage("Basic")}>Basic Page</Button>
        </div>
    )
}