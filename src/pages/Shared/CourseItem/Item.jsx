const Item = ({ name, img, instructor, available, price }) => {
    return (
      <div className="mb-5 mx-auto">
        <img className="w-52 h-36 rounded" src={img} alt={name} />
        <div >
          <h2 className="font-bold py-2">Course Name:{name}</h2>
          <p>Instructor : {instructor}</p>
          <p>
            <span>Available Seat: {available }</span> 
              <span> Fees: ${price}</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Item;
  