import React from 'react';

export const DataRow = ({data}) => {
    return (
        <tr>
            <td>{data.date}</td>
            <td>{data.title}</td>
            <td>{data.count}</td>
            <td>{data.distance}</td>
        </tr>
    );
};

