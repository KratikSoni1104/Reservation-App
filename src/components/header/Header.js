import { faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='header'>
            <div className='headerList'>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faBed}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header