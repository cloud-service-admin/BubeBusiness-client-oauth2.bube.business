import IsDraft_component from '../isDraft/isDraft.component';
import IsNew_component from './isNew/isNew.component';

type Props = {
  formStatus: 'new' | 'isDraft' | 'detail';
};
export default function IconInTitle_component(props: Props) {
  const { formStatus } = props;

  if (formStatus === 'new') {
    return <IsNew_component />;
  } else if (formStatus === 'isDraft') {
    return <IsDraft_component />;
  } else {
    return <></>;
  }
}
