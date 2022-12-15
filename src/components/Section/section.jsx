import { SectionStyled } from "./section.style";
import { useState } from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from "react-icons/bs"

export function Section({ image,title, firstParagraph, children}) {
  // const content = children
   const [readMoreShow, setReadMoreShow] = useState(false);

   const toogleBtn = () => {
     setReadMoreShow((prevState) => !prevState);
  };    

  return (
    <SectionStyled>
      <img src={image} alt="" />
      <div className="content">
        <h2>{title}</h2>
        <p>{firstParagraph}</p>
        <div className={readMoreShow ? "cardActive" : "card"}>{children}</div>
      <button onClick={toogleBtn}>
        {readMoreShow ? <BsFillArrowUpCircleFill size={45} color={"orange"} /> : <BsFillArrowDownCircleFill size={45} color={"orange"}/>}
      </button>
      </div>
    </SectionStyled>
  );
}
