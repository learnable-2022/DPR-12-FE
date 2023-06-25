import React, {useState} from 'react'
import ani from '../../../images/dr.ani.svg'

export default function AccessTop({docDetails}) {

    const [searchText, setSearchText] = useState("");

    const handleChange=(event) => {
        setSearchText(event.target.value);
    };


  return (
    <div className='acccesss'>
        <div className='access-topp'>
            <h4>Patients</h4>
            <div className='search-side'>
                <input type="text" placeholder='Search patient by name...' onChange={handleChange} />
            </div>
            <div className='profile-side'>
                <p>Logged in as: <span>Dr. {docDetails.data.firstName} {docDetails.data.lastName}</span></p>
                <img src={ani} alt='' />
            </div>
        </div>
    </div>
  )
}
