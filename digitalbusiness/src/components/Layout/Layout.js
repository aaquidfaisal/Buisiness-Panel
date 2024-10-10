import React from 'react'
import moment from 'moment/moment'
import css from './Layout.module.css'
import {BiSearch} from 'react-icons/bi'
import Sidebar from './Sidebar/Sidebar'
import {  Outlet } from 'react-router-dom'

const Layout = () => {
    
  return (
    <div className={css.container}>

        <Sidebar/>

       

        <div className={css.dashboard}>
            <div className={css.topBaseGradient}>
                <div className='gradient-orange'></div>
                
            </div>

        </div>

        <div className={css.header}>
            <span>{moment().format("dddd, do MMM YYYY")}</span>

            <div className={css.searchBar}>
                <BiSearch size={20}/>
                <input type='text' placeholder='enter here'/>

            </div>
            <div className={css.profile}>
                <img src='./profile.png' alt='profile pic'/>

               <div className={css.details}>
                <span>Chinmay Gonde</span>
                <span>gondechinmay@gmail.com</span>
               </div>

            </div>
            

        </div>
        <div className={css.content}>
                <Outlet/>

            </div>
      
    </div>
  )
}

export default Layout
