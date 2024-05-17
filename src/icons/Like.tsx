import { FC } from "react";

interface Props {
  className?: string;
}

export const Like: FC<Props> = ({ className }) => {
  return (
    <svg
      width="32"
      height="29"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z" stroke="#616161" stroke-width="3" stroke-linejoin="round" />
    </svg>
  )
}

