import React from 'react';

//custom hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

import styles from './style.module.css';

export const Search = () => {
    const query = useQuery();
    const search = query.get('q');
  return (
    <div></div>
  )
}
