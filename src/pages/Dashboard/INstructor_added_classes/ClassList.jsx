import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ClassList = () => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = getAuth();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch(`/classes/instructor/${user?.email}`);
      const data = await response.json();
      setClasses(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>SportifyCamp | Instrucor classes</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Your Classes</h1>
      {isLoading ? (
        <div className="text-center">
          <svg
            className="animate-spin h-5 w-5 mx-auto text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-gray-600 mt-2">Loading...</p>
        </div>
      ) : (
        <ul>
          {classes.map((course) => (
            <li key={course._id} className="mb-4">
              <h2 className="text-lg font-semibold">{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Status: {course.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassList;
