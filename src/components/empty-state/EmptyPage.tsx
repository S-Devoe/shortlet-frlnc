import WaitlistCharacterSvg from "../characters/WaitlistCharacterSvg";

const EmptyPage = () => {
  return (
    <section className="flex items-center flex-col">
      <WaitlistCharacterSvg className="mt-[5.95rem]" />
      <h2 className="text-primaryLight leading-[2.625rem] font-[600] text-[2rem] font-fraunces mt-[2.5rem]">
        Nothing here yet!
      </h2>
      <p className="text-gray1 mt-[0.5rem] leading-[162.5%] font-[normal] text-[1rem] text-center max-w-[18rem] md:max-w-[100%] ">
        You have not saved any places in your wishlist. You can add some place
        to your wish list from search home.
      </p>
      <button className="w-full h-[3rem] bg-orange rounded-[0.5rem] text-white mt-[2rem] max-w-[20.3rem] ">
        Start a search now
      </button>
    </section>
  );
};

export default EmptyPage;
