"use client";

// import Image from "next/image";

const HeroAb = () => {
    return (
        <>
            <section
                className="relative bg-cover bg-center bg-no-repeat min-h-[380px]"
                style={{ backgroundImage: "url('/images/mainhero.jpg')" }}
            >
                {/* blue/black tint to “lower opacity” of the bg image */}
                <div className="absolute inset-0 bg-[#17185d]/60" />

                <div className="relative pt-55 px-5 md:px-20   ">
                    <div className="max-w-7xl mx-auto ">
                        <h1 className="text-4xl md:text-5xl font-bold text-amber-400">About Us</h1>
                        <p className="text-white mt-3 max-w-xl">
                            Practical renewable energy technology that reduces costs <br /> and helps the environment
                        </p>
                    </div>
                </div>
            </section>
            {/* <section
                className="relative bg-cover bg-center bg-no-repeat min-h-[380px]"
                style={{ backgroundImage: "url('/images/mainhero.jpg')" }}
            >
                <div className="absolute inset-0 bg-blue/20" />
              
               

            </section> */}
        </>

    )
}

export default HeroAb