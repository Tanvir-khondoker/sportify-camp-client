import { useQuery } from "@tanstack/react-query";

const useTeacher = () => {



    const {data: course = [], isLoading: loading } = useQuery({
        queryKey : ['course'],
        queryFn: async() =>{
            const res = await fetch("http://localhost:5000/instructors");

            return res.json();
        }
    })

    return [course, loading]
}

export default useTeacher;