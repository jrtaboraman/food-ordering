import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center">
        <SectionHeaders subHeader={"our story"} mainHeader={"About us"} />
        <div className="flex flex-col max-w-md gap-4 mx-auto text-gray-500 ">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            reiciendis animi consectetur nihil tenetur delectus quis minus
            laudantium ratione atque?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            reiciendis animi consectetur nihil tenetur delectus quis minus
            laudantium ratione atque?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            reiciendis animi consectetur nihil tenetur delectus quis minus
            laudantium ratione atque?
          </p>
        </div>
      </section>
      <section className="my-8 text-center">
        <SectionHeaders
          subHeader={"Don't Hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl text-gray-500 underline"
            href="tel:+639123456789"
          >
            +639123456789
          </a>
        </div>
      </section>
    </>
  );
}
