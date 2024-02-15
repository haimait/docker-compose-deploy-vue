# production stage
FROM nginx
COPY scripts/nginx/api_proxy.conf /etc/nginx/conf.d/api_proxy.conf
COPY dist  /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
