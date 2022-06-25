import { ReactNode } from "react";
declare type TypographyVariants = "heading" | "label" | "bookTitle" | "bookItemTitle" | "paragraph" | "underline" | "default";
interface Props {
    variant: TypographyVariants;
    children: ReactNode;
    color: string;
}
declare const Typography: ({ variant, color, children }: Props) => JSX.Element;
export default Typography;
