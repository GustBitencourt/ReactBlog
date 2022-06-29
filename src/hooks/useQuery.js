import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';


export const useQuery = () => {
    const { search } = useLocation();

    //executa quanto a url for alterada
    return useMemo(() => new URLSearchParams(search), [search]);
}