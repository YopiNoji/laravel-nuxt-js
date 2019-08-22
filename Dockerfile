FROM ubuntu:18.04

# ubuntuユーザーを追加
RUN useradd -m -s /bin/bash -u 1000 -g users ubuntu

# provisioning.sh をローカルからコピー
COPY scripts/provisioning.sh /tmp/provisioning.sh

# /tmpフォルダの権限を変更
WORKDIR /tmp
USER root
RUN chown -R ubuntu:users /tmp
RUN chmod -R 777 /tmp

# provisioning.sh による必要ライブラリのインストール
RUN /tmp/provisioning.sh

# nginxの初期設定を削除
RUN rm /etc/nginx/sites-enabled/default
# php-fpmの初期設定を削除
RUN rm /etc/php/7.2/fpm/pool.d/www.conf

RUN apt install sudo
# ubuntuでのsudoのパスワード要求をしないように
RUN echo "ubuntu ALL=(ALL:ALL) NOPASSWD:ALL" >> /etc/sudoers
RUN chown -R ubuntu:users /srv

