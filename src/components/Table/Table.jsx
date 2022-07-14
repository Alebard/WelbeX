import React, {useState} from 'react';
import {TableBody} from "../TableBody/TableBody";
import {useSelector} from "react-redux";
import {Pagination} from "../Pagination/Pagination";
import {getData} from "../../helpers/getData";

export const Table = () => {
    const [activePage, setActivePage] = useState(1)
    const {data} = useSelector(state => state.data)
    const {columnName, condition, meaning} = useSelector(state => state.filters)
    const tableData = getData(data, columnName, condition, meaning)

    return (
        <>
            <table border={1}>
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Расстояние</th>
                </tr>
                </thead>
                <tbody>
                <TableBody tableData={tableData} activePage={activePage}/>
                </tbody>
            </table>
            <Pagination activePage={activePage} setActivePage={setActivePage} data={tableData}/>
        </>
    );
};

