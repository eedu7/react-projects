import AirbnbLogo from "/icons/airbnb/airbnb.svg";

export const Navbar = () => {
    return (
        <nav>
            <img src={AirbnbLogo} alt="Airbnb logo" className="nav--logo"/>
        </nav>
    );
}