import { useQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";

const useMyAddedClasses = () => {
  const { email } = getAuth();

  const { data: classes = [], isLoading: loading } = useQuery({
    queryKey: ['myAddedClasses', email],
    queryFn: async () => {
      const res = await fetch(`/instructor/classes/${email}`);
      return res.json();
    },
  });

  return [classes, loading];
};

export default useMyAddedClasses;
