import { Social } from "../Social/social";
import { FooterStyled } from "./footer.style";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail} from "react-icons/md"

export function Footer() {
  return (
    <FooterStyled>
      <p>Desenvolvido por Pati Rocha - Todos os direitos reservados</p>
      <Social url={"https://www.instagram.com/_patiro/"}>
        <FaInstagram size={40}  />
      </Social>
      <Social url={"https://www.linkedin.com/in/patriciagrocha/"}>
        <FaLinkedinIn size={40}  />
      </Social>
      <Social url={"mailto:patirocha.dev@gmail.com"}>
        <MdOutlineEmail size={40}/>
      </Social>
    </FooterStyled>
  );
}
