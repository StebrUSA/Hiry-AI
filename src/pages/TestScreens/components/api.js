import axios from "axios";

const baseUrl = "http://140.82.50.243:8080"; // Your API base URL

export const fetchProblem = async (queryParams) => {
  try {
    const response = await axios.post(
      `${baseUrl}/problems/get_exam_problem_list/`,
      queryParams
    );

    return response.session;
  } catch (error) {
    console.error("Error fetching problem:", error);
    throw error;
  }
};

export const sendUserCode = async (code) => {
  try {
    const response = await axios.post(`${baseUrl}/problems/code`, { code });
    console.log(response, "result");
    return response.result; // Modify this according to your API response structure
  } catch (error) {
    console.error("Error sending user code:", error);
    throw error;
  }
};

export const fetchSampleCode = async (problemId) => {
  try {
    const response = await fetch(
      `${baseUrl}/problems/get_sample_code/${problemId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch sample code");
    }
    console.log(response, "response");
    return response;
  } catch (error) {
    throw error;
  }
};
