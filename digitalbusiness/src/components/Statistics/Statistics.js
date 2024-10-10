import React from 'react'
import css from './Statistics.module.css'
import {BsArrowUpShort} from 'react-icons/bs'
import { groupNumber } from '../../data/Data'
import StatisticalChart from '../StatisticalChart/StatisticalChart.js'


const Statistics = () => {
   
  return (
    <div className={`${css.container} theme-container`}>
        <span className={css.title}>Statistics Overview</span>

        <div className={css.cards}>
            <div className={css.ArrowIcon}>
                <BsArrowUpShort/>
                

            </div>

            <div className={`${css.card} grey-container`}>
                <span>Trending Items</span>
                <span>Most Comman</span>

            </div>

        </div>

        <div className={css.card}>
            <span>profit</span>
            <span>$ {groupNumber(37000)}</span>

        </div>

        <div className={css.card}>
            <span>Daily Average</span>
            <span>${groupNumber(5000)}</span>

        </div>

        <div className={css.card}>
            <span>Items</span>
            <span>${groupNumber(1000)}</span>

        </div>

        <StatisticalChart />
      
    </div>
   
  )
}

export default Statistics
