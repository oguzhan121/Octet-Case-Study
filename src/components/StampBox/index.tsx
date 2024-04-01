import React from 'react'
import { MoviesEntity } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import cc from "classcat";
import { addOrRemoveFavorite } from '../../actions/favorites';


const StampBox = ({data}:{data:MoviesEntity}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: any) => state.favorites);
    return (
    <div className="stamp-box">
        {data.isTvSeries && <div className="tv-series">TV SERIES</div>}
        <div
            className={cc(["add-favorite", { active: favorites.includes(data.id) }])}
            onClick={() => dispatch(addOrRemoveFavorite(favorites, data.id))}
        >
            <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.17157 1.48283C2.73367 -0.0381606 5.26633 -0.0381606 6.82842 1.48283L7.99999 2.62357L9.17157 1.48283C10.7337 -0.0381606 13.2663 -0.0381606 14.8284 1.48283C16.3905 3.00382 16.3905 5.46983 14.8284 6.99082L7.99999 13.6395L1.17157 6.99082C-0.390524 5.46983 -0.390524 3.00382 1.17157 1.48283Z"
                fill="#D1D5DB"
            />
            </svg>
        </div>
        </div>
    )
}

export default StampBox;