# Git Commands

git init - Cria um novo repositorio
git status - Vê as mudanças no seu projeto
git add . - adiciona os arquivos para o staging area
git commit "texto do commit" - cria um novo commit com os arquivos que estavam na staging area
git log - Vê os commits recentes

#Heroku
heroku login - loga no heroku para associar sua conta ao projeto
heroku create th-expensify - cria uma referencia no heroku pro projeto com o nome th-expensify
git push heroku main/master - faz o git publicar no heroku para a main ou master depende da versão do heroku

heroku config - verificar as variaveis de ambiente do heroku
heroku config:set Key=value - configura uma variavel de ambiente
heroku config:unset Key - remove uma variavel
