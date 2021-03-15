import React,{useContext} from 'react';
import Cards from '../../Component/Cards';
import Cart from '../../Component/ModalCart';
import {DataContext} from '../../Store' 

const Home = () => {
    const {openModal} = useContext(DataContext);

    return (
        <div className="home">
            <Cards />
            <Cart />
        </div>
    )
}

export default Home;