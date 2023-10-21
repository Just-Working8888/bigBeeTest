 FROM node:19

 # Set /app as the default work directory
 WORKDIR /app

 # copy package.json to the working directory for packages installation
 COPY package.json /app

 # Install npm dependencies
 RUN npm install

 # Copy all the project files to the working directory
 COPY . .

 # Expose the port of your application to bind with the host port
 EXPOSE 8080

 # run your app
CMD ["npm", "run", "start"]



https://www.googleapis.com/books/v1/volumes?q=js&key=AIzaSyDGT6-a8mZWTB_4-Ft3-5MmB3rOnCqBFtc&maxResults=30&startIndex=60&orderBy=relevance&subject=all