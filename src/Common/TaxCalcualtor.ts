export function  calculateGST(ticketPrice:number, gstRate:number) {
   
    if (isNaN(ticketPrice) || isNaN(gstRate)) {
      return 0; 
    }
  
    const gstAmount = (ticketPrice * gstRate) / 100;
  
    return gstAmount;
  }