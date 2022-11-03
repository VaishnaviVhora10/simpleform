import React from 'react'
import { useLocation } from 'react-router-dom';
import './list.css';

function List() {
 let location = useLocation();
 console.log(location);
  return (
    <div className='list_main'>
    List Of Users
    <div className='list'>
    { location.state.data.map((x) => <li>{x}</li> )}
    </div>
   </div>
  )
}

export default List;