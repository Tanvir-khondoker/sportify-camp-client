import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email], // Add a null check to user.email
    queryFn: async () => {
      if (user && user.email) { // Add a null check to user and user.email
        const res = await fetch(`http://localhost:5000/carts?email=${user.email}`);
        return res.json();
      }
      return null; // Return null if user or user.email is null
    },
  });

  return [cart, refetch];
};

export default useCart;
