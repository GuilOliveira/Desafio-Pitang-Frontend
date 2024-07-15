export interface ErrorResponseModel {
    HttpStatus: number,
    Messages: string[],
    Data: object | null
}
