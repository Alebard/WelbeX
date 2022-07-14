import {FILTERS_VALUES} from "../components/FilterForm/FilterForm";

export function getData(data, columnName, condition, meaning) {
    let newData = data
    if (columnName === FILTERS_VALUES.COLUMN_NAME.TITLE) {
        if (condition === FILTERS_VALUES.CONDITION.CONTAINS) {
            newData = newData.filter((item) => item.title.toLowerCase().includes(meaning.toLowerCase()))
        }
    } else if (columnName === FILTERS_VALUES.COLUMN_NAME.COUNT) {
        if (condition === FILTERS_VALUES.CONDITION.EQUALS) {
            newData = newData.filter((item) => Number(item.count) === Number(meaning))
        } else if (condition === FILTERS_VALUES.CONDITION.MORE) {
            newData = newData.filter((item) => Number(item.count) > Number(meaning))
        } else if (condition === FILTERS_VALUES.CONDITION.LESS) {
            newData = newData.filter((item) => Number(item.count) < Number(meaning))
        }
    } else if (columnName === FILTERS_VALUES.COLUMN_NAME.DISTANCE) {
        if (condition === FILTERS_VALUES.CONDITION.EQUALS) {
            newData = newData.filter((item) => Number(item.distance) === Number(meaning))
        } else if (condition === FILTERS_VALUES.CONDITION.MORE) {
            newData = newData.filter((item) => Number(item.distance) > Number(meaning))
        } else if (condition === FILTERS_VALUES.CONDITION.LESS) {
            newData = newData.filter((item) => Number(item.distance) < Number(meaning))
        }
    }
    return newData
}


