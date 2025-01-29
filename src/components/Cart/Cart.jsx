import React from 'react'
import CartItem from './CartItem'
import { Divider, TextField } from '@mui/material'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Button, Card,Box} from '@mui/material';
import Modal from '@mui/material/Modal';
import {  Field, Form, Formik } from 'formik';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Order/Action';
// import { ErrorMessage} from 'formik';
// import * as Yup from "yup"


export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};
const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
}

// const validationSchema=Yup.object.shape({
// streetAddress:Yup.string().required("Street address is required"),
// state:Yup.string().required("state is required"),
// pincode:Yup.number().required("pincode is required"),
// city:Yup.string().required("city is required")
// })

const Cart = () => {
    const createOrderUsingSelectedAddress=()=>{}
    const handleOpenAddressModel=()=>{setOpen(true)}
    const {auth,cart}=useSelector(store=>store)
    const dispatch=useDispatch()
    const handleSubmit=(values)=>{
        const data={
            jwt: localStorage.getItem("jwt"),
            order:{
                restaurantId:cart.cartItems[0].food?.restaurant.id,
                deliveryAddress:{
                    fullName: auth.user?.fullName,
                    streetAddress:values.streetAddress,
                    city:values.city,
                    state:values.state,
                    pincode:values.pincode,
                    country:"India"
                }
            }
        }
        dispatch(createOrder(data));
        console.log("Form value:", values)
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    
   
    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {cart.cartItems.map((item)=> <CartItem item={(item)}/>)}
                    <Divider/>
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>₹{cart.cart?.total}</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery Fees</p>
                                <p>₹21</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST & Restaurant Charges</p>
                                <p>₹33</p>
                            </div>
                            <Divider/>
                        </div>
                        <div className='flex justify-between text-gray-400 mt-4'>
                            <p>Total Pay</p>
                            <p>₹{cart.cart?.total +21+33}</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem/>
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1,1,1,1,1].map((item)=><AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>)}

                            {/* add new adddress */}
                            <Card className='flex gap-5 w-64 p-5'>
                                <AddLocationAltIcon/>
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg'>Add New Address</h1>
                                    <Button variant="contained" fullWidth onClick={handleOpenAddressModel}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>

                </section>
            </main>

            {/* whenever user click on add a new address then this modal will open */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* install formik using "npm install formik yupp" and npm install yup"... formik is form creation and yup is for form validation*/}
                    {/* this helps to use built forms in react */}
                    <Formik initialValues={initialValues}
                    // validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid size={{xs:12}}>
                                    <Field
                                    as={TextField}
                                    name="streetAddress"
                                    label="Street Address"
                                    fullWidth
                                    variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg)=><span className='text-red-600'>{msg}</span>}
                                    //     </ErrorMessage>
                                    // }
                                    />
                                </Grid>
                                <Grid size={{xs:12}}>
                                    <Field
                                    as={TextField}
                                    name="state"
                                    label="State"
                                    fullWidth
                                    variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg)=><span className='text-red-600'>{msg}</span>}
                                    //     </ErrorMessage>
                                    // }
                                    />
                                </Grid>
                                <Grid size={{xs:12}}>
                                    <Field
                                    as={TextField}
                                    name="city"
                                    label="City"
                                    fullWidth
                                    variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg)=><span className='text-red-600'>{msg}</span>}
                                    //     </ErrorMessage>
                                    // }
                                    />
                                </Grid>
                                <Grid size={{xs:12}}>
                                    <Field
                                    as={TextField}
                                    name="pincode"
                                    label="Pincode"
                                    fullWidth
                                    variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg)=><span className='text-red-600'>{msg}</span>}
                                    //     </ErrorMessage>
                                    // }
                                    />
                                </Grid>
                                <Grid size={{xs:12}}>
                                    <Button fullWidth variant='contained' type="submit" color='primary'>Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart
