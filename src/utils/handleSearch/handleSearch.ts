import handleString from '../handleString/handleString';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const searchListSelect = (input: string, option: any) => {
  return (
    (option?.label ?? '')
      .toLowerCase()
      .includes(handleString.convertStringToEnString(input.toLowerCase())) ||
    handleString
      .convertStringToEnString(option?.label ?? '')
      .toLowerCase()
      .includes(handleString.convertStringToEnString(input.toLowerCase())) ||
    (option?.value ?? '')
      .toLowerCase()
      .includes(handleString.convertStringToEnString(input.toLowerCase())) ||
    handleString
      .convertStringToEnString(option?.value ?? '')
      .toLowerCase()
      .includes(handleString.convertStringToEnString(input.toLowerCase()))
  );
};

const handleSearch = {
  searchListSelect,
};

export default handleSearch;
