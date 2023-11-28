import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { cleanGraphData } from '../../reducers/graph.reducer';
import { useDispatch } from 'react-redux'
import { setGraphDataLocal } from '../local-storage';

const useLogout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = useCallback(() => {
        const confirmed = window.confirm('Are you sure you want to logout? All your unsaved data will be lost.');
        
        if (confirmed) {
            // clear local storage items
            localStorage.removeItem('token')
            localStorage.removeItem('react-graph-app-data')
            
            setGraphDataLocal({
                nodes: [], 
                links: []
            })

            // clear state
            dispatch(cleanGraphData())

            // go to login
            navigate('/login')
            window.location.reload()
          }
      }, [dispatch, navigate]);
  return logout;
}

export default useLogout;