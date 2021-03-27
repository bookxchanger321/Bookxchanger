import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Grid,CircularProgress,Grow,Container} from '@material-ui/core';
import Book from '../Book/Book'
import AllBooks from "../AllBooks"
import useStyles from '../style' 
import { set } from 'mongoose';
import SearchBox from "../../HomePageComponents/SearchBar/SearchBox.js";
const FilteredBooks = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const filterData = useSelector(state=>state.filterData)
   
    useEffect(()=>{
        console.log("Getting Filtered Books")
    },[dispatch])

  
    // console.log(filterData);
   
    if(filterData.length === 0){
<<<<<<< HEAD
        return(<AllBooks />)
=======

        return(<h1>No Books Found</h1>)
>>>>>>> 71209b406e7e30b2f8fa5579c25ffa65bcf9eefd
    }
    else {
        return (
<<<<<<< HEAD
          <>
            <SearchBox />
            <span style={{margin : "0px",padding:"5px",}}><h2>Filtered Books</h2></span>
=======
            <>
            <span style={{margin : "0px",padding:"5px",}}><h1>Filtered Books</h1></span>
>>>>>>> 71209b406e7e30b2f8fa5579c25ffa65bcf9eefd
            <div style={{"marginTop":"2px"}}>
                <Container>
                {filterData.length===0?<CircularProgress/>:(
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {filterData.map((book)=>(
                            <Grid item xs={12} sm={3}>
                                <Book key={book._id} book={book}/>
                            </Grid>
                    ))}
                    </Grid>
                    )
                }
                </Container>
            </div>
          </>
        )
    }
}

export default FilteredBooks

