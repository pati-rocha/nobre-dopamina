import { HiperlinkStyled } from "./social.style";

export function Social({children, url}){
    return(
       <HiperlinkStyled href={url} rel={"noopener noreferrer"} target={"_blank"}>
        {children}
       </HiperlinkStyled>      
    )
}