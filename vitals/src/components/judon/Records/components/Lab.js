import image from './images/Line.png';
import image2 from './images/Line2.png';

const Lab = () => {
  const labResult = [
    {
      id: 1,
      supplement: 'Glucose',
      percentage: '0.2%'
    },
    {
      id: 2,
      supplement: 'Potassium',
      percentage: '0.7%'
    },
    {
      id: 3,
      supplement: 'Sodium',
      percentage: '0.2%'
    },
    {
      id: 4,
      supplement: 'Iron',
      percentage: '0.1%'
    },
    {
      id: 5,
      supplement: 'Magnesium',
      percentage: '0.2%'
    },
    {
      id: 6,
      supplement: 'Alkaline Phosphate',
      percentage: '0.9%'
    },
    {
      id: 7,
      supplement: 'Calcium',
      percentage: '0.2%'
    },
  ]

  return (  
    <>
      <table>
        <tbody>
          {labResult.map(lab => (
            <tr key={lab.id}>
                  
                  <td className="supplements">
                    {lab.supplement}
                  </td>
      
                  <td className="percentage">
                    {lab.percentage}
                  </td>
      
                  <td className="trend">
                    {lab.percentage === '0.2%' ? (
              <img src={image} />
                    ) : (<img src={image2} />)}
                    
                  </td>
                  
                </tr>
          ))}
          
        </tbody>
      
      </table>
    </>
    
  );
};

export default Lab;
