const Item = ({ name, img, instructor, available, price }) => {
    return (
      <div className="mb-5 mx-auto border-2 border-teal-500 p-4 rounded-xl">
        <img className="w-52 h-36 rounded-xl" src={img} alt={name} />
        <div>
          <h2 className="font-bold py-2 uppercase">--- Name: {name} ---</h2>
          <p className="font-semibold">Instructor: {instructor}</p>
          <p>
            <span>Available Seat: {available}.</span>{" "}
            <span className="text-orange-500">Fees: ${price}.</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Item;
  