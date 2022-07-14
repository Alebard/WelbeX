import React from 'react';
import classes from "./PaginationItem.module.css"

export const PaginationItem = ({page, activePage, setActivePage}) => {
    return (
        <p className={`${page === activePage && classes.active} ${classes.page}`}
           onClick={() => setActivePage(page)}>
            {page}
        </p>
    );
};

