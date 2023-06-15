
import Sidebar from '../../sidebar/sidebar';
import './Access.css';
import AccessTable from './components/AccessTable';
import image from './components/images/icon1.png';
import image1 from './components/images/icon2.png';
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';


export default function App() {
  return (



    <div className="container">
      <Sidebar />

      <div className="body">
        
        <div className="title-side">
          <h3>Access Controls</h3>
        </div>
        
        <div className="subtitle">
          <h4>Manage who can view your medical records</h4>
        </div>

        <div className="grant">
          <img src={image1} />

          <div className="gtxt">
            <h4>Grant Access</h4>
          </div>
        </div>

        <div className="revoke">
          <img src={image} />

          <div className="gtxt">
            <h4>Revoke Access</h4>
          </div>
        </div>
        
        

        <div className="block1">

          <div className="head-text">

            <div className="title2">
              <h3>Access Control history</h3>
            </div>

            <div className="title-date">
              <h4>last 30days</h4>
            </div>
            
          </div>

          <div className="table">
            <AccessTable />
          </div>  
        
        </div>

        <div className="pagination">
            
            <div className="previous">
              <PrevButton  />
            </div>

            <div className="numbers">
              <div className="btn-cont">
                            <button className="no1">1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
              </div>

            </div>

            <div className="next">
              <NextButton  />
            </div>
          
          </div>
        
        
      </div>
      
    </div>
  )
}
