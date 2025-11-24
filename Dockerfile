FROM nginx:alpine

# Copy single HTML page as the site index
COPY tartanvolt.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
