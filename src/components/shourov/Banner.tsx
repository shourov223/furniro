
const Banner = () => {
    return (
        <section className="bg-[url('../assets/images/home-banner.jpg')] bg-cover bg-center py-[153px]">
            <div className="container">
                <div className="pt-[62px] pr-[43px] pb-[37px] pl-[39px] bg-[#FFF3E3] rounded-[10px] max-w-[643px] ml-auto">
                    <p className="text-black text-base tracking-[3px] font-semibold pb-1.5">New Arrival</p>
                    <h1 className="text-[#B88E2F] text-[52px] leading-[65px] font-semibold pb-[17px]">Discover Our New Collection</h1>
                    <p className="text-[18px] text-[#333333] pb-[46px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className="py-[25px] px-[72px] bg-[var(--color-primary)] text-white font-semibold cursor-pointer">BUY Now</button>
                </div>
            </div>
        </section>
    )
}

export default Banner