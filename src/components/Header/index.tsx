
import { memo, useEffect } from "react"
import { useSelector } from "react-redux";

function Header() {
    const favorites = useSelector((state: any) => state.favorites);
    return (
        <header>
            <div className="container">
                <div className="favorites">
                    <span>Favoriler</span>
                    <span className="favorite-count">{favorites.length}</span>
                </div>
            </div>
        </header>
    )
}

export default memo(Header);