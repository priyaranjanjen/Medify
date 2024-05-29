/* eslint-disable react/prop-types */
import style from './button.module.css'

import { FaSearch } from "react-icons/fa";


export default function Button({text, search=false}){
    return(
        <div className={search ? style.searchButton : style.button}>
            {search && <FaSearch className={style.icon}/>}
            {text}
        </div>
    )
}