import React from 'react'

const Button = ({ label, onClick, variant, fullWidth }: any) => {
    return (
        <React.Fragment>
            {
                variant === 'contained' && (
                    <button onClick={onClick}
                        className={`bg-dimYellow lg:h-[68px] h-[57px] ${fullWidth ? 'w-full' : 'w-[232px]'} lg:text-xl text-lg font-joseRegular text-primary`}>{label}</button>
                )
            }
            {
                variant === 'outlined' && (
                    <button
                        onClick={onClick}
                        className={`bg-none border-2 border-dimYellow lg:h-[68px] h-[57px] ${fullWidth ? 'w-full' : 'w-[232px]'} lg:text-xl text-lg font-joseRegular text-white`}>{label}</button>
                )
            }
        </React.Fragment>
    )
}



export default Button