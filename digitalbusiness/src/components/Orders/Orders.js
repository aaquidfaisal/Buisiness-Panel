import React from 'react'
import { groupNumber , ordersData} from '../../data/Data'
import css from './Orders.module.css'

const Orders = () => {
  return (
    <div className={`{css.container} $ theme-container`}>
        <div className={css.head}>
            <img src='logo(1).png' alt='logo'/>
            <span>Orders Today</span>

        </div>
        <div className={` $ grey-container`}>
            <span>Amount</span>
            <span>( groupNumber(37000))</span>


        </div>

        <div className={css.Orders}>
            {
                ordersData.map((orders,index)=>(
                    <div key={ orders.id || index} className={css.order}>
                        <span>{orders.name}</span>
                        <span>{orders.change}</span>
                        <span>{orders.items}</span>

                    </div>

                ))

            }

        </div>
      
    </div>
  )
}

export default Orders
