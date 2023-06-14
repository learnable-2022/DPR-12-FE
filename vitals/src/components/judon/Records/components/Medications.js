import image from './images/Rectangle2.png';
import image2 from './images/Rectangle1.png';


const Medications = () => {
  const medicationsHistory = [
    {
      id: 1,
      acronym: 'AM',
      drug: 'Amphetamin 70mmg',
      duration: '12/03/22 - Present',
      frequency: 'Frequent'
    },
    {
      id: 2,
      acronym: 'PC',
      drug: 'Paracetamol 50mmg',
      duration: '24/08/23 - 31/08/23',
      frequency: 'Less Frequent'
    },
    {
      id: 3,
      acronym: 'AM',
      drug: 'Amphetamin 70mmg',
      duration: '02/05/23 - 02/07/23',
      frequency: 'Frequent'
    },
    {
      id: 4,
      acronym: 'AT',
      drug: 'Artemeter 50mmg',
      duration: '16/01/21 - 02/02/21',
      frequency: 'Less Frequent'
    },
    {
      id: 5,
      acronym: 'AM',
      drug: 'Amphetamin 70mmg',
      duration: '21/03/23 - 21/04/23',
      frequency: 'Frequent'
    },
    {
      id: 6,
      acronym: 'AM',
      drug: 'Amphetamin 70mmg',
      duration: '02/05/23 - 02/07/23',
      frequency: 'Frequent'
    },
  ];

  return (
    <>
      <table>
        <tbody>
          {medicationsHistory.map(medications => (
            <tr key={medications.id}>
      
                  <td className="acronyms">
                    <div className="acronym">
                      <h3>{medications.acronym}</h3>
                    </div>
                  </td>
      
                  <td className="drugs">
                    
                    <div className="drug">
                      <h3>{medications.drug}</h3>
                    </div>
      
                    <div className="duration">
                      <h5>{medications.duration}</h5>
                    </div>
                    
                  </td>
      
                  <td className="frequency">
                    {medications.frequency === 'Frequent' ? (
                    <div className="ftext">
                      <h4>{medications.frequency}</h4>
                      <img src={image} />  
                    </div>
              ) : (
                    <div className="ftext">
                      <h4>{medications.frequency}</h4>
                      <img src={image2} />  
                    </div>
            )}
                    
                    
                    
                  </td>
                </tr>
          ))}
          
        </tbody>
      
      </table>
      
    </>
  );
};

export default Medications;