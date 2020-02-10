// Bob Madison
// Eleven Fifty Academy
// February 2020

const urlFront = "https://developer.nps.gov/api/v1/parks?parkCode="; // Left side of URL
const urlRear = "&api_key=Op95hmCx8mRNRUgJK41XmbPb7kNw8kfL3cs4NNUy"; // Right side of URL

// The following array is used to display the button group of the selected state
// and to hide all of the non-selected state groups. See lines 52 - 59.

let stateCodes =["AK","AR","AZ","CA","CO","FL","HI","ID","IN","KY","ME","MD","MI","MN","MT",
                 "NC","ND","NM","NV","OH","OR","SC","SD","TN","TX","UT","VA","VI","WA","WY"]

let url; // This will be the complete url to access the API.

let anchor = document.createElement('a'); // anchor tag for URL of selected park
let anchor2 = document.createElement('a'); // anchor tag for URL of directions to the selected park
let webURL = document.getElementById("website"); // URL of selected park
let dirURL = document.getElementById("directions"); // URL of directions
let seeCards = document.getElementById("myCards") // Grabs the four cards (bootstrap)
let stateSelector = document.getElementById("states"); // Grabs the selected state's two letter ID

setButtonsOn(); // Hide the buttons and cards to start.
stateSelector.addEventListener('change', setButtonsOn) // This is the state name selector

/*******************************************************************
 *  The function setButtonsOn is fired when the user selects
 *  a state from the dropdown menu. This occurs from line 24.
 *  
 *  setButtonsOn will display the chosen state's group of buttons
 *  and hides all the others. When this script first executes, all
 *  of the button groups are hidden. This occurs when setButtonsOn
 *  fires from the call on line 23. In line 40, group will equal ""
 *  and the condition on line 41 will never be true. Therefore, no
 *  button group will display.
 * 
 *******************************************************************/
function setButtonsOn() { 
  
   let group = document.getElementById(stateSelector.value); // Grabs the button group
                                                             // designated by the state ID.
    seeCards.style.display = "none";
/****************************************************************************
 *  stateCodes is the array from lines 11 and 12. We use this to find
 *  the state's ID which is stored in stateSelecter.value. We begin at
 *  index 0 and go until the value in stateCodes[i] is equal to 
 *  stateSelector.value. When the state is found, I display the state's group
 *  of buttons. If the stateCodes[i] isn't equal to stateSelector.value, I
 *  set the display to the non-selected states to none. (lines 56 and 57)
 * 
 *****************************************************************************/
   for (let i = 0; i < stateCodes.length; i++) {
       if (stateCodes[i] === stateSelector.value) {
           group.style.display = "block";
       } else {
           let newGroup = document.getElementById(stateCodes[i]);
           newGroup.style.display = "none";
       }
   }
    
}

// The function getParkCode gets called when a state park button gets clicked.
// Calling the function comes from the HTML page. The parameter is the 4-character
// state park code.

function getParkCode(parkCode) {
    url = `${urlFront}${parkCode}${urlRear}`; // Inserts the 4-character park code
                                              // into the middle of the URL. The
                                              // url accesses the National Park
                                              // API of the specific park.
    
    console.log(url); // Used for debugging.

    fetch(url) // Getting the API from the url specified
    .then(function(result) {  // Returns the data to result
        return result.json(); // Data (result) gets "JSONified"
    }) .then(function(json) {
        console.log(json);    // Debugging
        displayResults(json); // Call to the displayResults function
    })

    function displayResults(json) { // Parameter is the JSON object from the API
        
        seeCards.style.display = "inline-block";         // Displays the 4 bootstrap cards
        let h5Tag = document.getElementsByTagName('h5'); // All the h5 tags assigned to h5tag

        for (let i = 0; i < h5Tag.length; i++) {
            h5Tag[i].innerHTML = json.data[0].fullName; // fullName is an endpoint in the API
        }  // This for loop puts the park's full name at the top of each card

        let pDescr = document.getElementById('card1P') // Card 1's <p> tag
        pDescr.innerHTML = json.data[0].description; // description is an endpoint in the API

        let wxInfo = document.getElementById('card2P') // Card 2's <p> tag
        wxInfo.innerHTML = json.data[0].weatherInfo; // weatherInfo is an endpoint in the API

        let dirInfo = document.getElementById('card4P') // Card 4's <p> tag
        dirInfo.innerHTML = json.data[0].directionsInfo; // directionsInfo is an endpoint in the API

        /**********************************************************
         *  Next four lines grabs the park's url and makes
         *  it available in card 3 by clicking the text:
         *  [Go to the web site]
         **********************************************************/
        anchor.href = json.data[0].url; // url is an endpoint in the API
        anchor.setAttribute("target", "blank");
        anchor.style.color = "black";
        anchor.textContent = "Go to the web site!";
        webURL.appendChild(anchor);

        /**********************************************************
         *  Next four lines grabs url of the directions to the park.
         *  It's placed in card 4 and accessed by clicking the text:
         *  [Web Directions!]
         **********************************************************/
        anchor2.href = json.data[0].directionsUrl; // directionsUrl is an endpoint in the API
        anchor2.setAttribute("target", "blank");
        anchor2.style.color = "black";
        anchor2.textContent = "Web Directions!";
        dirURL.appendChild(anchor2);

        // The following four console.log statements
        // are debugging tools to ensure things are 
        // going well.

        console.log(json.data[0].description);
        console.log(json.data[0].directionsUrl);
        console.log(json.data[0].url);
        console.log(json.data[0].weatherInfo);
    }
}