import imageText from "../../assets/images/UltimoProjeto.png";

export const LastProject = () => {

    const textConfig = "font-bold font-belleza text-lightBlue flex center justify-center text-xl"

    return (
        <div className="lastProject w-[40%] bg-forteBlue rounded-xl">
            <h3 className={`textTop ${textConfig}`}>
                Último
            </h3>

            <a href="https://github.com/abel-06/UltimoProjeto" target="_blank">
                <img 
                    className="projectImage rounded-xl w-[90%] flex center justify-center m-auto"
                    src={imageText} alt="Imagem do último projeto"/>
            </a>

            <h3 className={`textBottom ${textConfig}`}>
                Projeto
            </h3>
        </div>
    )
}