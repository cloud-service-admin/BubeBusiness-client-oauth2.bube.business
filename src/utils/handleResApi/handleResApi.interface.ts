export type _Success = (
  values?: object,
  message?: React.ReactNode,
) => {
  status: 'success';
  values?: object;
  message?: React.ReactNode;
};

export type _Error = (
  values?: object,
  errorCode?: number | string | null,
  message?: React.ReactNode,
) => {
  status: 'error';
  errorCode?: number | string | null;
  message?: React.ReactNode;
  values?: object;
};
