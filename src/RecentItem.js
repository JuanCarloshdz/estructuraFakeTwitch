import React from 'react'
import './RecentItem.css'
const RecentItem = ({ url, tittle }) => {
    return (
        <div className='item'>
            <iframe
                title={tittle}
                width="400"
                height="235"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>            </iframe>

            <div className='item__details' >
                <img
                    alt='Sonic'
                    src='https://vignette.wikia.nocookie.net/heroess/images/d/dd/SRivals_Sonic_con_Silver.png/revision/latest/scale-to-width-down/184?cb=20190525000920&path-prefix=es' />
                <div className='item__detailsText'>
                    <h4>{tittle}</h4>
                    <p>Sonic</p>
                    <p>Science & Techology</p>

                </div>
            </div>
        </div>
    )
}

export default RecentItem
