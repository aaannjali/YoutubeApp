import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      
      <ul className='font-bold'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subcriptions</li>
        <li>Explore</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
        <li>Trending</li>
        <li>Shooping</li>
        <li>Music</li>
        <li>Film</li>
      </ul>
    </div>
  )
}

export default Sidebar
