// useInstructor.js
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor = false, isLoading: isInstructorLoading = true } = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () => {
      if (!user) {
        return false;
      }

      const res = await axiosSecure.get(`/users/instructor/${user.email}`);
      return res.data.instructor;
    }
  });

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
