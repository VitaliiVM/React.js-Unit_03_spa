import {Link} from "react-router-dom";

function Header(props) {
    let data = props.headerData;
    const listItem = data.map(item => <li key={item.link}><Link to={item.link}>{item.text}</Link></li>);
    return (
        <>
            <nav>
                <ul className="navigation">
                    {listItem}
                </ul>
            </nav>
        </>
    );
}

export default Header;