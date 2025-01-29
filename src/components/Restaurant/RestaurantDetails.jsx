import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { FormControl, Divider, RadioGroup, Typography, FormControlLabel, Radio } from '@mui/material';
import MenuCard from './ManuCard'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantCategory } from '../State/Restaurant/Action';
import { getMenuItemByRestaurantId } from '../State/Menu/Action';

// const menu=[1,1,1,1,1,1]


const foodTypes=[
    {label:"All", value:"all"},
    {label:"Vegetarian only", value:"vegetarian"},
    {label:"Non-Vegetarian", value:"nonvegetarian"},
    {label:"Seasonal", value:"seasonal"}
]


const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all");
    const navigate= useNavigate();
    const dispatch=useDispatch();
    const jwt= localStorage.getItem("jwt");
    const {auth,restaurant,menu}=useSelector(store=>store);
    const[selectedCategory, setSelectedCategory]=useState("");

    const {id,city} = useParams();

    const handleFilter=(e)=>{
        setFoodType(e.target.value)
        console.log(e.target.value, e.target.name)
    }

    const handleFilterCategory=(e,value)=>{
        setSelectedCategory(value)
        console.log(e.target.value, e.target.name,value)
    }

    console.log("restaurantdetails:- ",restaurant);
    
    useEffect(()=>{
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantCategory({jwt,restaurantId:id}))
    },[]);

    useEffect(()=>{
        dispatch(getMenuItemByRestaurantId({
            jwt,restaurantId:id,
            vegetarian:foodType==="vegetarian",
            seasonal:foodType==="seasonal",
            nonveg:foodType==="nonvegetarian",
            foodCategory:selectedCategory}))
    },[selectedCategory,foodType]);

  return (
    <div className='px-5 lg:px-20'>
        {/* section-1 */}
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/India/indian fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <img className='w-full h-[40vh] object-cover' src={restaurant.restaurant?.images[0]} alt="" />
                    </Grid>

                    <Grid size={{xs:12,md:6}} >
                        <img className='w-full h-40vh object-cover' src={restaurant.restaurant?.images[1]} alt="" />
                    </Grid>
                    <Grid size={{xs:12,md:6}} >
                        <img className='w-full h-40vh object-cover' src="https://cdn.pixabay.com/photo/2019/06/25/13/59/city-4298285_1280.jpg" alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>{restaurant.restaurant?.name}</h1>

                <p className='text-gray-500 mt-1'>{restaurant.restaurant?.description}</p>

                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon/>
                        <span>Mumbai, Maharashtra</span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarTodayIcon/>
                        <span>Mon-Sun: 9:00 AM- 9:00 PM(Today)</span>
                    </p>
                </div>
                
            </div>
        </section>

        <Divider/>
        {/* section-2 */}
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter '>
                <div className='box space-y-5 lg:sticky top-28'>

                    {/* food type */}
                    <div>
                        <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_" value={foodType}>
                                {foodTypes.map((item)=>(
                                <FormControlLabel 
                                key={item.value}
                                value={item.value} 
                                control={<Radio/>} 
                                label={item.label}/>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    
                    <Divider/>

                    {/* food category */}
                    <div>
                        <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilterCategory} name="food_category" value={selectedCategory}>
                                {restaurant.categories.map((item)=>(
                                <FormControlLabel 
                                key={item}
                                value={item.name} 
                                control={<Radio/>} 
                                label={item.name}/>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            
            
            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.menuItems.map((item)=><MenuCard item={item}/>)}
            </div>
        </section>
    </div>
  )
} 

export default RestaurantDetails
