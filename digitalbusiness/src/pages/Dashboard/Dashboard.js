import React from 'react';
import css from './Dashboard.module.css';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import Layout from '../../components/Layout/Layout';
import { cardsData, ordersData, groupNumber, INITIAL_EVENTS, boardData, userData } from '../../data/Data';
import Statistics from '../../components/Statistics/Statistics';
import Orders from '../../components/Orders/Orders';


const Dashboard = () => {
  return (
    <div>
      <div className={css.container}>
        <div className={css.Dashboard}>
          <div className={`${css.dashboardHead} theme-container`}>
            <div className={css.head}>
              <span>dashboard</span>
              <div className={css.durationButton}>
                <select>
                  <option>1 Week</option>
                  <option>1 Month</option>
                  <option>1 Year</option>
                </select>
              </div>
            </div>
          </div>
          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div key={card.id || index} className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>{card.change}</span>
                  <span>{card.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Statistics />
      </div>
      <Orders/>
      
    </div>
  );
};

export default Dashboard;