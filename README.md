# SmartSearch

This project is a submission for the Schonfeld Street ID Challenge of the ShellHacks 2022 Hackathon. 

It is a search engine that gives users matches to the financial security IDs that they input in the search bar. These matches provided by the 
search engine are parsed from the given Schonfeld Securities .csv file that has almost 600,000 rows of data, each row identified by its unique 
security_ID. If users would like to access a certain data row, they would have to input the security_ID and our app would return matches to 
the security_ID. 


##How we built it:
React for the front end and Node.js and Typescript for the backend.

## What we learned:
It was possible to write code parsed through a big .csv file in only a few lines of code using functions from the csv-parse library. 
Also, the search engine algorithm function traverses the parsed data in an array, and from whatever the user inputs in the search bar, 
we sort the matches based on similarity. We also learned how to use Docker to run the frontend and backend simultaneously without any issues. 
