import { faBed, faCab, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./header.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';

function Header(props) {

    //for persons
    const [openOptions , setOpenOptions] = useState(false);
    const [options , setOptions] = useState({
        adult : 1,
        children : 0,
        room : 1
    });

    const [openDate , setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      function handleChange(name , operation) {
        setOptions(prev => {
            return ({
                ...prev,
                [name] : operation === "i" ? options[name]+1 : options[name]-1
            })
        })
      }

  return (
    <div>
        <div className='header'>
            <div className={props.type === "list" ? 'headerContainer listMode' : "headerContainer"}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Attractions</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport taxis</span>
                    </div>
                </div>
                { props.type !== "list"  && <><h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                <p className='headerDesc'>Get rewarded for your travel - unlock instant savings of 10% or more with a free Lamabooking account</p>
                <button className='headerBtn'>Sign in / Register</button>

                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                        <input type="text" className='headerSearchInput' placeholder='where are you going?'></input>
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDay} className='headerIcon'/>
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate , "MM/dd/yyyy")} to ${format(date[0].endDate , "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange className='date'
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                        />}
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                        <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{options.adult} Adult . {options.children} Children . {options.room} Room</span>
                        {openOptions && <div className='options'>
                            <div className='optionItems'>
                                <span className='optionText'>Adult</span>
                                <div className='optionCounter'>
                                    <button disabled={options.adult <= 1} className='optionCounterButton' onClick={() => handleChange("adult" , "d")}>-</button>
                                    <div className='optionCounterNumber'>{options.adult}</div>
                                    <button className='optionCounterButton'  onClick={() => handleChange("adult" , "i")}>+</button>
                                </div>
                            </div>
                            <div className='optionItems'>
                                <span className='optionText'>Children</span>
                                <div className='optionCounter'>
                                    <button disabled={options.children <= 0} className='optionCounterButton'  onClick={() => handleChange("children" , "d")}>-</button>
                                    <div className='optionCounterNumber'>{options.children}</div>
                                    <button className='optionCounterButton'  onClick={() => handleChange("children" , "i")}>+</button>
                                </div>
                            </div>
                            <div className='optionItems'>
                                <span className='optionText'>Room</span>
                                <div className='optionCounter'>
                                    <button disabled={options.room <= 1} className='optionCounterButton'  onClick={() => handleChange("room" , "d")}>-</button>
                                    <div className='optionCounterNumber'>{options.room}</div>
                                    <button className='optionCounterButton'  onClick={() => handleChange("room" , "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className='headerSearchItem'>
                        <button className='headerBtn'>Search</button>
                    </div>
                </div></>}
            </div>
        </div>
    </div>
  )
}

export default Header