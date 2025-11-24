FROM nginx:alpine

# Serve the built Vite app from /usr/share/nginx/html
COPY dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
