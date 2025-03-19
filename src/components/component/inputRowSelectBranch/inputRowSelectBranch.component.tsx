import handleError from '@/utils/handleError/handleError';
import work_company_branch_api from '@apis/app_work/company/branch/branch.api';
import InputRow_Component from '@components/template/page/createNewPage/inputRow.component';
import { myEmployeeSelect } from '@features/app_work/myEmployee.slice';
import { IOption } from '@interfaces/common.interface';
import { useAppSelector } from '@store/hooks';
import { Select } from 'antd';
import { useState } from 'react';

type ILoading = {
  branchOptionList?: boolean;
};

type IGetApiState = {
  branchOptionList?: boolean;
};

type Props = {
  error?: React.ReactNode;
  cb_selected: (branchId: string) => void;
};

export default function InputRowSelectBranch_Component(props: Props) {
  const { error, cb_selected } = props;

  const myEmployeeState = useAppSelector(myEmployeeSelect).workCompany;
  const [loading, setLoading] = useState<ILoading>();
  const [getApiState, setGetApiState] = useState<IGetApiState>();
  const [branchOptionList, setBranchOptionList] = useState<IOption[]>();

  // todo: features
  const openLoading = (loadingName: keyof ILoading) => {
    setLoading({
      ...loading,
      [loadingName]: true,
    });
  };

  const closeLoading = (loadingName: keyof ILoading) => {
    setLoading({
      ...loading,
      [loadingName]: false,
    });
  };

  const onChangeSelectBranch = (value: string) => {
    cb_selected(value);
  };

  // todo: api
  const getBranchOptionList = async () => {
    try {
      if (getApiState?.branchOptionList) {
        return;
      }

      if (!myEmployeeState?.company.id) {
        throw new Error('Không tìm thấy thông tin công ty');
      }
      openLoading('branchOptionList');

      const res = await work_company_branch_api.getBranchOptionList(
        myEmployeeState?.company.id,
      );

      if (res.data.status === 'error') {
        throw new Error(res.data.message);
      }

      setBranchOptionList(
        res.data.values.map((branch: { id: string; name: string }) => ({
          value: branch.id,
          label: branch.name,
        })),
      );
      setGetApiState((prevState) => ({
        ...prevState,
        branchOptionList: true,
      }));
    } catch (error) {
      handleError(error);
    }
    closeLoading('branchOptionList');
  };

  return (
    <InputRow_Component
      label={'Chi nhánh'}
      input={
        <Select
          style={{ width: '100%' }}
          loading={loading?.branchOptionList}
          showSearch={true}
          options={branchOptionList}
          onClick={getBranchOptionList}
          onChange={onChangeSelectBranch}
        />
      }
      inputError={error}
    />
  );
}
