import React from 'react';
import Nav from "../templeties/Nav/Nav";
import Table from "../components/tables/Table";

const SecondPage = () => {
    return (
        <div className="grid grid-cols-2">
            <Nav/>
            <Table/>
        </div>
    );
};

export default SecondPage;