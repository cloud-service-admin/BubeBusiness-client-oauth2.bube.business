const appConstantConfig = {
  listLanguage: [
    {
      label: 'Tiếng Việt',
      value: 'vi',
    },
    {
      label: 'English',
      value: 'en',
    },
  ],
  listThemeMode: [
    {
      label: 'Light',
      value: 'light',
    },
    {
      label: 'Dark',
      value: 'dark',
    },
    {
      label: 'Custom Theme',
      value: 'custom',
    },
  ],
  defaultValues: {
    alignCenter: 'center' as const,
    dateFormat: 'DD/MM/YYYY',
  },
};

export default appConstantConfig;
