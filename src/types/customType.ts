export type TheadDataType = {
  id: string;
  tooltip: string;
  patch: string;
};

export type CatalogDataType = {
  id: string;
  color: string;
  date: string;
  title: string;
  recipe: string;
  cookingTime: string;
};

export type FormItemPropsType = {
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

export type ButtonFormType = {
  nameBtn: string;
  nameType: 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};