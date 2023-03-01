import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./WishFilters.components"
import "./WishFilters.css";

const WishFilters = () => {
    return(
        <FiltersContainer>
            <ItemsLeft/>
            <FilterButtonContainer>
                <FilterButton action={() =>{}} active ="All" filter='All'/>
                <FilterButton action={() =>{}} active ="All" filter='Active'/>
                <FilterButton action={() =>{}} active ="All" filter='Completed'/>
            </FilterButtonContainer>

            <button className="ClearButton">
                Clear
            </button>

        </FiltersContainer>
    )
}

export {WishFilters}