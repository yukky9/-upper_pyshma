import React from 'react';
import Table from "../components/tables/Table";
import Nav from "../templeties/Nav/Nav";
import Line from "../components/add_img/Line";
import Header from "../templeties/header/Header";

const FirstPage = () => {
    return (
        <div>
            <Header/>
        <div className="grid grid-cols-3">
            <Nav/>
            <Line/>
            <Table/>
        </div>
        </div>
);
};

export default FirstPage;