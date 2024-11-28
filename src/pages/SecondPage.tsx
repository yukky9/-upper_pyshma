import React from 'react';
import Nav from "../templeties/Nav/Nav";
import Line from "../components/add_img/Line";
import TableEvents from "../components/tables/TableEvents";

const SecondPage = () => {
    return (
        <div className="grid grid-cols-3">
            <Nav/>
            <Line/>
            <TableEvents/>
        </div>
    );
};

export default SecondPage;