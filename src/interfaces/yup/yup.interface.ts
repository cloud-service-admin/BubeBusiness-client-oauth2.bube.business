/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from 'yup';

export type ConditionalSchema<T> = T extends string
  ? yup.StringSchema
  : T extends number
  ? yup.NumberSchema
  : T extends boolean
  ? yup.BooleanSchema
  : T extends Record<any, any>
  ? yup.AnyObjectSchema
  : T extends Array<any>
  ? yup.ArraySchema<any, any>
  : yup.AnySchema;

export type Shape<Fields> = {
  [Key in keyof Fields]: ConditionalSchema<Fields[Key]>;
};

export const requiredUploadImages = yup.object({
  storageService: yup.string(),
  bucket: yup.string(),
  keyFolder: yup.string(),
  imagePrimary: yup.number(),
  list: yup.object().shape({
    isPublic: yup.boolean(),
    storageService: yup.string(),
    key: yup.string(),
    bucket: yup.string(),
    url: yup.string(),
    type: yup.string(),
    imagePrimary: yup.number(),
  }),
});
