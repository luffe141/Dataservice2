import { NavLink } from "react-router-dom";
import style from "./navbar.module.css"

const Navbar = ()=>{
    return(
        <nav className={style.navbar}>
            <menu>
                <li><NavLink to="/">Go home</NavLink></li>
                <li><NavLink to="/about">Om os</NavLink></li>
                <li><NavLink to="contact">Kontakt</NavLink></li>
                <li>
                    <span>JSONPlaceholder</span>
                    <menu className={style.subnavbar}>
                    <li><NavLink to="/photos">Photos</NavLink></li>
                    <li><NavLink to="/todos">Todos</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/post">Post</NavLink></li>
                    <li><NavLink to="/postadmin">Post Admin</NavLink></li>
                    </menu>
                </li>
                <li>
                    <span>SWAPI</span>
                    <menu className={style.subnavbar}>
                    <li><NavLink to="/starships">Starships</NavLink></li>
                    </menu>
                </li>
                <li>
                    <span>news</span>
                    <menu className={style.subnavbar} >
                    <li><NavLink to="/neweverything">News - everything</NavLink></li>
                    </menu>
                </li>
                <li>
                    <span>openwather</span>
                    <menu className={style.subnavbar} >
                    <li><NavLink to="/pollution">polution</NavLink></li>
                    </menu>
                </li>
                <li>
                <span>Riot Games Api</span>
                    <menu className={style.subnavbar} >
                    <li><NavLink to="/riotgames">Champion Mastery</NavLink></li>
                    </menu>
                </li>
                <li>
                <span>Airtable</span>
                    <menu className={style.subnavbar} >
                    <li><NavLink to="/airtable">ShoppingList</NavLink></li>
                    </menu>
                </li>

            </menu>
            
        </nav>
    );
};

export default Navbar;