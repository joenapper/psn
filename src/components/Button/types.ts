import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<
  {
    id: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;
