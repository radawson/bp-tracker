import React, { useState, useReducer } from 'react';
import './App.css';

const today = new Date();

const formReducer = (state, event) => {
  if (event.reset) {

    return {
      systolic: 0,
      diastolic: 0,
      heartrate: 0,
      notes: '',
      date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
    time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  });
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return (
    <div className="App">
      <h1>Blood Pressure entry</h1>
      {submitting &&
        <div>
          You are submitting the following: <br />
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>Systolic:</p>
            <input type="number" name="systolic" onChange={handleChange} value={formData.systolic || ''} step="1" />
          </label>
          <label>
            <p>Diastolic:</p>
            <input type="number" name="diastolic" onChange={handleChange} value={formData.diastolic || ''} step="1" />
          </label>
          <label>
            <p>Heart Rate:</p>
            <input type="number" name="heartrate" onChange={handleChange} value={formData.heartrate || ''} step="1" />
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Notes:</p>
            <textarea name="notes" onChange={handleChange} value={formData.notes || ''} />
          </label>
          <label>
            <p>Date</p>
            <input type="date" name="date" onChange={handleChange} value={formData.date} />
          </label>
          <label>
            <p>Time</p>
            <input type="time" name="time" onChange={handleChange} value={formData.time} />
          </label>
        </fieldset>
        <input type="submit" value="Submit" disabled={submitting} />
      </form>
    </div>
  );
}

export default App;
