import React, {useState, useEffect} from 'react'
import '../doctorspages.css'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../doctors-pages/sidebar/sidebar'
import MainDashboard from '../../doctors-pages/Dashboard/MainDashboard'

export default function Dashboard() {


  const docToken = localStorage.getItem('doctor');
  const [docDetails, setDocDetails] = useState(null);

  useEffect(() => {
    const fetchDocDetails = async () => {
      try {
        const docResponse = await fetch('https://vitals-8myt.onrender.com/vitals/doctors/', {
          headers: {
            Authorization: `Bearer ${docToken}`,
          },
        });
        if (!docResponse.ok) {
          throw new Error('Error fetching Doc details');
        }
        const docData = await docResponse.json();
        console.log(docData);
        setDocDetails(docData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocDetails();
  }, [docToken]);

  

  if (!docDetails) {
    return <p>Loading doc details...</p>;
  }



  return (
    <div className='the-dashboard'>
        <div className='access-patients-main'>
          <Sidebar />
          <div className='main-access'>
            <MainDashboard />
          </div>
        
        </div>
    </div>
  )
}
