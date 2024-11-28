import React from 'react';
import Nav from "../templeties/Nav/Nav";
import Line from "../components/add_img/Line";
import TableEvents from "../components/tables/TableEvents";
import Header from "../templeties/header/Header";

const SecondPage = () => {
    return (
        <div>
            <Header/>
        <div className="grid grid-cols-3">
            <Nav/>
            <Line/>
            <TableEvents/>
        </div>
        </div>
    );
};

export default SecondPage;