import Image from "next/image";

export const HeroSection = () => {
    return (
        <section id="home">
            <div className="my-10 flex flex-col items-center justify-center text-center md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/PedroLucas.jpg"
                        alt="Pedro Lucas"
                        height={325}
                        width={400}
                        className="rounded-full py-8 shadow-2xl"
                        />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="mt-6 text-center text-4xl font-bold md:mt-0 md:text-7xl">
                        Olá, me chamo Pedro Lucas
                    </h1>
                    <p className="mb-6 mt-4 text-lg md:text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        similique sequi. nisi, molestias corrupti nihil aperiam
                        vitae ipsum reprehenderit provident iste. Excepturi
                        minima enim reprehenderit aliquam.
                        <span className="font-semibold text-teal-600">
                            {" "}
                            Tempora{" "}
                        </span>
                        no{" "}
                        <span className="font-semibold text-teal-600">
                            adipisci
                        </span>
                        . Natus officia aliquid.
                    </p>
                    
                </div>
            </div>
        </section>
    );
};
