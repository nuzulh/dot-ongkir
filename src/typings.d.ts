export declare type Content = {
  title: string;
  subtitle: string;
  description: string;
};

export declare type ContentItems = {
  HOME: Content;
  CEK_ONGKIR: Content;
  TENTANG_KAMI: Content;
};

export declare type Menu = {
  label: string;
  link: string;
  icon: JSX.Element;
};

export declare type User = {
  name: string;
  email: string;
};

export declare type AuthApiResponse = {
  error: boolean;
  message: string;
  data?: User;
};
