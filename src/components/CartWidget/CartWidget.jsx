import logo from "../../assets/cartshopping.png"

function CartWidget() {
    return (
        <a className="nav-link" href="#">
            <img src={logo}/>
            <span>0</span>
        </a>
    )
}

export default CartWidget