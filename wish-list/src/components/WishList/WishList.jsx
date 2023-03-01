import { WishFilters } from "../WishFilters/WishFilters"
import { Wish } from "../Wish/Wish"
import "./WishList.css"

const WishList = ({wish, handleSetComplete, handleDelete}) => {
    return (
        <div className="child">
            {wish.map(wish =>{
                return(
                    <Wish 
                    key={wish.id} 
                    wish={wish}
                    handleDelete={handleDelete}
                    handleSetComplete={handleSetComplete} 
                    />
                )
            })}
            <WishFilters/>
        </div>
    )
}

export {WishList}