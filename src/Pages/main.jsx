import React,{useContext, useEffect, useState} from 'react';
import {DataContext} from '../Store'
import axios from 'axios';
import Header from '../Component/Header';
import Home from './Home';
import {Link, Switch, Route} from 'react-router-dom';
import Product from './Product';
import OrderPlacedComponent from '../Component/OrderPlaced'

const Main = () => {
    const {CloseShop} = useContext(DataContext)

    return (
        <div>
            <Header />
                {CloseShop?

                    <OrderPlacedComponent />
                    :

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/Product">
                            <Product />
                        </Route>
                    </Switch>
                }
        </div>
    )
}

export default Main;