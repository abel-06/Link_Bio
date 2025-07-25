
interface ButtonProps {
    size?: 'small' | 'large'
    color?: 'darkRoxo' | 'azulClaro' | 'claroBlue' | 'forteBlue'
    type?: 'mediaIcon'
    id: string
    children: any
}

export const Button = ({ size, color, type, id, children }: ButtonProps ) => {
   
    const buttonSize = size === 'large'
    ? 'font-belleza w-[100%] p-3 rounded-1'
    : 'p-1 rounded-xl h-[80px]' 

    const buttonColor = color === 'darkRoxo'
    ? 'bg-darkRoxo text-white font-extrabold text-4x1'
    : 'bg-azulClaro text-claroBlue'

    const buttonType = type === 'mediaIcon'
    ? 'flex justify-center items-center text-5x1 text-center'
    : ''

    return (
        <button className={`${buttonSize} ${buttonColor} ${buttonType}`}
            id={id}> 
            {children}
            
        </button>
    )
}