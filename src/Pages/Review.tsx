import React from "react";
//import { useState } from "react";
import { Button } from "react-bootstrap";
//import { Form } from "react-bootstrap";


interface ReviewProps {
    changePage:(input: string) => void;
    answers: {
        question1: string[];
        question2: number;
        question3: string[];
        question4: number;
        question5: string;
        question6: string[];
        question7: string;
    };
}


export function Review({changePage, answers,}:ReviewProps) {    
    return(
        <div>
            <h3>Review Page</h3>
            <Button onClick={() => changePage("Basic")}>Basic Page</Button>
        </div>
    )
}