// token
export type IAccessTokenDecoded = {
  userId: string;
  fullName: string;
  iat: string;
  exp: string;
};

export type IRefreshTokenDecoded = {
  userId: string;
  iat: string;
  exp: string;
};

export type ITokenDecoded = {
  accessToken: IAccessTokenDecoded;
  refreshToken: IRefreshTokenDecoded;
};

// companyToken
export type ICompanyAccessTokenDecoded = {
  companyId: string;
  branchId: string;
  employeeId: string;
  fullName: string;
  roles: string[];
  iat: string;
  exp: string;
};
export type ICompanyRefreshTokenDecoded = {
  companyId: string;
  branchId: string;
  employeeId: string;
  fullName: string;
  iat: string;
  exp: string;
};
export type ICompanyToken = {
  companyAccessToken: ICompanyAccessTokenDecoded;
  companyRefreshToken: ICompanyRefreshTokenDecoded;
};

//
export type I_get_newAccessToken = Promise<{
  token: {
    accessToken: string;
    refreshToken: string;
  };
} | null>;

export type IGet_employeeTokenFromRefreshToken = Promise<{
  employeeToken: {
    accessToken: string;
    refreshToken: string;
  };
} | null>;

export type I_get_newCompanyAccessToken = Promise<{
  companyToken: {
    companyAccessToken: string;
    companyRefreshToken: string;
  };
} | null>;
