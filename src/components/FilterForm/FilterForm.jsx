import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeColumnName, changeCondition, changeMeaning} from "../../store/slices/filterSlice";

export const FILTERS_VALUES = {
    COLUMN_NAME:{
        DEFAULT: 'Выберите колонку',
        TITLE: 'title',
        COUNT: 'count',
        DISTANCE: 'distance',
    },
    CONDITION:{
        EQUALS: 'equals',
        CONTAINS: 'contains',
        MORE: 'more',
        LESS: 'less',
    }
}

export const FilterForm = () => {
    const [columnNameValue, setColumnNameValue] = useState('')
    const [conditionValue, setConditionValue] = useState('')
    const [meaningValue, setMeaningValue] = useState('')
    const [isDisabledString, setIsDisabledString] = useState(false)
    const [isDisabledNumber, setIsDisabledNumber] = useState(false)
    const dispatch = useDispatch()

    function filterTable(e) {
        e.preventDefault()
        dispatch(changeColumnName(columnNameValue))
        dispatch(changeCondition(conditionValue))
        dispatch(changeMeaning(meaningValue))
    }

    function changeColumnNameHandler(e, setColumnNameValue){
            setColumnNameValue(e.target.value)
    }

    useEffect(()=>{
        if(columnNameValue === FILTERS_VALUES.COLUMN_NAME.TITLE){
            setIsDisabledNumber(true)
            setIsDisabledString(false)
        }
        if(columnNameValue === FILTERS_VALUES.COLUMN_NAME.DISTANCE
            || columnNameValue === FILTERS_VALUES.COLUMN_NAME.COUNT){
            setIsDisabledNumber(false)
            setIsDisabledString(true)
        }
    },[columnNameValue])

    return (
        <form onSubmit = {(e) => filterTable(e)}>
            <label>
                Колонка:
                <select value={columnNameValue} onChange={(e) => changeColumnNameHandler(e, setColumnNameValue)}>
                    <option value={''}>Выберите колонку</option>
                    <option value={FILTERS_VALUES.COLUMN_NAME.TITLE}>Название</option>
                    <option value={FILTERS_VALUES.COLUMN_NAME.COUNT}>Количество</option>
                    <option value={FILTERS_VALUES.COLUMN_NAME.DISTANCE}>Дистанция</option>
                </select>
            </label>
            <br/>
            <label>
                Условие:
                <select value={conditionValue} onChange={(e) => setConditionValue(e.target.value)}>
                    <option value={''}>Выберите условие</option>
                    <option value={FILTERS_VALUES.CONDITION.EQUALS} disabled={isDisabledNumber}>Равно</option>
                    <option value={FILTERS_VALUES.CONDITION.CONTAINS} disabled={isDisabledString}>Содержит</option>
                    <option value={FILTERS_VALUES.CONDITION.MORE} disabled={isDisabledNumber}>Больше</option>
                    <option value={FILTERS_VALUES.CONDITION.LESS} disabled={isDisabledNumber}>Меньше</option>
                </select>
            </label>
            <br/>
            <label>
                Значение:
                <input type="text"
                       value={meaningValue}
                       placeholder={'Введите значение'}
                       onChange={(e) => setMeaningValue(e.target.value)}/>
            </label>
            <br/>
            <button>Показать</button>
        </form>
    );
};

