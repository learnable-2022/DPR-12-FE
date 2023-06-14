import './Record.css';
import Diagnosis from './components/Diagnosis';
import Medications from './components/Medications';
import Lab from './components/Lab';
import image from './components/images/Icon3.png';
import image1 from './components/images/Icon1.png';
import image2 from './components/images/Icon4.png';





export default function App() {
  return (
    <div className="container">
      
      <div className="body">
        
        <div className="title">
          <h3>Records</h3>
        </div>
        
        <div className="subtitle">
          <h4>Here's your health record overtime</h4>
        </div>

        <div className="block1">

          <div className="headings">
            <div className="rt1">
              <h3>Diagnosis history</h3>
            </div>

            <div className="lt1">
              
              <div className="btn1">
                <button>Download all</button>
              </div>

              <div className="btn2">
                <button>
                  <img src={image} />
                  <div className="btn-txt">
                    Share
                  </div>
                </button>
              </div>
              
            </div>
            
          </div>

          <div className="table">
            <Diagnosis />
          </div>
        
        </div>

        <div className="block2">
          
          <div className="rt2">
            
            <div className="rt-head">
              
              <div className="rt-txt1">
                <h3>Medications history</h3>
              </div>

              <div className="search-bar">
                <div className="search">
                  <input type="search" placeholder="search"/>

                  <img src={image1} alt='' />
                </div>
                
              </div>

              <div className="rt-sub1">
                <h4>Frequency</h4>
              </div>
              
            </div>

            <div className="table2">
              <Medications />
            </div>
          </div>

          <div className="lt2">
            <div className="lt-head">
              
              <div className="rt-txt1">
                <h3>Lab results</h3>
              </div>

              <div className="search-bar1">
                <div className="search">
                  <input type="search" placeholder="search"/>

                  <img src={image1} alt=''/>
                </div>
              </div>

              <div className="rt-sub1">
                
                <button>
                  <img src={image2} />
                  <div className="btn-name">
                    Filter
                  </div>
                </button>
                
              </div>
              
            </div>

            <div className="table2">
              <Lab />
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
  )
  
}


