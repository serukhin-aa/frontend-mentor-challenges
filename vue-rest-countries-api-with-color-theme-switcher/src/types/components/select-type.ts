export type TSelect = {
  name: string;
  label?: string;
  icon?: string;
  width?: string;
  placeholder: string;
  options: TOptions[];
};

type TOptions = {
  value: string;
  label: string;
};
