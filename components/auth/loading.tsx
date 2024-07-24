import Image from "next/image";

export const Loading = () => {
    return <div className="flex flex-col h-full w-full justify-center items-center">
        <Image 
        src="/logo.svg"
        alt="logo" 
        width={120}
        height={120}
        className="animate-ping duration-1000"
        />
    </div>
}