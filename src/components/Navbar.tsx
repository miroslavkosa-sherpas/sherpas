const logoSrc = "/sherpas-logo.svg";
const menuIconSrc = "http://localhost:3845/assets/eaf62d5d01269565a7488f1e7f82d255ef2e83fa.svg";
const signalIconSrc = "http://localhost:3845/assets/e8e5007ef6991ce51a0a876aad76125d64d84fc9.svg";
const langArrowSrc = "http://localhost:3845/assets/3f86a490bc84a0f66b4124168ad47166a5360215.svg";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#chevron-clip)">
        <path
          d="M1.0166 3.87088L1.78748 3.10838L6.0166 7.3375L10.2459 3.10838L11.0166 3.87088L6.0166 8.87088L1.0166 3.87088Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="chevron-clip">
          <rect width="12" height="12" fill="white" transform="translate(12) rotate(90)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MenuItem({ label, hasChevron = false }: { label: string; hasChevron?: boolean }) {
  return (
    <button className="group flex items-center gap-2 h-9 px-6 rounded-[4px] text-[14px] font-medium whitespace-nowrap cursor-pointer text-[#27272a] hover:text-[#fb2942] active:text-[#fb2942] active:bg-[#f4f4f5] transition-colors">
      {label}
      {hasChevron && <ChevronDown className="text-[#7a7a83] group-hover:text-[#fb2942] group-active:text-[#fb2942] transition-colors shrink-0" />}
    </button>
  );
}

export default function Navbar() {
  return (
    <nav className="absolute top-[40px] left-[80px] right-[80px] h-[50px] flex items-center justify-between z-50">
      {/* Logo */}
      <img src={logoSrc} alt="Sherpas" className="h-[46px] w-[146px]" />

      {/* Floating center menu */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 h-[50px] px-10 rounded-[8px] bg-[rgba(252,252,252,0.9)] backdrop-blur-[6px]">
        <MenuItem label="Služby" hasChevron />
        <MenuItem label="Reference" />
        <MenuItem label="O nás" />
        <MenuItem label="Kontakt" />

        <button className="group flex items-center justify-center h-9 px-6 rounded-[4px] cursor-pointer active:bg-[#f4f4f5] transition-colors">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.75" x2="16" y2="0.75" stroke="currentColor" strokeWidth="1.5" className="transition-colors group-hover:stroke-[#fb2942] group-active:stroke-[#fb2942]"/>
            <line y1="5.75" x2="16" y2="5.75" stroke="currentColor" strokeWidth="1.5" className="transition-colors group-hover:stroke-[#fb2942] group-active:stroke-[#fb2942]"/>
            <line y1="10.75" x2="16" y2="10.75" stroke="currentColor" strokeWidth="1.5" className="transition-colors group-hover:stroke-[#fb2942] group-active:stroke-[#fb2942]"/>
          </svg>
        </button>

        <button className="group flex items-center gap-1 h-9 px-6 rounded-[4px] cursor-pointer active:bg-[#f4f4f5] transition-colors">
          <span className="text-[#27272a] text-[14px] font-medium group-hover:text-[#fb2942] group-active:text-[#fb2942] transition-colors">CZ</span>
          <ChevronDown className="text-[#7a7a83] group-hover:text-[#fb2942] group-active:text-[#fb2942] shrink-0 size-[11px] transition-colors" />
        </button>
      </div>

      {/* Signal CTA — expands left on hover */}
      <button className="signal-btn group absolute right-0 top-0 flex flex-row-reverse items-center h-[50px] overflow-hidden rounded-[8px] bg-[#fb2942] cursor-pointer">
        {/* Icon — always occupies a fixed 50px square on the right */}
        <span className="flex items-center justify-center size-[50px] shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.1 20.25C4.15 19.3333 3.39583 18.2542 2.8375 17.0125C2.27917 15.7708 2 14.4333 2 13C2 11.6167 2.2625 10.3167 2.7875 9.1C3.3125 7.88333 4.025 6.825 4.925 5.925C5.825 5.025 6.88333 4.3125 8.1 3.7875C9.31667 3.2625 10.6167 3 12 3C13.3833 3 14.6833 3.2625 15.9 3.7875C17.1167 4.3125 18.175 5.025 19.075 5.925C19.975 6.825 20.6875 7.88333 21.2125 9.1C21.7375 10.3167 22 11.6167 22 13C22 14.4333 21.7208 15.7723 21.1625 17.0168C20.6042 18.2611 19.85 19.3388 18.9 20.25L17.7168 19.0667C18.5278 18.3001 19.1666 17.3987 19.6333 16.3625C20.0999 15.3263 20.3333 14.2055 20.3333 13C20.3333 10.6778 19.5249 8.70842 17.9083 7.09175C16.2916 5.47508 14.3222 4.66675 12 4.66675C9.67783 4.66675 7.70842 5.47508 6.09175 7.09175C4.47508 8.70842 3.66675 10.6778 3.66675 13C3.66675 14.2055 3.90008 15.3249 4.36675 16.3582C4.83342 17.3916 5.47508 18.2916 6.29175 19.0583L5.1 20.25ZM7.925 17.425C7.34167 16.875 6.875 16.2208 6.525 15.4625C6.175 14.7042 6 13.8833 6 13C6 11.3333 6.58333 9.91667 7.75 8.75C8.91667 7.58333 10.3333 7 12 7C13.6667 7 15.0833 7.58333 16.25 8.75C17.4167 9.91667 18 11.3333 18 13C18 13.8833 17.825 14.7056 17.475 15.4668C17.125 16.2278 16.6583 16.8805 16.075 17.425L14.8833 16.2332C15.3333 15.8277 15.6874 15.35 15.9458 14.8C16.2041 14.25 16.3333 13.65 16.3333 13C16.3333 11.8 15.9111 10.7778 15.0668 9.93325C14.2223 9.08892 13.2 8.66675 12 8.66675C10.8 8.66675 9.77775 9.08892 8.93325 9.93325C8.08892 10.7778 7.66675 11.8 7.66675 13C7.66675 13.6555 7.79592 14.2569 8.05425 14.8043C8.31258 15.3514 8.66675 15.8277 9.11675 16.2332L7.925 17.425ZM12 15C11.45 15 10.9792 14.8042 10.5875 14.4125C10.1958 14.0208 10 13.55 10 13C10 12.45 10.1958 11.9792 10.5875 11.5875C10.9792 11.1958 11.45 11 12 11C12.55 11 13.0208 11.1958 13.4125 11.5875C13.8042 11.9792 14 12.45 14 13C14 13.55 13.8042 14.0208 13.4125 14.4125C13.0208 14.8042 12.55 15 12 15Z" fill="white"/>
          </svg>
        </span>
        {/* Text — hidden behind overflow in collapsed state */}
        <span className="shrink-0 pl-5 pr-2 text-[#fcfcfc] text-[16px] font-medium whitespace-nowrap">
          Dejte nám signál
        </span>
      </button>
    </nav>
  );
}
