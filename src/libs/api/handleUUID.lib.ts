import { v4 as uuidv4 } from 'uuid';

const newUUID = () => {
  return uuidv4();
};

const handleUUID = {
  newUUID,
};

export default handleUUID;
