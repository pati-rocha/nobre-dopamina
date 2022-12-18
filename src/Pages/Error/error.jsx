import imgError from "../../assets/error.jpg"
import { GoToTop } from "../../components/GoToTop/goToTop"
import { MainErrorStyled } from "./error.style"

export function Error(){
    return(
        <>
        <GoToTop />
        <MainErrorStyled>
        <h2>PAGE NOT FOUND!</h2>
        <p><i>Esta página não existe!</i></p>
        <img src={imgError} alt="" />
        </MainErrorStyled>
        </>
    )
}