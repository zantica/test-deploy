import React from "react";
import { sortByPrice } from "../../actions";
import { useDispatch } from 'react-redux'
import { ASCENDENTE, DESCENDENTE } from "../../const";

export const SortByPrice = () => {
    const dispatch = useDispatch()

    function onChange(e) {
        e.preventDefault()
        dispatch(sortByPrice())
    }

    return (
        <div>
            <label class='font-semibold'>Ordenar por </label>
            <select onChange={onChange}>
                <option value="">Mas relevante</option>
                <option value={DESCENDENTE}>Mayor precio</option>
                <option value={ASCENDENTE}>Menor precio</option>
            </select>
        </div>
    )
}