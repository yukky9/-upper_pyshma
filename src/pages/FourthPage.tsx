import React from 'react';
import Header from "../templeties/header/Header";
import Nav from "../templeties/Nav/Nav";
import Line from "../components/add_img/Line";
import TableRequest from "../components/tables/TableRequest";

const FourthPage = () => {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-3">
                <Nav/>
                <Line/>
                <TableRequest/>
            </div>
        </div>
    );
};

export default FourthPage;