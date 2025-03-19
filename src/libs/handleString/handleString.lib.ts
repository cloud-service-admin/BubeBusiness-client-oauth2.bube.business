const getPrefixAndValueFromObjectCode = (code?: string) => {
  if (!code) {
    return {
      prefix: 'code_cvd3Fd_',
      value: undefined,
    };
  }

  const parts: string[] = code.split('_');

  if (parts.length !== 3 || !parts[0].startsWith('code')) {
    return {
      prefix: 'code_cvd3Fd_',
      value: code,
    };
  }

  const prefix: string = parts[0] + '_' + parts[1] + '_';
  const suffix: string = parts[2];
  return {
    prefix,
    value: suffix,
  };
};

const handleString = {
  getPrefixAndValueFromObjectCode,
};

export default handleString;
