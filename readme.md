# README (English)
## What is this ?
Sample Program that contain Laravel / Nuxt.js that using JWT-auth, and using Docker.

## How To Setup

### Preparation
 - Composer
 - Npm(You can use Yarn in addition to Npm)
 - Docker

### First Step
Create dependent file for PHP(Laravel)
```
composer intsall
```

Create dependent file for JS(node_module)
```
npm install
```

Generate static pages by Nuxt.js
(This pages use http://localhost:8000/)
```
npm run generate
```

### Lunch Docker
```
docker-compose up -d
```

### Create Databases
```
docker-compose exec app mysql -h mysql -uroot
create database laravel;
```

### Migration
```
docker exec -it laravel-nuxt-docker_app_1 bash
php artisan migrate
```

### Access Develop Web Site
```
npm run dev
http://localhost:3000/
```
```
docker-compose up -d
http://localhost:8000/
```


# README (日本語)
## これは何？
LaravelとNuxt.jsを用いたサンプルプログラムです。
LaravelとNuxt.jsの認証にはJWT-Authを用いています。
開発環境にはDockerを用いていて、コマンド1つで開発環境が立ち上がります。

## セットアップ方法

### 準備
以下が必要になります。
 - Composer
 - Npm(Yarnを代わりに使うこともできます)
 - Docker

### 導入
Composerを用いて依存ファイルを作成してください。（主にLaravel）
```
composer intsall
```

Npmを用いて依存ファイルを作成してください。（主にNuxt.js）
```
npm install
```

Nuxt.jsを用いて静的ページを生成してください。
（右記にアクセスした際に使います　http://localhost:8000/）
```
npm run generate
```

### 開発環境構築
```
docker-compose up -d
```

### データベース作成
MySQLにアクセスして、Laravelが使うDBを作成してください。
```
docker-compose exec app mysql -h mysql -uroot
create database laravel;
```

### Laravelのマイグレーション
Laravelからマイグレーションを実行してDBにテーブルを作成してください
```
docker exec -it laravel-nuxt-docker_app_1 bash
php artisan migrate
```

### 開発環境にアクセス
```
npm run dev
http://localhost:3000/
```
```
docker-compose up -d
http://localhost:8000/
```
