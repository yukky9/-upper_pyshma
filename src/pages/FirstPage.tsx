import React from 'react';
import Table from "../components/tables/Table";
import Nav from "../templeties/Nav/Nav";

const FirstPage = () => {
    return (
        <div className="grid grid-cols-2">
            <Nav/>
            <Table/>
        </div>
    );
};

export default FirstPage;