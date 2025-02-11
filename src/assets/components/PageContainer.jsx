import React, {useState} from 'react';
import Header from './Header';
import Search from './Search';
import CategorieList from './CategorieList';
import Pagination from './Pagination';
import AnimalList from './AnimalList';
import { allData, searchData } from '../../../mocks/data-animals';

export default function PageContainer() {

  const [animals, setAnimals] = useState(allData);
  const [search, setSearch] = useState("");
  const handleSearch = (searchText) => {
    setSearch(searchText);
    setAnimals(searchData(searchText));
  }

  return (
    <div>
        <Header />
        <div className='appContent container'>
          <Search search={search} handleSearch={handleSearch} />
          <CategorieList />
          <AnimalList animals={animals}/>
          <Pagination />
        </div>
    </div>
  )
}
