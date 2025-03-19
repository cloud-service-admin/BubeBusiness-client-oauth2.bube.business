/* eslint-disable react-hooks/exhaustive-deps */
import firebase_feature from '@/firebase/firebase';
import {
  _IOauth2EmployeeSuccess,
  IFirebaseAction,
} from '@/firebase/firebase.interface';
import handleError from '@/utils/handleError/handleError';
import handleMessage from '@/utils/handleMessage/handleMessage';
import handleTime from '@/utils/handleTime/handleTime';
import handleUrl_util, { IQueryParam } from '@/utils/handleUrl/handleUrl.util';
import work_employee_auth_oauth2_api from '@apis/work/config/employee/auth/oauth2/oauth2.api';
import CreateNewComponent_Template from '@components/template/page/createNewPage/createNewComponent.template';
import CreateNewPage_Template from '@components/template/page/createNewPage/createNewPage.template';
import { modalAction } from '@features/app_system/modal.slice';
import { useAppDispatch } from '@store/hooks';
import { Col, QRCode, Row, Spin, Typography } from 'antd';
import { onMessage } from 'firebase/messaging';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import React, { useEffect, useState } from 'react';

const emailContact = 'admin@bube.business';

const Oauth2WorkEmployeePage = () => {
  const dispatch = useAppDispatch();

  const [appName, setAppName] = useState('');
  const [qrValue, setQrValue] = useState('');
  // const [oauth2Info, setOauth2Info] = useState<IOauth2Info>();
  const [appRender, setAppRender] = useState<React.ReactNode>(null);
  const [checkQuery, setCheckQuery] = useState<'start' | 'error' | 'success'>(
    'start',
  );

  // todo: feature
  useEffect(() => {
    const startApp = async () => {
      const appId = handleUrl_util.getQuery(IQueryParam.appId);
      const redirectUrl = handleUrl_util.getQuery(IQueryParam.redirectUrl);
      const codeChallenge = handleUrl_util.getQuery(IQueryParam.codeChallenge);
      const companyId = handleUrl_util.getQuery(IQueryParam.companyId);
      const branchId = handleUrl_util.getQuery(IQueryParam.branchId);

      await handleTime.delay(2000);

      if (!appId || !redirectUrl || !codeChallenge || !companyId) {
        handleCheckAppQueryMissingValues();
        return;
      }

      const getFirebaseToken = firebase_feature.getFirebaseToken();

      if (!getFirebaseToken) {
        handleCheckAppMissingFirebaseToken();
      }

      createQrCode({
        appId,
        companyId,
        branchId: branchId || undefined,
        redirectUrl,
        codeChallenge,
        firebaseToken: '',
      });
    };

    startApp();
  }, []);

  useEffect(() => {
    if (checkQuery === 'success') {
      handleCheckAppQuerySuccess();

      onMessage(firebase_feature.messaging, async (payload) => {
        if (payload.data?.action !== IFirebaseAction.OAUTH2EMPLOYEESUCCESS)
          return;

        const values = JSON.parse(
          payload.data.values,
        ) as unknown as _IOauth2EmployeeSuccess;

        const subTitle = `Nhân sự: ${values.employeeName}`;

        dispatch(
          modalAction.openModalResult({
            title: 'Đăng nhập thành công',
            subTitle: subTitle,
          }),
        );

        await handleTime.delay(2000);

        window.location.href = values.redirectUrl;
      });
    } else if (checkQuery === 'error') {
      handleCheckAppQueryError();
    } else {
      handleCheckAppQueryStart();
    }
  }, [checkQuery]);

  // todo: api
  const createQrCode = async (data: {
    appId: string;
    companyId: string;
    branchId?: string;
    codeChallenge: string;
    redirectUrl: string;
    firebaseToken: string;
  }) => {
    try {
      const res =
        await work_employee_auth_oauth2_api.getQrCodeForOauth2Employee(data);

      if (res.data.status === 'error') {
        throw new Error(res.data.message);
      }

      interface TokenJwtPayload extends JwtPayload {
        appName: string;
      }

      const handleDecodedText: TokenJwtPayload = jwtDecode(
        res.data.values.qrCode,
      );

      if (!handleDecodedText.appName) {
        throw new Error('qr-code not invalid');
      }

      setAppName(handleDecodedText.appName);

      setQrValue(res.data.values.qrCode);

      setCheckQuery('success');
    } catch (error) {
      setCheckQuery('error');
      handleError(error);
    }
  };

  // todo: render
  const handleCheckAppQueryStart = () => {
    setAppRender(
      <Col span={24}>
        <Row justify={'center'} style={{ marginTop: 20 }}>
          <Typography.Text>
            <Spin />
          </Typography.Text>
        </Row>
        <Row justify={'center'} style={{ marginTop: 20 }}>
          <Typography.Text>Đang xác thực ...</Typography.Text>
        </Row>
      </Col>,
    );
  };

  const handleCheckAppMissingFirebaseToken = () => {
    setAppRender(
      <Col span={24}>
        <Row justify={'start'} style={{ marginTop: 20 }}>
          <Typography.Text>
            Không thể kết nối dữ liệu, vui lòng liên hệ quản trị viên
          </Typography.Text>
        </Row>
        <Row justify={'start'}>
          <Typography.Text>
            Cám ơn bạn đã quan tâm đến ứng dụng, nếu bạn phát hiện ra lỗi bảo
            mật của ứng dụng, vui lòng liên hệ với chúng tôi qua email:{' '}
            <Typography.Link
              copyable={true}
              onCopy={() => handleMessage.info('Đã sao chép email')}
            >
              {emailContact}
            </Typography.Link>
          </Typography.Text>
        </Row>
        <Row style={{ marginTop: 20 }} justify={'start'}>
          <Typography.Text>Trân trọng,</Typography.Text>
        </Row>
        <Row justify={'start'}>
          <Typography.Text>Đội ngũ Bube Business</Typography.Text>
        </Row>
      </Col>,
    );
  };

  const handleCheckAppQueryMissingValues = () => {
    setAppRender(
      <>
        <Col span={24}>
          <Row style={{ marginBottom: 20 }} justify={'start'}>
            <Typography.Text>
              Yêu cầu trường
              "app-id","company-id","redirect-url","code-challenge" tại query
            </Typography.Text>
          </Row>
          <Row justify={'start'}>
            <Typography.Text>
              Cám ơn bạn đã quan tâm đến ứng dụng, nếu bạn phát hiện ra lỗi bảo
              mật của ứng dụng, vui lòng liên hệ với chúng tôi qua email:{' '}
              <Typography.Link
                copyable={true}
                onCopy={() => handleMessage.info('Đã sao chép email')}
              >
                {emailContact}
              </Typography.Link>
            </Typography.Text>
          </Row>
          <Row style={{ marginTop: 20 }} justify={'start'}>
            <Typography.Text>Trân trọng,</Typography.Text>
          </Row>
          <Row justify={'start'}>
            <Typography.Text>Đội ngũ Bube Business</Typography.Text>
          </Row>
        </Col>
      </>,
    );
  };

  const handleCheckAppQueryError = () => {
    setAppRender(
      <Col span={24}>
        <Row justify={'start'}>
          <Typography.Text>
            Cám ơn bạn đã quan tâm đến ứng dụng, nếu bạn phát hiện ra lỗi bảo
            mật của ứng dụng, vui lòng liên hệ với chúng tôi qua email:{' '}
            <Typography.Link
              copyable={true}
              onCopy={() => handleMessage.info('Đã sao chép email')}
            >
              {emailContact}
            </Typography.Link>
          </Typography.Text>
        </Row>
        <Row style={{ marginTop: 20 }} justify={'start'}>
          <Typography.Text>Trân trọng,</Typography.Text>
        </Row>
        <Row justify={'start'}>
          <Typography.Text>Đội ngũ Bube Business</Typography.Text>
        </Row>
      </Col>,
    );
  };

  const handleCheckAppQuerySuccess = () => {
    setAppRender(
      <>
        <Col span={24}>
          <Row justify={'center'}>
            <Typography.Text>
              Cấp phép cho{' '}
              <Typography.Text type="danger">{appName} </Typography.Text> sử
              dụng thông tin nhân sự
            </Typography.Text>
          </Row>
          <Row justify={'center'}>
            <Typography.Text>
              <Typography.Text type="danger">{appName}</Typography.Text> sẽ có
              quyền truy cập{' '}
              <Typography.Text type="danger">
                ID nhân sự, tên, avatar
              </Typography.Text>{' '}
              của bạn
            </Typography.Text>
          </Row>
          <Row
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
            justify={'center'}
          >
            <QRCode bordered={false} value={qrValue} />
          </Row>
          <Row justify={'center'}>
            <Typography.Text>
              Sử dụng app Bube Business hoặc truy cập{' '}
              <Typography.Link
                href="https://admin.bube.business"
                target="_blank"
              >
                admin.bube.business
              </Typography.Link>{' '}
              và quét mã QR
            </Typography.Text>
          </Row>
        </Col>
      </>,
    );
  };

  return (
    <CreateNewPage_Template
      createNewComponent={
        <CreateNewComponent_Template
          form={
            <>
              <Col span={24}>
                <Row
                  style={{ marginTop: -20, marginBottom: 20 }}
                  justify={'center'}
                >
                  <Typography.Title level={4}>
                    Bube Oauth2 Cloud
                  </Typography.Title>
                </Row>
              </Col>
              {appRender}
            </>
          }
        />
      }
    />
  );
};

export default Oauth2WorkEmployeePage;
