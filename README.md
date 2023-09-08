# Shop

An e-commerce website built with **Vue.js**, **Django**, and **MySQL**. Live link: https://shop.aaronhong.net

## Deploying to a Server

To deploy the Shop application to a server, follow these steps:

Create venv and install gunicorn:

```shell
cd shop
python -m venv .venv
source .venv/bin/activate
pip install -r requirement.txt
pip install gunicorn
```

Create a new Systemd service file:

```shell
sudo vi /etc/systemd/system/shop.service
```

Add the following content to the service file:

```shell
[Unit]
Description=Gunicorn instance to server Shop Django app
After=network.target

[Service]
User=<Username>
Group=www-data
WorkingDirectory=/home/<Username>/shop
Environment="PATH=/home/<Username>/shop/.venv/bin"
ExecStart=/home/<Username>/shop/.venv/bin/gunicorn --workers 4 --bind 0.0.0.0:8000 shop.wsgi

[Install]
WantedBy=multi-user.target
```

Start and enable the shop service:

```shell
sudo systemctl daemon-reload
sudo systemctl start shop
sudo systemctl enable shop
```

Install nginx:

```shell
sudo apt install nginx
```

Create nginx config for `API`

```shell
sudo vi /etc/nginx/sites-available/shop-api
```

Add the following content to the config file:

```shell
server {
    listen 80;
    server_name <IP address or domain name>;

    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name <IP address or domain name>;

    error_log /home/<Username>/shop/django-error.log;
    access_log /home/<Username>/shop/django-access.log;

    ssl_certificate <Path to cert>;
    ssl_certificate_key <Path to key>;

    location /static/ {
        alias /home/<Username>/shop/static/;
    }

    location /media/ {
        alias /home/<Username>/shop/media/;
    }

    location / {
        include proxy_params;
        proxy_pass <Port or Socket>;
    }
}
```

Create nginx config for `Vue`

```shell
sudo vi /etc/nginx/sites-available/shop
```

Add the following content to the config file:

```shell
server {
    listen 80;
    server_name <IP address or domain name>;

    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name <IP address or domain name>;

    error_log /home/<Username>/shop/vue-error.log;
    access_log /home/<Username>/shop/vue-access.log;

    ssl_certificate <Path to cert>;
    ssl_certificate_key <Path to key>;

    charset utf-8;
    root /home/<Username>/shop/dist;
    index index.html index.htm;

    location / {
        root /home/<Username>/shop/dist;
        try_files $uri /index.html;
    }
}
```

Soft link conf files and restart nginx

```shell
sudo ln -s /etc/nginx/sites-available/shop-api /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/shop /etc/nginx/sites-enabled/
sudo nginx -s reload
```
