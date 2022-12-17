import { Link } from "react-router-dom";
import { NavStyled } from "./menu.style";
import imgLogo from "../../assets/dopamina.png";

export function Menu() {
 
  return (
    <NavStyled>
      <div className="divLogo">
       <img src={imgLogo} alt="logo nobre dopamina"/>
        <Link className="title" to={"/"}>     
         Nobre Dopamina       
        </Link>
      </div>
      <ul>
        <li>
          <Link className="menu" to={"/"}>
        Home
          </Link>
        </li>
        <li>
          <Link className="menu" to={"/sobre"}>
          Sobre o TDAH
          </Link>
        </li>
        <li>
          <Link className="menu" to={"/comunidade"}>
            Comunidade
          </Link>
        </li>
        <li>
          <Link className="menu" to={"/login"}>
            Login
          </Link>
        </li>       
      </ul>
    </NavStyled>
  );
}
