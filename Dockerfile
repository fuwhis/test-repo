# # set the base image to node:version
# FROM node:12-alpine as build

# WORKDIR /app

# ENV

# # COPY package-lock.json ./
# COPY package.json ./
# COPY . /app/

# # install app dependencies
# RUN yarn

# # RUN npm install react-scripts@3.4.1 -g --silent
# # add app
# COPY . ./

# RUN yarn build

# # Prepare nginx
# FROM nginx:1.16.0-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d

# # Fire up nginx
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
