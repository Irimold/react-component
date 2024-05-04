export interface InputChangeParams {
    name: string
    value: any
}

export type InputChangeHandler = (params: InputChangeParams) => void