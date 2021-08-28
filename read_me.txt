Hello this is ashish 
first thing to setup this api we need some tools - Postman or any other API fetcher and vs code
after dowmloading all the tools download the zip file form my github respo and after then
open it into vs code 
then open the the vs terminal or enter Shift+crtl+` --> this command help you to open terminal from keyboard


<----> In the terminal enter 
npm start 
above line command start the server at port 3000
after that open any browser and enter localhost:3000  --> this url open home page of api
where u found -->to acces this api please write localhost:3000/api/users 

In the Url Enter --> localhost:3000/api/users

this above code open a web page which has all the data stored in the data base displayed in the json format

<...............>

for creating, deleting ,updating, and geting individual user please open postman
in the post man 
enter in the post man URL localhost:3000/api/users -->for this command you see the all the data stored in the data stored in the datbase


For creating or adding a new Useer enter localhost:3000/api/user
after that change the HTTP verb method from GET to POST which is located left side of Postman URL
after entering the URL 
below the URL you see some option you have to choose body and then in  the body you have to chose raw and then in the raw you have to slect json format 
then in the prompt you have to enter input stream in the json format for  example
{
"id":1,
 "firstname":"Ashish",
    "lastname":"panwar",
    "Age":22,
    "companyname":"abc",
    "city":"rohtak",
    "state":"haryana",
    "zip":124001,
    "email":"asshisshsaini50@gmail.com",
    "web":"https://ashishwebtech.com",
}
after entering this you have to click on the send button present in the right side of Postman URL box
after you your data is added and you see the data in the postman terminl


...After addding multiple user also please remember there ID no. because we will use it later
after that if you have to delete a user then enter
localhost:3000/api/users/{id_no}  -->  in the id no you have to enter id of document you have inserted 
after that enter on send button then you that document is deleted

if you have to access a single user then enter
localhost:3000/api/users/{id_no}
accorfding to the id no, you get the particular user data

and if you have to update a user then you have to write
localhost:3000/api/users/{id_no}
here you have to write the whole input print same as when  you insert the user because here we used PUT http verb 


that's it hope you get this and ,my project work properly thankyou
i have made this project with mongodb, mongoose, express,javascript
thankyou


