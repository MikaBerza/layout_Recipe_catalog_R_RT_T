import { ChangeEvent } from 'react';

export type TheadDataDataType = {
  id: string;
  tooltip: string;
  patch: string;
};

export type CatalogDataType = {
  id: string;
  paint: string;
  date: string;
  title: string;
  recipe: string;
  time: string;
};

export type FormItemPropsType = {
  onBlur: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  signature: string;
  signatureNameStyles: string;

  name: string;
  type?: string;
  id: string;

  placeholder?: string;
  pattern?: string;
  validationHintText?: string;
  maxLength?: number;
  value?: string;
};

export type SignatureFieldPropsType = {
  titleNameStyles: string;
  htmlForAttr: string;
  text: string;
};
