
import Image from "next/image"







export default function FirstPage() {

    return (
        <>
            <div className="flex justify-between">
                <div className="my-[15rem]">

                <div className="w-[10rem] h-[50px] my-48">
                    <img className="" src="/medal.png"/>
                </div>
                <h1 className=" font-bold ">Best Quality</h1>
                <p>Medicine in 2023</p>
                </div>
                <img className="rounded-md" src="https://media.istockphoto.com/id/1217755212/vector/pharmacist.jpg?s=612x612&w=0&k=20&c=neZJvi_cn8LGSGATA7gYmMCT8g-c8wTIR1LApIK5vHk="/>
            </div>
        </>
    )
}