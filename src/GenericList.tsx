import { Fragment, ReactNode } from "react";

type GenericListProps<T> = {
    items: T[],
    renderItem: (item: T) => ReactNode
}

const GenericList = <T,>(props: GenericListProps<T>) => {

    return (
        <div>
            {props.items.map((item, index: number) => {
                return(
                    <Fragment key={index}>{props.renderItem(item)}</Fragment>
                )
            })}
        </div>
    )
        

}

export default GenericList;
