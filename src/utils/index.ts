const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber
    .replace(/^(\+\d{2})(\d{3})(\d)(\d{2})(\d{2})(\d{3})$/, '$1 $2 $3 $4 $5 $6')
    .replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};

export { formatPhoneNumber };
