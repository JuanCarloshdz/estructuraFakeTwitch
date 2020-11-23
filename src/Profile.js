import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft" >
                <img
                    src="https://play-lh.googleusercontent.com/-H4MmHUz86wU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmXY7VP2GeYsc8f1ho1nufXKhdEcg/photo.jpg"
                    alt="Nombe Perfin" />
                <div className="profile__topLeftDetails">
                    <h1>Yumpi Yamal</h1>
                    <h3>87k follower</h3>

                </div>
            </div>

            <div className="profile__topRight">
                <i className="fas fa-heart graybg"> </i>
                <i className="fas fa-bell graybg" ></i>
                <i className="fas fa-ellipsis-v" ></i>

            </div>

            <div className="profile__menu">
                <h2 className="activate">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2> <i className="fas fa-arrow-up" ></i> </h2>
                <h2>Chat </h2>

            </div>

            <div className="profile__recent">
                <h2>Recent broadcast</h2>
                <div className='profile__recentItems'>
                    <RecentItem
                        url="https://www.youtube.com/embed/x7XSzXrgqv8"
                        tittle="Pancha Sky" />

                    <RecentItem
                        url="https://www.youtube.com/embed/5W6gJoSaJ9o"
                        tittle="Pancha Sky" />

                    <RecentItem
                        url="https://www.youtube.com/embed/5W6gJoSaJ9o"
                        tittle="Daemony" />


                    <RecentItem
                        url="https://www.youtube.com/embed/5W6gJoSaJ9o"
                        tittle="SadGuru" />

                    <RecentItem
                        url="https://www.youtube.com/embed/5W6gJoSaJ9o"
                        tittle="Otros" />

                </div>
            </div>

            <div className="profile__categories">
                <h2>Categorias</h2>
                <img src='https://ouroboros.world/sites/default/files/field/image/Nightwing000.jpg' alt='Categorias' />
                <h3>sCINENCE & tECHOLOGY</h3>
            </div>


        </div>
    )
}

export default Profile
