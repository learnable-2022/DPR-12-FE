import React from 'react'
import './main.css'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

export default function hospitalhistory() {
  return (
    <div className='hospital-history'>
      <div className='history-container'>
            <div className='h-container'>
                <div className='history'>
                    <h3>Your hospital history</h3>
                </div>
                <div className='visits'>
                    <p className='green'>VISITS</p>
                    <p className='blue'>HOSPITALIZATIONS</p>
                    <p className='red'>PROCEDURES</p>
                    <p className='grey'>NIL</p>
                </div>
                <div className='buttons'>
                    <button>2023</button>
                    <button> <FilterListOutlinedIcon />Filters</button>
                </div> 
            </div>

            <div className='indicators-container'>
                <div className='row-container'>
                    <div className='row1'>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-grey'></div>
                    </div>
                    <div className='row1'>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-grey'></div>
                    </div>
                    <div className='row1'>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-red'></div>
                        <div className='indicator bg-red'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-grey'></div>
                    </div>
                    <div className='row1'>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-red'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-grey'></div>
                    </div>
                    <div className='row1'>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-grey'></div>
                    </div>
                    <div className='row1'>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-red'></div>
                        <div className='indicator bg-blue'></div>
                        <div className='indicator bg-red'></div>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator bg-grey'></div>
                    </div>
                    {/* <div className='row1'>
                        <div className='indicator bg-grey'></div>
                        <div className='indicator'></div>
                        <div className='indicator'></div>
                        <div className='indicator'></div>
                        <div className='indicator'></div>
                        <div className='indicator'></div>
                        <div className='indicator bg-green'></div>
                        <div className='indicator'></div>
                    </div> */}
                    <div className='row1 last-item'>
                        <div className='month'>May</div>
                        <div className='month'>Jun</div>
                        <div className='month'>Jul</div>
                        <div className='month'>Aug</div>
                        <div className='month'>Sep</div>
                        <div className='month'>Oct</div>
                        <div className='month'>Nov</div>
                        <div className='month'>Dec</div>
                    </div>
                </div>
            </div>   
      </div>
            
      
    </div>
  )
}
