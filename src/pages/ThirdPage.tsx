import React from 'react';
import Nav from "../templeties/Nav/Nav";
import Line from "../components/add_img/Line";
import TableSociety from "../components/tables/TableSociety";
import Header from "../templeties/header/Header";

const ThirdPage = () => {
    return (
        <div>
            <Header/>
        <div className="grid grid-cols-3">
            <Nav/>
            <Line/>
            <TableSociety/>
        </div>
        </div>
    );
};

export default ThirdPage;