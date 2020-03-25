import { ReactElement } from "react"

type Props = {
    name?: string
}

export const OperatorCard = ({name}: Props): ReactElement => <div style={{ padding: "20px" }}>{name} test</div>
