import React from 'react';
import {DataRow} from "../DataRow/DataRow";

const limit = 5;

export const TableBody = ({tableData, activePage}) => {
    const data = tableData.slice(activePage*limit-limit,activePage*limit)

    const dataList = data.map((item) => <DataRow key={item.date} data={item}/>)
    return (
        <>
            {dataList}
        </>
    );
};

