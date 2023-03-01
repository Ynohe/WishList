import "./Wish.css"

const Wish = ({wish, handleSetComplete, handleDelete}) => {

    const {id, productName, completed} = wish

    return(
        <div className="WishContainer">
            <div className="Get">
                {
                    completed ?(
                        <div onClick={() => handleSetComplete(id)} className="tickColor">
                            <img className="checkIcon" src='/check-icon.svg'/>
                        </div>
                    ) : (
                        <span onClick={() => handleSetComplete(id)} className="Find"></span>
                    )
                }
                <p className={"Wishes" + (completed && "line-through")}>
                    {productName}
                </p>
            </div>
            <img onClick={() => handleDelete(id)} className="closeIcon"src="/close-icon.svg" alt="close icon"/>
        </div>
    )
}

export {Wish}