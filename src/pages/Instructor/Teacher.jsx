const Teacher = ({ name, photo, email }) => {
    return (
      <div className=" mx-auto  p-1 rounded-xl">
        <img className="w-52 h-52 rounded-xl" src={photo} alt={name} />
        <div>
          <h2 className="font-bold py-2 uppercase text-center"> Name: {name}</h2>
          <p className="font-semibold text-center">Email: {email}</p>
          
        </div>
      </div>
    );
  };
  
  export default Teacher;