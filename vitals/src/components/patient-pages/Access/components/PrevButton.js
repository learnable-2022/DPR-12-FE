import image from './images/Icon7.png';


const PrevButton = () => {
  return (
    <button>
      <img src={image} />
      <div className="prev-btn">
        Previous
      </div>
      
    </button>
  );
};

export default PrevButton;