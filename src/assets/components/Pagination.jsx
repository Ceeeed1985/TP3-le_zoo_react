import React from 'react'

export default function Pagination({
    currentPage,
    totalPages,
    handlePageSizeChange,
    onPageChange,
    setItemsPerPage,
    itemsPerPage
  }) {
  return (
    <div className='pagination'>
      <select value={itemsPerPage} onChange={handlePageSizeChange} className='form-control size select'>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

    {Array.from({length: totalPages}).map((_,index) => {
      return <button
        key={index}
        className={currentPage === index + 1 ? 'active btn' : 'btn'}
        onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      })}

    </div>
  )
}
