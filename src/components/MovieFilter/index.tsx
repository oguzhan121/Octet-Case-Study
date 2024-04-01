import { useState } from "react";
import FilterItem from "./filterItem";

export default function MovieFilter() {
  const [activeFilterItem, setActiveFilterItem] = useState<"order" | "filter" | null>(null);

  const orderList = [
    {
      id: 1,
      name: "Film Adı",
    },
    {
      id: 2,
      name: "Yayın Yılı",
    },
    {
      id: 3,
      name: "IMDB Puanı",
    },
  ];

  const filterList = [
    {
      id: 4,
      name: "Favoriler",
    },
  ];

  return (
    <div className="movies-filter">
      <div className="container">
        <div className="movies-inner">
          <div className="page-title">
            <h1>Movies</h1>
          </div>
          <ul className="filter-nav">
            <FilterItem
              list={orderList}
              onClick={() => {
                if (activeFilterItem === "order") {
                  setActiveFilterItem(null);
                  return;
                }
                setActiveFilterItem("order");
              }}
              isActive={activeFilterItem === "order"}
              title="Sırala"
              
            />
            <FilterItem
              list={filterList}
              onClick={() => {
                if (activeFilterItem === "filter") {
                  setActiveFilterItem(null);
                  return;
                }
                setActiveFilterItem("filter");
              }}
              isActive={activeFilterItem === "filter"}
              title="Filtrele"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
