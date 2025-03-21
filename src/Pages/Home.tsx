import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import logo from './logo.svg';
import logo from '.././logo.svg';
import '../App.css';

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

interface HomeProps {
    changePage:(input: string) => void;
}


export function Home({changePage}:HomeProps) { 
    const [key, setKey] = useState<string>(keyData); //for api key input

    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
      }
    
      //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
      function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
      }

    return(
        <div className="App">
            <h3>Home Page</h3>
            <Button onClick={() => changePage("Basic")}>Basic Page</Button>
            <Button onClick={() => changePage("Detailed")}>Detailed Page</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h3>jaredpeoples</h3>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <br></br>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </Form>
        </div>
    )
}


