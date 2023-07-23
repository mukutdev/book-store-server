import { IGenericErrorMessage } from "./genericErrorMessage";

export type IGenericResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  };
  