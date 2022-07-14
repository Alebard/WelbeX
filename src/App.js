import React, {useEffect} from 'react';
import {Table} from "./components/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./action-creator/actionCreator";
import {FilterForm} from "./components/FilterForm/FilterForm";

function App() {
    const dispatch = useDispatch()
    const {data, error} = useSelector(state => state.data)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div>
            {error && <p>{error}</p> }
            {data && <Table/>}
            <FilterForm />
        </div>
    );
}

export default App;
