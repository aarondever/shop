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
User=<username>
Group=www-data
WorkingDirectory=/home/<username>/shop
Environment="PATH=/home/<username>/shop/.venv/bin"
ExecStart=/home/<username>/shop/.venv/bin/gunicorn --workers 4 --bind 0.0.0.0:8000 shop.wsgi

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

Create nginx config for `Django`

```shell
sudo vi /etc/nginx/sites-available/django.conf
```

Add the following content to the config file:

```shell
server {
    listen 80;
    server_name <Your IP address or domain name>;

    location /static/ {
        alias /home/<username>/shop/static/;
    }

    location /media/ {
        alias /home/<username>/shop/media/;
    }

    location / {
        include proxy_params;
        proxy_pass http://localhost:8000;
    }
}
```

Create nginx config for `Vue`

```shell
sudo vi /etc/nginx/sites-available/vue.conf
```

Add the following content to the config file:

```shell
server {
    listen 80;
    server_name <Your IP address or domain name>;

    charset utf-8;
    root /home/<username>/shop/dist;
    index index.html index.htm;

    location / {
        root /home/<username>/shop/dist;
        try_files $uri /index.html;
    }
}
```

Soft link conf files and restart nginx

```shell
sudo ln -s /etc/nginx/sites-available/django.conf /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/vue.conf /etc/nginx/sites-enabled/
sudo nginx -s reload
```
