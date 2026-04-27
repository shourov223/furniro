
interface propsType {
    inputName: string,
    id: string,
    placeholder: string
}
export const FormInput = ({inputName, id, placeholder}: propsType) => {
    return (

        <div className="flex flex-col">
            <label className="font-medium text-[16px] text-[#000000]" htmlFor={id}>{inputName}</label>
            <input className="placeholder:text-[#9F9F9F] placeholder:text-[16px] border border-[#9F9F9F] py-[25px] pl-[31px]  rounded-[10px]" type="text" name="" id={id} placeholder={placeholder} />
        </div>

    )
}
