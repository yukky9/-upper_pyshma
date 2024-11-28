import React from 'react';
import Table from "../components/tables/Table";
import Nav from "../templeties/Nav/Nav";
import Line from "../components/add_img/Line";

const FirstPage = () => {
    return (
        <div className="grid grid-cols-3">
            <Nav/>
            <Line/>
            <Table/>
        </div>
);
};

export default FirstPage;