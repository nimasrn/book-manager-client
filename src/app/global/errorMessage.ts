import { environment } from '../../environments/environment';
export function ErrorMessage(error) {
  console.log('ErrorMessage -> error', error);
  const status = error.status;
  if (status === 0) {
    return 'please check your network connection';
  }
  if (typeof error === 'object') {
    return error.error.statusCode + error.error.message
  } else {
    return 'somthing went wrong please try in a momeent'
  }

}
