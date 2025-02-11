import React from 'react'

export default function Pagination({
    currentPage,
    totalPage,
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

      <button className='btn'>1</button>
      <button className='btn'>2</button>
      <button className='btn active'>3</button>
      <button className='btn'>4</button>
      <button className='btn'>5</button>
    </div>
  )
}
