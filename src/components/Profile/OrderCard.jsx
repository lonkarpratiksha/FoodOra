import { Card, Button } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' src="https://cdn.pixabay.com/photo/2024/04/21/18/44/ai-generated-8711272_1280.jpg" alt="" />
                <div className=''>
                    <p>biryani</p>
                    <p>$499</p>
                </div>
            </div>
            <div>
                <Button className="cursor-not-allowed" variant='contained'>Completed</Button>
            </div>
        </Card>
    )
}

export default OrderCard
