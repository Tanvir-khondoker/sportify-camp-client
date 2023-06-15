import { useState } from "react";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAllCourse from "../../../hooks/useAllCourse";

const ManageCourses = () => {
  const [course] = useAllCourse();
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleApprove = (item) => {
    fetch(`http://localhost:5000/allCourseS/approved/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is now Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (item) => {
    fetch(`http://localhost:5000/allCourseS/denied/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is now denied`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleFeedback = (item) => {
    setCurrentCourse(item);
    setShowModal(true);
  };

  const handleModalOk = () => {
    fetch(`http://localhost:5000/allCourseS/feedback/${currentCourse._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feedback: feedback,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${currentCourse.name} feedback saved`,
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
          setCurrentCourse(null);
          setFeedback("");
        }
      });
  };

  const handleModalCancel = () => {
    setShowModal(false);
    setCurrentCourse(null);
    setFeedback("");
  };

  return (
    <div className="w-full">
      <SectionTitle heading="Manage all Classes" subHeading="" />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Info</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {course.map((item, index) => (
              <tr className="mt-4" key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-bold">
                    Instructor: {item.instructor}
                  </span>
                  <br />
                  <span className="badge badge-ghost badge-sm mt-2">
                    Email: {item?.email}
                  </span>
                </td>
                <td>
                  <span className="text-orange-500">
                    Price: {item?.price}$
                  </span>
                  <br />
                  <span className="badge badge-ghost badge-sm mt-3">
                    Available: {item.available}
                  </span>
                </td>
                
                
                <td className="flex flex-col items-center">
                  <button
                    onClick={() => handleApprove(item)}
                    className="btn btn-outline btn-success btn-xs  mb-3"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(item)}
                    className="btn btn-outline btn-error btn-xs"
                  >
                    Deny
                  </button>
                </td>
                
                
                <td>
                  <button
                    onClick={() => handleFeedback(item)}
                    className="btn rounded-2xl"
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter feedback"
              className="border border-gray-300 rounded px-4 py-2 mb-4 w-96"
            />
            <div className="flex justify-end">
              <button
                onClick={handleModalCancel}
                className="text-gray-500 mr-4"
              >
                Cancel
              </button>
              <button
                onClick={handleModalOk}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
