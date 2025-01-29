import React, { useEffect } from 'react'
import { Card, Button} from '@mui/material'
import OrderCard from './OrderCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersOrder } from '../State/Order/Action'

const Orders = () => {

    const {auth,order}= useSelector(store=>store)
    const navigate=useNavigate();
    const jwt=localStorage.getItem("jwt");
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getUsersOrder(jwt))

    },[auth.jwt])
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
            <div className='space-y-5 w-full lg:w-1/2'>
                {
                    order.orders.map((order)=>order.items.map((item)=><OrderCard order={order} item={item}/>))
                }
            </div>
        </div>
    )
}

export default Orders
