import React, {useState} from 'react';
import Header from './Header';
import Search from './Search';
import CategorieList from './CategorieList';
import Pagination from './Pagination';
import AnimalList from './AnimalList';
import { allData } from '../../../mocks/data-animals';

export default function PageContainer() {

  const [animals, setAnimals] = useState(allData);

  return (
    <div>
        <Header />
        <div className='appContent container'>
          <Search />
          <CategorieList />
          <AnimalList animals={animals}/>
          <Pagination />
        </div>
    </div>
  )
}
