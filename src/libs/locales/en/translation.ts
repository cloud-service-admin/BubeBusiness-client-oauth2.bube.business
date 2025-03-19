import translationAdmin from './translationAdmin';
import translationComon from './translationComon';
import translationPublic from './translationPublic';

const translationEN = {
  component: {
    public: translationPublic,
    admin: translationAdmin,
  },
  common: translationComon,
};

export default translationEN;
