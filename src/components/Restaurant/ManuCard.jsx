import React from 'react'
import {Accordion, Button,AccordionSummary,AccordionDetails,Checkbox,FormGroup,FormControlLabel} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ingredientlist=[
  {
    category:"Nuts & seeds",
    ingredients:["Cashews"]
  },
  {
    category:"Protein",
    ingredients:["Ground beef","Bacon strips"]
  },
  {
    category:"Bread",
    ingredients:["Hamburger buns"]
  },
  {
    category:"Vegetable",
    ingredients:["Lettuce","Tomato slices","Pickles","Onion slices"]
  },
  {
    category:"Condiment",
    ingredients:["Ketchup"]
  }

]

const ManuCard = () => {

  const handleCheckBoxChange=(value)=>{
    console.log("value")
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
              <img 
              className='w-[7rem] h-[7rem] object-cover'
              src="https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_1280.jpg" alt="" 
              />
              <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>Burger</p>
                <p>₹ 499</p>
                <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos repellendus ducimus, non, aspernatur dolorum unde ullam quia provident deserunt porro numquam ipsa</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form action="">
             <div className='flex gap-5 flex-wrap'>
                {
                  ingredientlist.map((item)=>
                  <div>
                    <p>{item.category}</p>
                    <FormGroup>
                      {item.ingredients.map((item)=>
                        <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
                      )}
                    </FormGroup>
                  </div>
                  )
                }
             </div>
             <div className='pt-5'>
              <Button variant="contained" disabled={false} type="submit">
                {true?"Add to Cart":"Out of Stock"}
              </Button>
             </div>
          </form>   
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ManuCard
