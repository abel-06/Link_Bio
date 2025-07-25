import { ButtonGroup } from "../molecula/buttonGroup/buttonGroup"
import { ButtonPortifolio } from "../molecula/buttonPortifolio/buttonPortifolio"
import { LastProject } from "../molecula/LastProject/lastProject"


export const ButtonSection = () => {
    return (

        <section className="buttonsSection w-[98%] m-auto">
            
            <ButtonPortifolio />

            <div className="middlePageButtons flex pt-9 gap-10">
                <ButtonGroup />
                <LastProject /> 
            </div>
        </section>
    )
}