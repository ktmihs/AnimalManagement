import React from 'react'
import './main.css'

function SmallAd({data}){
    return(
        <a className="link" href={`/hospital/${data.name}`}>
            <div className="ad">    
              {data.name}
              <br/>{data.tel}
              <br/>{data.new_addr}
              <br/>
            </div>
          </a>
    )
}
export default SmallAd