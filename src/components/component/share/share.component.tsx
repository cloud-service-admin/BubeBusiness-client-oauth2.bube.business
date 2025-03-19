import handleMessage from '@/utils/handleMessage/handleMessage';
import shareIcon from '@assets/icon/share-icon.png';
import { Avatar } from 'antd';

type Props = {
  title?: string;
  text?: string;
  url?: string;
};
export default function Share_Component(props: Props) {
  const { title, text, url } = props;

  const handleShareResult = () => {
    if (text == '') {
      return;
    }

    if (navigator.share) {
      navigator
        .share({
          title: title || 'Bube Business',
          text,
          url: url || 'https://admin.bube.business',
        })
        .catch((error) => console.error('Lỗi khi chia sẻ:', error));
    } else {
      // Fallback cho trường hợp không hỗ trợ Web Share API
      handleMessage.error('Trình duyệt của bạn không hỗ trợ tính năng này');
    }
  };

  return <Avatar src={shareIcon} onClick={handleShareResult} />;
}
