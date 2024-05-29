/* eslint-disable react/prop-types */
import style from './search.module.css'
import { FaSearch } from "react-icons/fa";
import Button from '../button/button';

function Search({text}){
    return(
        <div className={style.search}>

            <FaSearch className={style.icon}/>

            <select  placeholder={` ${text}`}>
                <option>Select State</option>
                <option>hi</option>
                <option>hello</option>

            </select>

        </div>
    )
}

export default function SearchSection(){
    return(
        <div className={style.searchSectionFirst}>
            <Search text="State"/>
            <Search text="City"/>
            <Button text="Search" search/>
        </div>
    )
}