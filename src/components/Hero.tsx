const arrowRightSrc = "http://localhost:3845/assets/eaa9bb15430dacf77efd483e0cafe4a0713c873c.svg";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-end min-h-screen pb-20 pt-[150px] px-20 w-full">
      <div className="flex items-center justify-between w-full max-w-[1352px] mx-auto">
        <h1 className="text-[64px] font-medium leading-[1.3] text-[#1d1d20]">
          Dovedeme vás <br /> na vrchol
        </h1>

        <div className="flex flex-col gap-8 w-[435px]">
          <p className="text-[16px] font-medium leading-[1.45] text-[#3f3f46]">
            Jsme Sherpas, průvodci digitálním designem a marketingem. Tvoříme atraktivní značky, špičkové weby, aplikace a strategie, které fungují.
          </p>
          <button className="flex items-center justify-center h-[50px] px-5 bg-[#fb2942] rounded-[4px] text-[#fcfcfc] text-[16px] font-medium cursor-pointer hover:bg-[#e02038] transition-colors w-fit">
            Dejte nám signál
          </button>
        </div>
      </div>
    </section>
  );
}
