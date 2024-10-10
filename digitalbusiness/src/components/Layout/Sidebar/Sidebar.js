import css from './Sidebar.module.css'
import {MdSpaceDashboard} from 'react-icons/md'
import {AiFillCalendar, AiOutlineTable} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className={css.container}>
       
        <img src='' className='' alt='logo'/>
        <div className={css.menu}>
            <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                <MdSpaceDashboard size={25}/>
            </NavLink>
            <NavLink to="calender" className={css.tem} title='Calender'>
                <AiFillCalendar size={25}/>

            </NavLink>
            <NavLink to="board" className={css.tem} title='Trello Board'>
                <FaTasks size={25}/>

            </NavLink>
            <NavLink to="users" className={css.tem} title='Users'>
                <AiOutlineTable size={25}/>

            </NavLink>

           

        </div>
      
    </div>
  )
}

export default Sidebar
