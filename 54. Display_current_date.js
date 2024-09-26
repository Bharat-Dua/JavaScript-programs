//*--- Display current date

//? Display the current date in javascript,use can use the Date object to get the current date and time then format it as needed.

function displayCurrentDate() {
    let currentDate = new Date();
    
    let options = {
        year: "numeric",
        month: "short", // Options: 'numeric', '2-digit', 'long', 'short', 'narrow'
        day: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // Use 12-hour format // Options: 'long', 'short', 'narrow'
      };
  
    let formattedDate = currentDate.toLocaleString('en-US', options);
    
    console.log(formattedDate);
    return formattedDate; 
  }
  
  displayCurrentDate();
  