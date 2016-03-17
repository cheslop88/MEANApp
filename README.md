# MEANApp
A sample MEAN App

To use this app:

1. Please clone repository into your local directory.
2. Inside MEANApp/ please run 'npm install' to gather all modules and dependencies.
3. Please run mongodb using mongod command. (Note: Mac users may need to use 'sudo mongod').
4. To run, it is advised to use nodemon by using the command 'nodemon' inside of the /MEANApp directory. (Please ensure this is installed 'npm install nodemon -g').
5. Page will be accessible at localhost:3000 - please note mongod must be successfully running for this to work.

To Update Data:

1. Download the postman google chrome app at https://www.getpostman.com/docs/introduction
2. Once installed please load up app and set link to post.
3. Input the post URL - http://localhost:3000/api/stockList
4. Retrieve the mock data from the MEANApp located at /mock/stock.json
5. Copy the mock json data into the postman app, under the options 'body' and then 'raw'
6. Click post to upload data
7. App should now contain 6 records - 5 unsold and 1 sold
8. User can now amend data within the app as designed
9. Alternatively, use the app's features to input data using the designated forms and inputs

Note: Images have been provided for cars located at - public/app/images/cars - any additional car images you require must be placed into this directory.

Admin:

Under the admin panel the user can implement the following:

i) Add a new car record using the add record form - new cars are automatically set to unsold and a timestamp of record addition is added (this is unchangeable).
ii) Update any existing cars information previously added - note user can set the car status here to sold or unsold
iii) Delete a specific car record
iv) View sold cars, as well as previous advert and information regarding the car

Note: App relies on an npm install of angular to work

Any problems please contact c.heslop88@googlemail.com

