import moment from "moment";

export function getCurrentDateTime() {
    return moment().format("YYYY-MM-DDTHH:mm:ss");
  }

  export function formatDate(data:any){
    
    return moment(data).format("YYYY-MM-DD");
  }