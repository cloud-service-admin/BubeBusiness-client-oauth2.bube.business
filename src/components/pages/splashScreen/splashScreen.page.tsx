import { Drawer, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import splashScreenBackground from '@assets/background/splashScreen-background.png';

const poems = [
  'Sóng bắt đầu từ gió\nGió bắt đầu từ đâu?',
  'Trăm năm trong cõi người ta\nChữ tài chữ mệnh khéo là ghét nhau.',
  'Người ơi gặp gỡ làm chi\nTrăm năm biết có duyên gì hay không?',
  'Thuyền ai đậu bến sông trăng đó\nCó chở trăng về kịp tối nay?',
  'Một mùa thu trước mỗi hoàng hôn\nNhặt cánh hoa rơi chẳng thấy buồn.',
  'Mây trôi nước chảy cứ vơi đầy\nTrăng sáng còn đây bóng đã gầy.',
  'Nhớ ai bổi hổi bồi hồi\nNhư đứng đống lửa, như ngồi đống than.',
  'Trăm năm bia đá cũng mòn\nNgàn năm bia miệng vẫn còn trơ trơ.',
  'Mưa rơi tí tách bên hiên\nNghe lòng lặng lẽ ưu phiền nhớ ai?',
  'Bèo dạt mây trôi đợi chờ\nNhớ ai ai nhớ bao giờ gặp nhau?',
  'Anh về cắt cỏ đợi trâu\nTrâu ra ăn cỏ, anh sầu vì ai?',
  'Thương nhau mấy núi cũng trèo\nMấy sông cũng lội, mấy đèo cũng qua.',
  'Chẳng tham nhà ngói rung rinh\nTham vì cái bút cái nghiên anh đồ.',
  'Còn duyên kẻ đón người đưa\nHết duyên đi sớm về trưa mặc lòng.',
  'Nước non lận đận một mình\nThân cò lên thác xuống ghềnh bấy nay.',
];

type Props = {
  isOpen: boolean;
};

const SplashScreen: React.FC<Props> = ({ isOpen }) => {
  const [visible, setVisible] = useState(isOpen);
  const [randomPoem, setRandomPoem] = useState(poems[0]);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setRandomPoem(poems[Math.floor(Math.random() * poems.length)]);
    } else {
      setTimeout(() => setVisible(false), 2000);
    }
  }, [isOpen]);

  return (
    <Drawer
      placement="bottom"
      closable={false}
      open={visible}
      height="100dvh"
      forceRender
      mask={false}
      styles={{
        body: {
          transition: visible ? 'none' : 'transform 1.5s ease-out',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          backgroundImage: `url(${splashScreenBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
      }}
    >
      <Spin size="large" style={{ marginBottom: 20 }} />
      <Typography.Title style={{ animation: 'fadeIn 1.5s ease-in-out' }}>
        BUBE BUSINESS
      </Typography.Title>
      <Typography.Paragraph style={{ animation: 'fadeIn 2s ease-in-out' }}>
        {randomPoem.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Typography.Paragraph>
    </Drawer>
  );
};

export default SplashScreen;
