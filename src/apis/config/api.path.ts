import { Method } from 'axios';

const method: { [key: string]: Method } = {
  post: 'post',
  get: 'get',
  delete: 'delete',
  head: 'head',
  options: 'options',
  put: 'put',
  patch: 'patch',
  purge: 'purge',
  link: 'link',
  unlink: 'unlink',
};

const socialAuthPath = '/social/auth/';
const socialUserPath = '/social/user/';
const workCompanyBranchPath = '/work/company/branch/';

const apiPathDefineV2 = {
  social: {
    auth: {
      register: {
        method: method.post,
        path: `${socialAuthPath}/register`,
      },
      login: {
        method: method.post,
        path: `${socialAuthPath}/login`,
      },
      getNewAccessToken: {
        method: method.post,
        path: `${socialAuthPath}/get-new-access-token`,
      },
      checkRefreshToken: {
        method: method.post,
        path: `${socialAuthPath}/check-refresh-token`,
      },
      logout: {
        method: method.post,
        path: `${socialAuthPath}/logout`,
      },
    },
    user: {
      get_myUserBasicInfo: {
        method: method.get,
        path: `${socialUserPath}/my-user-basic-info`,
      },
    },
  },
  work: {
    auth: {
      getNewCompanyAccessToken: {
        method: method.post,
        path: '/work/auth/get-new-access-token',
      },
    },
    myEmployee: {},
    company: {
      branch: {
        create: {
          method: method.post,
          path: workCompanyBranchPath,
        },
        get_fullInfo: {
          method: method.get,
          path: (branchId: string) =>
            `${workCompanyBranchPath}/full-info/${branchId}`,
        },
        get_listOfFilter: {
          method: method.post,
          path: `${workCompanyBranchPath}/list-of-filter`,
        },
        update: {
          method: method.put,
          path: (branchId: string) => `${workCompanyBranchPath}/${branchId}`,
        },
        updateStatus: {
          method: method.patch,
          path: (branchId: string) =>
            `${workCompanyBranchPath}/update-status/${branchId}`,
        },
        delete: {
          method: method.delete,
          path: (branchId: string) => `${workCompanyBranchPath}/${branchId}`,
        },
      },
    },
    business: {},
    employee: {
      employee: {},
      department: {
        department: {
          create: {
            method: method.post,
            path: '/work/employee/department/',
          },
          get_basicInfo: {
            method: method.get,
            path: (departmentId: string) =>
              `/work/employee/department/basic-info/${departmentId}`,
          },
          get_fullInfo: {
            method: method.get,
            path: (departmentId: string) =>
              `/work/employee/department/full-info/${departmentId}`,
          },
          get_listOfFilter: {
            method: method.post,
            path: `/work/employee/department/list-of-filter`,
          },
          update: {
            method: method.put,
            path: (departmentId: string) =>
              `/work/employee/department/${departmentId}`,
          },
          updateStatus: {
            method: method.patch,
            path: (departmentId: string) =>
              `/work/employee/department/update-status/${departmentId}`,
          },
          delete: {
            method: method.delete,
            path: (departmentId: string) =>
              `/work/employee/department/${departmentId}`,
          },
        },
        departmentGroup: {
          create: {
            method: method.post,
            path: '/work/employee/department-group/',
          },
          get_basicInfo: {
            method: method.get,
            path: (departmentGroupId: string) =>
              `/work/employee/department-group/basic-info/${departmentGroupId}`,
          },
          get_fullInfo: {
            method: method.get,
            path: (departmentGroupId: string) =>
              `/work/employee/department-group/full-info/${departmentGroupId}`,
          },
          get_listDepartmentGroupOfCompany: {
            method: method.get,
            path: (companyId: string) =>
              `/work/employee/department-group/list-department-group-of-company/${companyId}`,
          },
          get_listDepartmentGroupOfBranch: {
            method: method.get,
            path: (branchId: string) =>
              `/work/employee/department-group/list-department-group-of-branch/${branchId}`,
          },
          update: {
            method: method.put,
            path: (departmentGroupId: string) =>
              `/work/employee/department-group/${departmentGroupId}`,
          },
          updateStatus: {
            method: method.patch,
            path: (departmentGroupId: string) =>
              `/work/employee/department-group/update-status/${departmentGroupId}`,
          },
          delete: {
            method: method.delete,
            path: (departmentGroupId: string) =>
              `/work/employee/department-group/${departmentGroupId}`,
          },
        },
        departmentType: {
          create: {
            method: method.post,
            path: '/work/employee/department-type/',
          },
          get_basicInfo: {
            method: method.get,
            path: (departmentTypeId: string) =>
              `/work/employee/department-type/basic-info/${departmentTypeId}`,
          },
          get_fullInfo: {
            method: method.get,
            path: (departmentTypeId: string) =>
              `/work/employee/department-type/full-info/${departmentTypeId}`,
          },
          get_listDepartmentTypeOfCompany: {
            method: method.get,
            path: (companyId: string) =>
              `/work/employee/department-type/list-department-type-of-company/${companyId}`,
          },
          get_listDepartmentTypeOfBranch: {
            method: method.get,
            path: (branchId: string) =>
              `/work/employee/department-type/list-department-type-of-branch/${branchId}`,
          },
          update: {
            method: method.put,
            path: (departmentTypeId: string) =>
              `/work/employee/department-type/${departmentTypeId}`,
          },
          updateStatus: {
            method: method.patch,
            path: (departmentTypeId: string) =>
              `/work/employee/department-type/update-status/${departmentTypeId}`,
          },
          delete: {
            method: method.delete,
            path: (departmentTypeId: string) =>
              `/work/employee/department-type/${departmentTypeId}`,
          },
        },
      },
      position: {
        position: {
          create: {
            method: method.post,
            path: '/work/employee/position/',
          },
          get_basicInfo: {
            method: method.get,
            path: (positionId: string) =>
              `/work/employee/position/basic-info/${positionId}`,
          },
          get_fullInfo: {
            method: method.get,
            path: (positionId: string) =>
              `/work/employee/position/full-info/${positionId}`,
          },
          get_listPositionOfCompany: {
            method: method.get,
            path: (companyId: string) =>
              `/work/employee/position/list-position-of-company/${companyId}`,
          },
          get_listPositionOfBranch: {
            method: method.get,
            path: (branchId: string) =>
              `/work/employee/position/list-position-of-branch/${branchId}`,
          },
          update: {
            method: method.put,
            path: (positionId: string) =>
              `/work/employee/position/${positionId}`,
          },
          updateStatus: {
            method: method.patch,
            path: (positionId: string) =>
              `/work/employee/position/update-status/${positionId}`,
          },
          delete: {
            method: method.delete,
            path: (positionId: string) =>
              `/work/employee/position/${positionId}`,
          },
        },
        positionGroup: {
          create: {
            method: method.post,
            path: '/work/employee/position-group/',
          },
          get_basicInfo: {
            method: method.get,
            path: (positionGroupId: string) =>
              `/work/employee/position-group/basic-info/${positionGroupId}`,
          },
          get_fullInfo: {
            method: method.get,
            path: (positionGroupId: string) =>
              `/work/employee/position-group/full-info/${positionGroupId}`,
          },
          get_listPositionGroupOfCompany: {
            method: method.get,
            path: (companyId: string) =>
              `/work/employee/position-group/list-position-group-of-company/${companyId}`,
          },
          get_listPositionGroupOfBranch: {
            method: method.get,
            path: (branchId: string) =>
              `/work/employee/position-group/list-position-group-of-branch/${branchId}`,
          },
          update: {
            method: method.put,
            path: (positionGroupId: string) =>
              `/work  /employee/position-group/${positionGroupId}`,
          },
        },
      },
    },
    product: {},
    warehouse: {
      inventory: {},
      warehouse: {
        warehouse: {
          create: {
            method: method.post,
            path: '/work/warehouse/warehouse/',
          },
          get_basicInfo: {
            method: method.get,
            path: (warehouseId: string) =>
              `/work/warehouse/warehouse/basic-info/${warehouseId}`,
          },
          get_fullInfo: {
            method: method.get,
            path: (warehouseId: string) =>
              `/work/warehouse/warehouse/full-info/${warehouseId}`,
          },
          get_listWithFilter: {
            method: method.post,
            path: '/work/warehouse/warehouse/list-with-filter',
          },
          update: {
            method: method.put,
            path: (warehouseId: string) =>
              `/work/warehouse/warehouse/${warehouseId}`,
          },
          update_status: {
            method: method.patch,
            path: (warehouseId: string) =>
              `/work/warehouse/warehouse/update-status/${warehouseId}`,
          },
          delete: {
            method: method.delete,
            path: (warehouseId: string) =>
              `/work/warehouse/warehouse/${warehouseId}`,
          },
        },
        warehouseType: {
          create: {
            method: method.post,
            path: '/work/warehouse/warehouse-type/',
          },
          get_basicInfo: {
            method: method.get,
            path: (warehouseTypeId: string) =>
              `/work/warehouse/warehouse-type/basic-info/${warehouseTypeId}`,
          },
          get_fullInfo: {
            method: method.get,
            path: (warehouseTypeId: string) =>
              `/work/warehouse/warehouse-type/full-info/${warehouseTypeId}`,
          },
          get_listWarehouseTypeOfCompany: {
            method: method.get,
            path: (companyId: string) =>
              `/work/warehouse/warehouse-type/list-warehouse-type-of-company/${companyId}`,
          },
          get_listWarehouseTypeOfBranch: {
            method: method.get,
            path: (branchId: string) =>
              `/work/warehouse/warehouse-type/list-warehouse-type-of-branch/${branchId}`,
          },
          update: {
            method: method.put,
            path: (warehouseTypeId: string) =>
              `/work/warehouse/warehouse-type/${warehouseTypeId}`,
          },
          updateStatus: {
            method: method.patch,
            path: (warehouseTypeId: string) =>
              `/work/warehouse/warehouse-type/update-status/${warehouseTypeId}`,
          },
          delete: {
            method: method.delete,
            path: (warehouseTypeId: string) =>
              `/work/warehouse/warehouse-type/${warehouseTypeId}`,
          },
        },
        warehouseGroup: {
          create: {
            method: method.post,
            path: '/work/warehouse/warehouse-group/',
          },
          get_basicInfo: {
            method: method.get,
            path: (warehouseGroupId: string) =>
              `/work/warehouse/warehouse-group/basic-info/${warehouseGroupId}`,
          },
          get_fullInfo: {
            method: method.get,
            path: (warehouseGroupId: string) =>
              `/work/warehouse/warehouse-group/full-info/${warehouseGroupId}`,
          },
          get_listWarehouseGroupOfCompany: {
            method: method.get,
            path: (companyId: string) =>
              `/work/warehouse/warehouse-group/list-warehouse-group-of-company/${companyId}`,
          },
          get_listWarehouseGroupOfBranch: {
            method: method.get,
            path: (branchId: string) =>
              `/work/warehouse/warehouse-group/list-warehouse-group-of-branch/${branchId}`,
          },
          update: {
            method: method.put,
            path: (warehouseGroupId: string) =>
              `/work/warehouse/warehouse-group/${warehouseGroupId}`,
          },
          updateStatus: {
            method: method.patch,
            path: (warehouseGroupId: string) =>
              `/work/warehouse/warehouse-group/update-status/${warehouseGroupId}`,
          },
          delete: {
            method: method.delete,
            path: (warehouseGroupId: string) =>
              `/work/warehouse/warehouse-group/${warehouseGroupId}`,
          },
        },
      },
    },
    app: {},
    device: {},
    setting: {},
  },
};

export default apiPathDefineV2;
