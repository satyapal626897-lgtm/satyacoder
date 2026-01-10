import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Layout from './Layout';
import Contact from './pages/Contact';

const Routing = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Layout/>} >


                    <Route index element={<Home/>} />

                    <Route path='Home' element={<Home />} />
                    <Route path='About' element={<About/>} />
                    <Route path='Service' element={<Service/>}/>
                    <Route path='Contact'element={<Contact/>}/>
                    
                    <Route path='*' element={<h1>This is not Found</h1>}/>

                </Route>
            </Routes>
        </>
    )
}

export default Routing;