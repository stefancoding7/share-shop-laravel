import React, { Component } from 'react';

// import Navbar from './Navbar/Navbar';
import CardList from './Card-List/Card-List';


class Home extends Component {

    render() {


        return (

            <>
             
                <div className="container mt-2">
                   
                    <CardList />
                    
                </div>
            </>
            
        )
    }

}

export default Home;