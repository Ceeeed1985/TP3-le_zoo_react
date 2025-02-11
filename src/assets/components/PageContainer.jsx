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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Index de récupération de données et de fin de données
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //Créer une variable pour récupérer les animaux à afficher
  const animalToDisplay = animals.slice(startIndex, endIndex);


  const handleSearch = (searchText) => {
    setSearch(searchText);
    setAnimals(searchData(searchText));
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const handlePageSizeChange = (e) => {
    const perPage = e.target.value;
    setItemsPerPage(perPage);
  };

  return (
    <div>
        <Header />
        <div className='appContent container'>
          <Search search={search} handleSearch={handleSearch} />
          <CategorieList />
          <AnimalList animals={animalToDisplay}/>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(animals.length / itemsPerPage)}
            handlePageSizeChange={handlePageSizeChange}
            onPageChange={handlePageChange}
            setItemsPerPage={setItemsPerPage}
            itemsPerPage={itemsPerPage}
            />
        </div>
    </div>
  )
}
