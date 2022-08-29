import { Props } from "../App";


export function Wrapper ({ children }: Props) {
    return (
        <div className="wrapper">{children}</div>
    )
}