import "./App.css";
import { useState, useEffect } from "react";
import fakeFetch from "./utils/fakeFetch";
import Person from "./components/Person";

function App() {
  let [people, setPeople] = useState([]); //array data type
  
  //Part 1 of 2: Create a function
  async function getPeople() {
    const JSON_Response = await fakeFetch(); //don't move to the next line,until this line is fully done running.  Gets Data from a fetch call
    const Javascript_Response = await JSON_Response.json(); //.json converts JSON object to JavaScript
    setPeople(await Javascript_Response); // set the people variable to equal the Javascript_Response
  }

  useEffect(() => {
    // Part 2 of 2: I run that function
    getPeople();
  }, []);

  return <div className="people-div">
    <div className="d-flex flex-wrap" >
    { people.map(person => <Person key={person.id} person={person} />) }
    </div>
    </div>;
}

export default App;
