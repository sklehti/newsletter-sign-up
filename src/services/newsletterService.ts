import axios from "axios";

const baseUrl = "http://localhost:3001";

export const createEmail = async (email: string) => {
  try {
    const result = await axios.post(`${baseUrl}/userInfo/`, { email });

    return result;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);

      return error;
    } else if (error instanceof Error) {
      console.error(error);

      return error;
    }
  }
};
