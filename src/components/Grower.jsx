import React from 'react'

const Grower = () => {
  return (
    <main>
    <h3>Grower Data</h3>
    <div className='card'>
        <form autoComplete="off">
            <fieldset>
                <label htmlFor="grower_name">Grower</label>
                <input type="text" id="grower_name" autoFocus/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="grower_team">Team</label>
                <input type="text" id="grower_team"/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="grower_city">City</label>
                <input type="text" id="grower_city"/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <button type='submit'>Next</button>
            <div className='option'>Option</div>
        </form>
    </div>
    <p>Don&apos;t have an acount? <span>Sign up!</span></p>
  </main>
  )
}

export default Grower