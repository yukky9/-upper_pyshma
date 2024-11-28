import React from 'react';
import Nav from "../templeties/Nav/Nav";
import Line from "../components/add_img/Line";
import TableSociety from "../components/tables/TableSociety";

const ThirdPage = () => {
    return (
        <div className="grid grid-cols-3">
            <Nav/>
            <Line/>
            <TableSociety/>
        </div>
    );
};

export default ThirdPage;