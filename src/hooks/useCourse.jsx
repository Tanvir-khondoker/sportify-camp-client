import { useEffect, useState } from "react";

const useCourse = () =>{
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("http://localhost:5000/courses")
        .then((res) => res.json())
        .then((data) => {
          setCourse(data);
          setLoading(false)
        });
    }, [])
    return [course, loading]
}


export default useCourse;