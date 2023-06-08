import React, {useState} from 'react'
import ani from '../../../images/dr.ani.svg'

export default function AccessTop() {

    const [searchText, setSearchText] = useState("");

    const handleChange=(event) => {
        setSearchText(event.target.value);
    };


  return (
    <div>
        <div className='access-top'>
            <div className='search-side'>
                <input type="text" className="large-inputs" placeholder='Search patient by name...' onChange={handleChange} />
            </div>
            <div className='profile-side'>
                <p>Logged in as: <span>Dr. Jonathan Ani</span></p>
                <img src={ani} alt='' />
            </div>
        </div>
    </div>
  )
}
