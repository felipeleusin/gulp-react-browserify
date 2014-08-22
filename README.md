Gulp React Browserify Template
==============

Template de aplicativo para utilizar react + browserify usando gulp.

## Requisitos

```
npm install -g gulp
```

## Comandos

* gulp - monta o site na pasta dist
* gulp watch - cria um servidor de desenvolvimento e abre no navegador

## Deploy

Para dar deploy executar o comando que será montado o site na pasta dist e enviado para o repositório s3.

```
gulp deploy --aws-access-key=SUA_CHAVE_AWS --aws-secret-key=SEU_SEGREDO_AWS 
```

