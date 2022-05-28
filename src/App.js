import './App.css';
import { useState } from 'react';
import WeightInput from './WeightInput.js';
import WeightTrackerList from './WeightTrackerList.js';
import moment from 'moment';

import { collection, getDocs } from 'firebase/firestore/lite';
import {db} from './firebase.js';


function App() {

  const [weight, setWeight] = useState(0);
  const [trackerList, setTracker] = useState([]);
  console.log(trackerList[trackerList.length - 1])

  const handleChange = (event) => {
      event.preventDefault();
      setWeight(event.target.value)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if(weight !== 0) {
        setTracker([...trackerList, {weight: weight, date: moment().format('MM/DD/YYYY')}])
        setWeight(0)
      }
      
      
  }

  return (
    <div className="App">
      <h1>Weight Tracker</h1>
      <br />
      <WeightInput weight={weight} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <br />
      <WeightTrackerList trackerList={trackerList}/>
    </div>
  );
}

export default App;
