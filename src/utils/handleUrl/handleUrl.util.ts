export enum IQueryParam {
  appId = 'app-id',
  companyId = 'company-id',
  branchId = 'branch-id',
  codeChallenge = 'code-challenge',
  redirectUrl = 'redirect-url',
}

const addObjectIdToQuery = (type: IQueryParam, objectId?: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set(type, objectId || '');
  window.history.pushState({}, '', url.toString());
};

const getObjectIdFromQuery = (type: IQueryParam) => {
  const url = new URL(window.location.href);
  return url.searchParams.get(type);
};

const getQuery = (type: IQueryParam) => {
  const url = new URL(window.location.href);
  return url.searchParams.get(type);
};

const removeObjectIdFromQuery = (type: IQueryParam) => {
  const url = new URL(window.location.href);
  url.searchParams.delete(type);
  window.history.pushState({}, '', url.toString());
};

const handleUrl_util = {
  addObjectIdToQuery,
  getObjectIdFromQuery,
  removeObjectIdFromQuery,
  getQuery,
};

export default handleUrl_util;
