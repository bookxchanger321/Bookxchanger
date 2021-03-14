import React,{useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import ScrollUpButton from "react-scroll-up-button";
import {Container} from '@material-ui/core'
import PostAdForm from './components/PostAdComponents/PostAdForm.js'
import Home from  "./components/HomePageComponents/Home.js"
import Loading from "./components/Loading/Loading.js"
import Auth from './components/Auth/Auth'
import DisplayBooks from './components/AllBooksComponents/AllBooks'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Wishlist from './components/WishlistComponent/Wishlist.js'
import Footer from './components/Footer/footer'

const App = ()=>{

    function displayLoading(){
        return(
            <Loading />
        )
    }
    useEffect(() => {
        displayLoading();
    },[]);
    return (
        <Router>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/all" component={DisplayBooks}/>
                    <Route exact path="/add" component={PostAdForm}/>  
                    <Route exact path="/auth" component={Auth}/>
                    <Route exact path="/profile" component={Profile}/>  
                    <Route exact path="/wishlist" component={Wishlist}/>  
                </Switch>
            </Container>
        </Router>
    )
        
}

export default App;