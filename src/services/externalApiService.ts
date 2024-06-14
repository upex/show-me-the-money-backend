import axios from 'axios';

export const fetchBalanceSheet = async (params: any) => {
  const url = `${process.env.EXTERNAL_API_URL}/Reports/BalanceSheet`;
  const response = await axios.get(url, { params });
  return response.data.Reports;
};

// more route handler can go here...