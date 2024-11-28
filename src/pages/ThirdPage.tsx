import React from 'react';
import Nav from "../templeties/Nav/Nav";
import Table from "../components/tables/Table";
import Line from "../components/add_img/Line";

const ThirdPage = () => {
    return (
        <div className="grid grid-cols-3">
            <Nav/>
            <Line/>
            <Table/>
        </div>
    );
};

export default ThirdPage;