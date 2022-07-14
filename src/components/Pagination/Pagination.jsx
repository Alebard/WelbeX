import React from 'react';
import {PaginationItem} from "../PaginationItem/PaginationItem";

function getPagesArray(n) {
    const arr = []
    for (let i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr
}

export const Pagination = ({activePage, setActivePage, data}) => {
    const pagesCount = Math.ceil(data.length / 5)
    const pages = getPagesArray(pagesCount)

    return (
        <div>
            {pages.map((page) => <PaginationItem
                key={page}
                page={page}
                activePage={activePage}
                setActivePage={setActivePage}  /> )}
        </div>
    );
};

