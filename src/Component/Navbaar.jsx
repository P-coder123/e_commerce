import { Link } from "react-router-dom"

const Navbaar = ()=>{
    return(

        <>
        <header>
            <div className="nav-bar">
                <Link  to={'/'}  className="Brand">E-cart</Link>

                <div className="searchbar">
                    <input type="text"placeholder="search product" className="search-bar-input"/>
                </div>
                <Link to={'/cart'} className="cart">Cart</Link>
                <Link to={'/admin'} className="cart">Admin</Link>

        </div>

        <div className="nav-bar-wrapper">
                <div className="items">Filter by {"->"}</div>
                <div className="items">No fillter </div>
                <div className="items">Mobiles</div>
                <div className="items">laptopes</div>
                <div className="items">Tablestes</div>
                <div className="items">{">="}29999</div>
                <div className="items">{">="}49999</div>
                <div className="items">{">="}69999</div>
                <div className="items">{">="}89999</div>
            </div>
        </header>

        </>
    )

}

export default Navbaar