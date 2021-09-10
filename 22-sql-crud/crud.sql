INSERT INTO cliente 
(nome, telefone, endereço)
VALUES 
(‘Joana das Flores’, 
‘12345678’, ‘Rua das Flores’);

SELECT * FROM cliente;

UPDATE nome_tabela
SET nome_coluna = 'novo_valor'
WHERE nome_coluna = 'antigo_valor';

DELETE FROM nome_tabela
WHERE (condição)