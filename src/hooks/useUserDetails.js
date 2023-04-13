import {useState, useEffect} from 'react';
import {readUserDetails} from '../utils/dateStore';

const useUserDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const data = await readUserDetails();
      setUser(data);
    } catch (e) {
      alert(e.message);
    }
  };

  return user;
};

export default useUserDetails;
