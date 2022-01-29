import axios from 'axios';
import swal from 'sweetalert';
import { NotificationManager } from 'react-notifications';
// import { hideLoader } from '../utils/loader';

let baseUrl = 'https://services.staging.mywayapay.com';

const wayagramUrl = `${baseUrl}/wayagram-service`; // http://157.245.84.14:1000
const authUrl = `${baseUrl}/auth-service`; // http://68.183.60.114:8059
const kycUrl = `${baseUrl}/kyc-service`; // http://46.101.41.187:8070
const bvnUrl = `${baseUrl}/bvn-service`; // http://46.101.41.187:8070
const cardUrl = `${baseUrl}/card-service`; // http://157.230.223.54:3020
const contactUrl = `${baseUrl}/contact-service`; // http://46.101.41.187:8065
const billPaymentUrl = `${baseUrl}/billspayment-service`; // http://157.230.223.54:8181
const walletUrl = `${baseUrl}/temporal-service`; // http://157.230.223.54:9009
const paymentRequestUrl = `${baseUrl}/payment-request`; // http://157.230.223.54:9300/payment-request-service
const accountCreationUrl = `${baseUrl}/account-service`; // http://46.101.41.187:7090
const roleUrl = `${baseUrl}/role-service`; // http://46.101.41.187:8061/api/v1
const withdrawalUrl = `${baseUrl}/withdrawal-service`;
const ussdUrl = `${baseUrl}/ussd-service`; // http://157.230.223.54:4040
const disputeUrl = `${baseUrl}/social-dispute`; // 'http://157.230.223.54:8086/api/v1
const socketUrl = `${baseUrl}/chats-service`; // http://157.245.84.14:6006
const logUrl = `${baseUrl}/logs-service`; // http://46.101.41.187:8083
const wayapayDispute = `${baseUrl}/complaint-service`; // http://46.101.41.187:9400/complaint-service
const contentManagementUrl = `${baseUrl}/content-management-service`;
const notificationUrl = `${baseUrl}/notification-service`;
const fileResourseUrl = `${baseUrl}/file-resource-service`;
const ussdTopUp = `${baseUrl}/ussd-middle-ware`;

export const customBaseUrl = {
  wayagramUrl,
  authUrl,
  kycUrl,
  bvnUrl,
  cardUrl,
  contactUrl,
  billPaymentUrl,
  ussdUrl,
  walletUrl,
  paymentRequestUrl,
  accountCreationUrl,
  roleUrl,
  withdrawalUrl,
  disputeUrl,
  // generateUssdUrl,
  socketUrl,
  logUrl,
  wayapayDispute,
  contentManagementUrl,
  notificationUrl,
  fileResourseUrl,
  ussdTopUp,
};

if (process.env.REACT_APP_NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:8080';
}

export const httpPost = async (url, postBody, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      'Please check your internet',
      'Oops!',
      3000
    );
  }
  try {
    const res = await axios.post(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'content-type': 'application/json',
            },
          }
        : {}
    );
    return res.data;
  } catch (error) {
    // hideLoader();
    if (error?.response?.data.error === 'Internal Server Error') {
      return {
        status: false,
        message: error.response.data.error,
      };
    }
    if (error?.response?.data.message === 'Validation Errors') {
      Object.values(error.response.data.data).map((item) =>
        NotificationManager.error(item, 'Oops!', 5000)
      );
      return {
        status: false,
        message: error.response?.data.data[0],
      };
    }
    return error.response?.data;
  }
};

export const httpPostUnreloaded = async (
  url,
  postBody,
  otherUrl,
  isNotAuth
) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      'Please check your internet',
      'Oops!',
      3000
    );
  }
  try {
    const res = await axios.post(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    return error.response?.data;
  }
};

export const httpPostFormData = async (url, postBody, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      'Please check your internet',
      'Oops!',
      3000
    );
  }
  try {
    const res = await axios.post(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    return error.response?.data;
  }
};

export const httpGet = async (url, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      'Please check your internet',
      'Oops!',
      3000
    );
  }
  try {
    const res = await axios.get(
      url,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
            },
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    if (error?.response?.data?.message === 'Validation Errors') {
      Object.values(error?.response?.data?.data).map((item) =>
        swal('Oops!', item, 'error')
      );
      return {
        status: false,
        message: error?.response?.data.data[0],
      };
    }
    return error?.response?.data;
  }
};

export const httpPut = async (url, postBody, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      'Please check your internet',
      'Oops!',
      3000
    );
  }
  try {
    const res = await axios.put(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
            },
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    if (error.response.data.message === 'Validation Errors') {
      return {
        status: false,
        message: error.response?.data.data[0],
      };
    }
    return error.response?.data;
  }
};

export const httpPatch = async (url, postBody, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      'Please check your internet',
      'Oops!',
      3000
    );
  }
  try {
    const res = await axios.patch(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
            },
          }
        : {}
    );
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const httpDelete = async (url, data, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      'Please check your internet',
      'Oops!',
      3000
    );
  }
  try {
    const res = await axios.delete(
      `${otherUrl || baseUrl}${url}`,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
            },
            data,
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    return error.response?.data;
  }
};
