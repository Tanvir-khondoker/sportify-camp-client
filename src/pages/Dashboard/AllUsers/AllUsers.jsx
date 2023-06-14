import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllUsers = () => {
    const  {data : users=[], refetch} = useQuery(['users'], async()=>{
        const res = await fetch(`http://localhost:5000/users`)
        return res.json()
    })

    const  handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
           if(data.modifiedCount){
              refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is now an admin`,
                showConfirmButton: false,
                timer: 1500
              })
           } 
        })
    }
    
    const  handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
           if(data.modifiedCount){
              refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is now an instructor`,
                showConfirmButton: false,
                timer: 1500
              })
           } 
        })
    }

    return (
        <div>
            <Helmet>
        <title>SportifyCamp | All Users</title>
      </Helmet>
            <h2 className="text-3xl font-semibold">Total Users : {users.length}</h2>
            
            
 <div className="overflow-x-auto">
 <table className="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Photo</th>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {users && users.length > 0 ? (
      // Add a null check and check if cart is not empty
      users.map((user, index) => (
        <tr key={user._id}>
          <td>{index + 1}</td>
          <td>
            <div className="flex users-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={user.photo}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </td>
          <td>{user?.name || ""}</td>
          <td>{user?.email || ""}</td>
          <td className="flex flex-col text-center">
           
          {
              user.role === 'admin'?"Admin":
                <button onClick={()=>handleMakeAdmin(user)} className="btn btn-outline btn-accent btn-sm my-2">
                Make Admin
                </button> 
            }

            

            {
              user.role === 'instructor'?"Instructor":
                 <button onClick={()=>handleMakeInstructor(user)} className="btn btn-outline btn-accent btn-sm my-2">
                 Make Instructor
                 </button>  
            }


          </td>
        </tr>
      ))
    ) : (
      // Display a message if the cart is empty
      <tr>
        <td colSpan="5">
          <progress className="progress w-56"></progress>
        </td>
      </tr>
    )}
  </tbody>
</table>
 </div>


        </div>
    );
};

export default AllUsers;