git status

# HEAD é o ultimo commit 
git reset --soft HEAD~2

# Dar o git rebase de forma interativa
git rebase -i HEAD~2

# Resetar as alterações em stage
git reset  -- nomeDoArquivo

# Se você deu um git add e não quer commitar alguns arquivos
git add -i

# Se você quer commitar somente algumas alterações do arquivo
# - para ver as mudanças nos arquivos
git diff 

# - comando para o git dividir as alterações
git add -p