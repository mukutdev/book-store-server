import mongoose from "mongoose";
import { IGenericResponse } from "../interfaces/common";
import { IGenericErrorMessage } from "../interfaces/genericErrorMessage";

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (ele: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: ele?.path,
        message: ele?.message,
      };
    }
  );

  const statusCode = 400;
  return {
    statusCode,
    message: "Validation error",
    errorMessages: errors,
  };
};

export default handleValidationError;
