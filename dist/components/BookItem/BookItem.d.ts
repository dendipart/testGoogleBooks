import { ItemBook } from "~/declarations/booksApi";
interface Props {
    data: ItemBook;
}
declare const BookItem: ({ data }: Props) => JSX.Element;
export default BookItem;
