import { useParams } from "react-router-dom";
import AttractionItemComponent from "../components/AttractionItemComponent";

export default function AttractionItem() {
    let params = useParams()
    console.log(params)
    return (
        <>
            <AttractionItemComponent id={params.ItemId}></AttractionItemComponent>
        </>
    );
}
