import { useEffect, useState } from "react";

const useCourse = () =>{
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("class.json")
        .then((res) => res.json())
        .then((data) => {
          setCourse(data);
          setLoading(false)
        });
    }, [])
    return [course, loading]
}


export default useCourse;