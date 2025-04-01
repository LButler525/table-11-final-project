import React from "react";
//import { useState } from "react";
import { Button } from "react-bootstrap";
//import { Form } from "react-bootstrap";


interface AnswersProps {
    changePage:(input: string) => void;
}


export function Answers({changePage}:AnswersProps) {    
    return(
        <div>
            <h3>Answers Page</h3>
            <Button onClick={() => changePage("Home")}>Home Page</Button>
            <Button onClick={() => changePage("Basic")}>Basic Page</Button>
            <Button onClick={() => changePage("Detailed")}>Detailed Page</Button>
        </div>
    )
}