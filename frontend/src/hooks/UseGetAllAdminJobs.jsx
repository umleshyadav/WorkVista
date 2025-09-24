import { setAdminJobs } from '@/redux/jobSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`https://work-vista.onrender.com/api/v1/job/getadminjobs`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminJobs();
    },[])
}

export default useGetAllAdminJobs;