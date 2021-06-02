import React from 'react'
import {Link} from 'react-router-dom'
import '../Components/Content.css'
import Hospital from './Hospital'

function SearchContent({info, loading}){
    if (loading){
        return <h2>Loading...</h2>
    }
    return(
        <Link to='/HospitalPage'>
            {
                info.map(item=>{
                    return(
                        <Hospital key={item.id} item={item}/>
                    )
                })
        }
        </Link>
    )
}
export default SearchContent