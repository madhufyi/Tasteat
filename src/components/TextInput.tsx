import React from 'react'

const TextInput = ({ placeholder, onChange, type, value, name, height, noBg, textWhite }: any) => {
    return (
        <input
            name={name}
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className={`outline-none border border-[#C4C4C4] ${height ? height : 'h-[68px]'} px-5 w-full lg:text-xl text-lg font-joseRegular placeholder:lg:text-xl placeholder:text-lg ${noBg ? 'bg-transparent' : ''} ${textWhite ? 'text-white' : ''}`}
        />
    )
}

export default TextInput