import React from 'react'
import Channel from './Channel'
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top" >
                <h5>FOLLOWED CHANNELS</h5>
                <Channel
                    avatar="https://vignette.wikia.nocookie.net/heroess/images/2/2d/TSR_Sonic.png/revision/latest/scale-to-width-down/310?cb=20190524005513&path-prefix=es"
                    name="Conic"
                    followers="549K" />
                <Channel
                    avatar="https://vignette.wikia.nocookie.net/heroess/images/d/dd/SRivals_Sonic_con_Silver.png/revision/latest/scale-to-width-down/184?cb=20190525000920&path-prefix=es"
                    name="ponic"
                    followers="549K" />

                <Channel
                    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDJNNV6E6cIQiS2p7huMyxcpSvTYzC8LkZw&usqp=CAU"
                    name="Master"
                    followers="55K" />


                <Channel
                    avatar="https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/9/4/4dcb5yex1zr.jpg"
                    name="Jorge"
                    followers="52K" />
                <h5>RECOMMENT CHANNELS</h5>
                <Channel
                    avatar="https://www.bikemontt.com/foro/uploads/monthly_2017_07/C.png.aa86a8e7871be6f0d4a1bc21b93e6077.png"
                    name="Katarine"
                    followers="22K" />

                <Channel
                    avatar="https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/0/1/48kfe1z4sqw.jpg"
                    name="Alberto"
                    followers="525K" />

                <Channel
                    avatar="https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/4/0/49lwpkicfq9.jpg"
                    name="Becerro"
                    followers="16K" />

                <Channel
                    avatar="https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/2/8/476jeq7xmua.jpg"
                    name="Norma"
                    followers="16K" />



                <p className="sidebar__topShowMore">Show More</p>
            </div>

            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer" >
                    <i className="fas fa-search" ></i>
                    <input type="text" placeholder="Search to Add Friend's"/>
                </div>

            </div>
        </div>
    )
}

export default SideBar
