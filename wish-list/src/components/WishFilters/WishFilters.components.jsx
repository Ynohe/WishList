import "./WishFilters.css"

const FiltersContainer = ({children}) => {
    return(
        <div className="filterContainer">
            {children}
        </div>
    )
}

const ItemsLeft =({total = 0}) => {
    return(
        <p className="Left">
            {total} wishes left
        </p>
    )
}

const FilterButtonContainer = ({children}) => {
    return(
        <div className="FilterButtonContainer">
            {children}
        </div>
    )
}

const FilterButton = ({action, active, filter}) => {
    return(
        <button className={`buttonFilter` + (active.toLowerCase().includes(filter.toLowerCase()) ? `color1` : `color2`)
        }>
            {filter}
        </button>
    )
}

export {FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton}
