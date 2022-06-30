import moment from "moment";
import {Text} from "react-native";
export function Time(time) {
  let a = time.split(':');
  return a[0] + ':' + a[1];
}
export function TimeinModulation(timeValue) {
  let time = timeValue?.split(':');
  let returnTime = '';
  if (time[0] > 12) {
    time[0] = time[0] - 12;
    returnTime = time[0] + ':' + time[1] + ' PM';
  } else {
    if (time[0] == '00') {
      returnTime = 12 + ':' + time[1] + ' AM';
    } else {
      returnTime = time[0] + ':' + time[1] + ' AM';
    }
  }
  return returnTime;
}

export function AvatarName(name) {
  let short = [];
  let a = name.split(' ');
  for (var i = 0; i < a.length; i++) {
    short.push(a[i].charAt(0, 1));
  }
  return short;
}

export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

export function formatTime(date) {
  var d = new Date(date),
    hour = '' + (d.getHours());
    min = '' + d.getMinutes();
  if (hour.length < 2) hour = '0' + hour;
  if (min.length < 2) min = '0' + min;
  return [hour, min].join(':');
}

export function getNumberOfHours(from_time,to_time){
        let diff = moment(to_time, 'HH:mm').diff(moment(from_time, 'HH:mm'))
        let d = moment.duration(diff);
        let hours=Math.floor(d.asHours())
        return hours;
}

export function spanByStatusReact(status) {
  let labelDetails =[];
  switch (status ? status.toLowerCase() : 'open') {
      case 'verified':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Verified';
          break;
      case 'completed':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Completed';
          break;
      case 'cleared':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Cleared';
          break;
      case 'ordered':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Ordered';
          break;
      case 'partially ordered':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Partially Ordered';
          break;
      case 'ongoing':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'OnGoing';
          break;
      case 'to be printed':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'To be Printed';
          break;

      case 'approved':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Approved';
          break;

      case 'received':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Received';
          break;

      case 'pending':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Pending';
          break;

      case 'delivered':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Delivered';
          break;
      case 'uncleared':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Uncleared';
          break;

      case 'close':
          labelDetails['labelClass'] = 'red';
          labelDetails['labelName'] = 'Closed';
          break;
      case 'void':
          labelDetails['labelClass'] = 'red';
          labelDetails['labelName'] = 'Void';
          break;
      case 'transferred':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Transferred';
          break;

      case 'partially received':
      case 'partially_received':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Partially Received';
          break;

      case 'partially delivered':
      case 'partially_delivered':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Partially Delivered';
          break;

      case 'checked':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Checked';
          break;

      case 'cancelled':
      case 'canceled':
          labelDetails['labelClass'] = 'red';
          labelDetails['labelName'] = 'Canceled';
          break;

      case 'declined':
          labelDetails['labelClass'] = 'red';
          labelDetails['labelName'] = 'Declined';
          break;

      case 'draft':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Draft';
          break;

      case 'not billed':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Not Billed';
          break;

      case 'not invoiced':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Not Invoiced';
          break;
      case 'not delivered':
          labelDetails['labelClass'] = 'red';
          labelDetails['labelName'] = 'Not Delivered';
          break;
      case 'not received':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Not Received';
          break;
      case 'billed':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Billed';
          break;

      case 'invoiced':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Invoiced';
          break;
      case 'un close':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Un Close';
          break;

      case 'partially billed':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Partially Billed';
          break;

        case 'approver':
        labelDetails['labelClass'] = 'green';
        labelDetails['labelName'] = 'Partially Billed';
        break;

      case 'partially invoiced':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Partially Invoiced';
          break;
      case 'unpaid':
      case 'un paid':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Un Paid';
          break;
      case 'paid':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] ='Paid';
          break;
      case 'partially-paid':
      case 'partially paid':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Partially Paid ';
          break;
      case '1':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Active';
          break;
      case 'profit':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Profit';
          break;
      case 'loss':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Loss';
          break;
      case '0':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Inactive';
          break;
      case 'advance':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Advance';
          break;
      case '':
          labelDetails['labelClass'] = '';
          labelDetails['labelName'] = '';
          break;
      case 'matched':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Matched';
          break;
      case 'reconciled':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Reconciled';
          break;
      case 'assigned':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = "Assigned";
          break;
      case 'register':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Register';
          break;
      case 'sold/disposed':
          labelDetails['labelClass'] = 'green';
          labelDetails['labelName'] = 'Sold';
          break;
      case 'unassigned':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Unassigned';
          break;
      case 'recommended':
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Recommended';
          break;
      case 'unordered':
          labelDetails['labelClass'] = 'yellow';
          labelDetails['labelName'] = 'Unordered';
          break;
      case 'rejected':
          labelDetails['labelClass'] = 'red';
          labelDetails['labelName'] = 'Rejected';
          break;
      default:
          labelDetails['labelClass'] = '#00c0ef';
          labelDetails['labelName'] = 'Open';

  }
  return labelDetails;
}
