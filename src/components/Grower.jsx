import React from 'react'
import { useContext, useState } from "react";

import GrowerContext from "../context/GrowerContext";

const Grower = () => {
    const { setStep } = useContext(GrowerContext);
    const [ grower_name, setGrower_name ] = useState("");
    const [ grower_team, setGrower_team ] = useState("");
    const [ grower_city, setGrower_city ] = useState("");

    const [ grower_nameFocused, setGrower_nameFocused] = useState(false);
    const [ grower_teamFocused, setGrower_teamFocused] = useState(false);
    const [ grower_cityFocused, setGrower_cityFocused] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("enviando info al server");
        if (grower_name && grower_team && grower_city) {
            alert(`${grower_name} - ${grower_team} - ${grower_city}`)
        }
    }

  return (
    <main>
    <h3>Grower Data</h3>
    <div className='card'>
        <form onSubmit={handlerSubmit} autoComplete="off">
            <fieldset>
                <label htmlFor="grower_name">Grower</label>
                <input 
                    type="text" 
                    id="grower_name" 
                    autoFocus 
                    required
                    value={grower_name}
                    onChange={(e) => setGrower_name(e.target.value)}
                    onBlur={() => setGrower_nameFocused(true)}
                    data-focused={grower_nameFocused}/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="grower_team">Team</label>
                <input 
                    type="text" 
                    id="grower_team"
                    required
                    value={grower_team}
                    onChange={(e) => setGrower_team(e.target.value)}
                    onBlur={() => setGrower_teamFocused(true)}
                    data-focused={grower_teamFocused}
                    />
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="grower_city">City</label>
                <input 
                    type="text" 
                    id="grower_city"
                    required
                    value={grower_city}
                    onChange={(e) => setGrower_city(e.target.value)}
                    onBlur={() => setGrower_cityFocused(true)}
                    data-focused={grower_cityFocused}/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <div className='button-container'>
                <button type='submit' 
                >Next</button>
            </div>
        </form>
    </div>
  </main>
  )
}

export default Grower;