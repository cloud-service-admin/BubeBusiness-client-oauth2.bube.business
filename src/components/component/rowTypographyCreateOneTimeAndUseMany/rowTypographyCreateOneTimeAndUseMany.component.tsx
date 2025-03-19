import { Row, Typography } from 'antd';

const RowTypographyCreateOneTimeAndUseMany = () => {
  return (
    <Row justify={'center'}>
      <Typography.Text>
        (Tạo 1 lần và sử dụng cho toàn bộ chi nhánh bằng cách khai báo đối tượng
        là tài sản công ty)
      </Typography.Text>
    </Row>
  );
};

export default RowTypographyCreateOneTimeAndUseMany;
