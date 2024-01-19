import { ChangeEvent } from 'react';

export type TheadDataType = {
  id: string;
  tooltip: string;
  patch: string;
};

export type CatalogItemDataType = {
  id: string;
  color: string;
  date: string;
  title: string;
  recipe: string;
  cookingTime: string;
};

export type InputFieldPropsType = {
  signature: string;
  signatureNameStyles: string;
  name: string;
  type?: string;
  id: string;

  placeholder?: string;
  pattern?: string;
  validationHintText?: string;
  maxLength?: number;

  onChange?: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
};

export type SignatureFieldPropsType = {
  titleNameStyles: string;
  htmlForAttr: string;
  text: string;
};

export type ButtonType = {
  nameBtn: string;
  nameType?: 'submit' | 'reset';
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => void;
  link?: string | null;
};

export type ModalActiveInitialStateType = {
  modalActive: boolean;
  modalEditingActive: boolean;
  modalDataActive: boolean;
  //
  dataItem: CatalogItemDataType;
};

export type SearchType = {
  searchValue: string;
  searchFlag: boolean;
};

export type CatalogDataInitialStateType = {
  recipeCatalogData: CatalogItemDataType[] | [];
  isLoading: boolean;
  isErrors: boolean;
};
