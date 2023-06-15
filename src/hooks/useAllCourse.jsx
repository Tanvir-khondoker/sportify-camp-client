import { useQuery } from "@tanstack/react-query";

const useAllCourse = () => {



    const {data: course = [], isLoading: loading } = useQuery({
        queryKey : ['course'],
        queryFn: async() =>{
            const res = await fetch("http://localhost:5000/allCourses");

            return res.json();
        }
    })

    return [course, loading]
}

export default useAllCourse;