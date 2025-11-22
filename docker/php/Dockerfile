FROM php:8.4-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    zip \
    libzip-dev \
    libonig-dev \
    libpq-dev \
    libxml2-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl gd

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js and npm (using nodesource)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

WORKDIR /var/www/html

# Copy existing code
COPY . /var/www/html

# Expose php-fpm port
EXPOSE 9000

CMD ["php-fpm"]
