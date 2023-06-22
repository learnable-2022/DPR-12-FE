
import Sidebar from '../../sidebar/sidebar';
import './Access.css';
import AccessTable from './components/AccessTable';
import image from './components/images/icon1.png';
import image1 from './components/images/icon2.png';
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';


export default function App() {
  return (



    <div className="containerz">
      <Sidebar />

      <div className="bodyz">
        
        <div className="title-sidez">
          <h3>Access Controls</h3>
        </div>
        
        <div className="subtitlez">
          <p>Manage who can view your medical records</p>
        </div>

        <div className="grantz">
          <img src={image1} />

          <div className="gtxtz">
            <h4>Grant Access</h4>
          </div>
        </div>

        <div className="revokez">
          <img src={image} />

          <div className="gtxtz">
            <h4>Revoke Access</h4>
          </div>
        </div>
        
        

        <div className="block1z">

          <div className="head-textz">

            <div className="title2z">
              <h3>Access Control history</h3>
            </div>

            <div className="title-datez">
              <h4>last 30days</h4>
            </div>
            
          </div>

          <div className="tablez">
            <AccessTable />
          </div>  
        
        </div>

        <div className="paginationz">
            
            <div className="previousz">
              <PrevButton  />
            </div>

            <div className="numbersz">
              <div className="btn-contz">
                <button className="no1z">1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
              </div>

            </div>

            <div className="nextz">
              <NextButton  />
            </div>
          
          </div>
        
        
      </div>
      
    </div>
  )
}
