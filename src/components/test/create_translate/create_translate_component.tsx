import { Button, Card, Input, Row, Typography } from 'antd';
import { useState } from 'react';

type Lang = {
  language: string;
  code: string;
};

const lang: Lang[] = [
  {
    language: 'Tiếng Việt',
    code: 'vi',
  },
  {
    language: 'English',
    code: 'en',
  },
  {
    language: 'Thailand',
    code: 'th',
  },
];

export default function Create_translate_component() {
  const [editIndex, setEditIndex] = useState<number | null>(-1);
  const [textValues, setTextValues] = useState<string[]>(
    Array(lang.length).fill(''),
  );

  const handleEditClick = (index: number) => {
    // Nếu đang ở chế độ chỉnh sửa, lưu giá trị
    if (editIndex !== null) {
      setTextValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[editIndex] = textValues[editIndex]; // Lưu giá trị hiện tại
        return updatedValues;
      });
    }
    // Chuyển sang chế độ chỉnh sửa cho item được chọn
    setEditIndex(editIndex === index ? -1 : index); // Nếu đã nhấn nút đang sửa, thì sẽ trở về chế độ không sửa
  };

  const handleTextChange = (index: number, value: string) => {
    setTextValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  const render_card_translate_title = (lang: Lang, index: number) => {
    return (
      <Row justify={'space-between'}>
        <Typography.Text>{lang.language}</Typography.Text>
        <Button onClick={() => handleEditClick(index)}>
          {editIndex === index ? 'Xác Nhận' : 'Sửa'}
        </Button>
      </Row>
    );
  };

  const render_card_translate = () => {
    return lang.map((item, index) => {
      return (
        <Row
          style={{ padding: 20 }}
          justify={'space-between'}
          align={'middle'}
          key={item.code}
        >
          <Card
            title={render_card_translate_title(item, index)}
            style={{ width: '100%' }}
          >
            <Input.TextArea
              value={textValues[index]}
              onChange={(e) => handleTextChange(index, e.target.value)}
              disabled={editIndex !== index && editIndex !== null} // Disable input nếu không phải là ô đang sửa
            />
          </Card>
        </Row>
      );
    });
  };

  return (
    <>
      <Row justify={'center'}>
        <Typography.Title level={5}>Tạo bản dịch</Typography.Title>
      </Row>
      <Row>
        <Typography.Text>Dự án: Bube Business Admin</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>Component: createCompany_Component</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>Đối tượng: company name</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>Loại: label</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>Key: label_companyName</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>Định nghĩa: Tên công ty</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>Biến yêu cầu: ["ádasd","ádasd"]</Typography.Text>
      </Row>
      <Row>Dịch:</Row>
      {render_card_translate()}
    </>
  );
}
