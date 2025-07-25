

export const UserHeader = () => { 
    return (
        <header className="bg-forteBlue flex p-4 rounded-normal w-[95%] m-auto mt-5 mb-5 gap-4">
            <img
            className="userImage h-[4rem] rounded-[0.75rem]"
             src="../../assets/images/Screenshot_20250521_120159_Gallery.jpg" alt="" />

            <div className="headreTextContent self-center">
                <h1 className="userName text-emerald-50 font-extrabold text-2xl">Abel Melquiades</h1> 
                <h2 className="userProfission font-belleza text-emerald-50 font-medium text-xg">FullStack Developer</h2>
            </div>
        </header>
    )
        
}