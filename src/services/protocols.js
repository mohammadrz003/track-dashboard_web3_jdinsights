import axios from "axios";

export const getProtocolData = async ({ protocolName, address }) => {
  try {
    const { data, headers } = await axios.get(
      `/${protocolName}?address=${address}`
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
