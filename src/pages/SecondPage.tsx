import React from 'react';
import Nav from "../templeties/Nav/Nav";
import Line from "../components/add_img/Line";
import TableSocietyAndEvents from "../components/tables/TableSocietyAndEvents";

const SecondPage = () => {
    return (
        <div className="grid grid-cols-3">
            <Nav/>
            <Line/>
            <TableSocietyAndEvents/>
        </div>
    );
};

export default SecondPage;