/**
Reference:
Create Email stock alert with Google Apps script | Simple Triggers
https://youtu.be/z7uoJlvbfBY
*/
function stockPrice()
{
  var sh1=SpreadsheetApp.getActive();
  //sh1.setActiveSheet(sh1.getSheetByName('Currency'), true);
  var DollarPrice=sh1.getSheetByName('Currency').getRange(13,3).getValue();                                                       
  //Logger.log(DolarPreco);
  
 // var DollarPrice=sh1.getSheetValues(13, 3, 1, 1).valueOf();
 Logger.log(DollarPrice);
  
  if(DollarPrice>5.3)
    Logger.log("DollarPrice is greather than 5.3");
  if(DollarPrice<5.8)
    Logger.log("DollarPrice is greather than 5.8");
  
  Logger.log("DollarPrice is "+DollarPrice);
  
  MailApp.sendEmail("your-email@gmail.com", "US Dollar vs Real", "The Dollar is: "+DollarPrice)
}
