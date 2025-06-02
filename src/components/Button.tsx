import Link from "next/link"

const Button = ({classname, title, type = "Button", url}: {classname: string, title: string, type: string, url: string}) => {
    return (
        <>
        {type === "link" ? <Link href={`${url}`} className={`${classname} px-[20px] py-[16px] rounded-2xl`}>{title}</Link> : <button className={`${classname} px-[20px] py-[16px] rounded-2xl`}>{title}</button>}
        </>
    )
}

export default Button