import React, { Component } from 'react';

import Header from './Header/Header';
import CardList from './Card-List/Card-List';


class Home extends Component {

    render() {


        return (

            <>
                <div className="container mt-2">
                    <Header />
                    <CardList />
                    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body small">
                            <div class="btn-group btn-group" role="group" aria-label="...">
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

}

export default Home;