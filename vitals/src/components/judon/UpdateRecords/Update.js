import Sidebar from '../../doctors-pages/sidebar/sidebar'
import './Update.css'

export default function App() {


  return (


    <div className="container">
      <Sidebar />
      
      <div className="body">
        
        <div className="title-side">
          <h4>New Records</h4>
          <p className='freq'>You are viewing Sarah Umeh Ogechukwu's Health Record </p>
        </div>
        
        
          
        

        <form>
          <div className="signz">
            
            <div className="title">
              <h3>Signs and Symptoms</h3>
            </div>
  
            <div className="inputz">
              <textarea rows="5" cols="60" name="text" placeholder="Enter text"></textarea>          
            </div>
            
          </div>
  
          <div className="signs">
            
            <div className="title">
              <h3>Lab Test</h3>
            </div>
  
            <div className="inputz">
              <textarea rows="5" cols="60" name="text" placeholder="Enter text"></textarea>
            </div>
            
          </div>
  
          <div className="signs">
            
            <div className="title">
              <h3>Test Result</h3>
            </div>
  
            <div className="inputz">
              <textarea rows="5" cols="60" name="text" placeholder="Enter text"></textarea>
            </div>
            
          </div>
  
          <div className="vitalz">
            
            <div className="title">
              <h3>Vital signs</h3>
            </div>
  
            <div className="vinputs">
  
              <div className="inputz">
                
                <div className="input-title">
                  <h4>Blood pressure</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
  
              <div className="inputz">
                
                <div className="input-title">
                  <h4>Blood sugar</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
  
              <div className="inputz">
                
                <div className="input-title">
                  <h4>Temperature</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
              
            </div>
  
            <div className="vinputs">
  
              <div className="vinput">
                
                <div className="input-title">
                  <h4>Heart rate</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
  
              <div className="vinput">
                
                <div className="input-title">
                  <h4>Oxygen level</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
  
              <div className="vinput">
                
                <div className="input-title">
                  <h4>Respiratory rate</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
              
            </div>
            
          </div>
  
          <div className="btns">
           
            <div className="btn">
              <button className='add-btn'>Cancel</button>
            </div>
            
            <button className='add-btn'>Update Record</button>
            
          </div>
        </form>

        
    
      </div>
      
    </div>
  )
}
