How can you start this app :
----------------------------------------
npm install  

npm run dev  

----------------------------------------

Approach:
I have decided to create react application and use provided CSV data file.

------------------------------------------
Thinking Out Loud:

As I have pull CSV file into my react app, I can’t use CSV file directly in to my react application.  I must parse it into JSON format.  I am using use papaParse   package for parsing.

When you first land on webpage I want to display only Food Truck entries, they should be Approved. For that I will filter out pushcart entries, and other status which is not approved. 

To provide more details I have added accordion feature for each food truck entries. 
 
I have added search feature for food truck. You search your favorite food and list of food trucks sells will display.

