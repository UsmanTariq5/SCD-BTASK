FROM httpd:2.4-alpine
COPY extra.conf /usr/local/apache2/conf/extra/extra.conf
RUN echo "Include conf/extra/extra.conf" >> /usr/local/apache2/conf/httpd.conf
