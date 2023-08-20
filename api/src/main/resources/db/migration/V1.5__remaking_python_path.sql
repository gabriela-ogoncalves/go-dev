DELETE FROM "users_exercise";
DELETE FROM "exercise";
DELETE FROM "users_lesson";
DELETE FROM "lesson";
DELETE FROM "topic";
DELETE FROM "path";

ALTER TABLE lesson ALTER COLUMN name TYPE varchar(100);
INSERT INTO "path" ("name", description) VALUES('Python', 'Back-end');

INSERT INTO topic ("name", description, "path") VALUES('Sintaxe Básica', 'Conceitos básicos de sintaxe da linguagem.', (SELECT id from "path" where name='Python'));
INSERT INTO topic ("name", description, "path") VALUES('Variáveis', 'Variáveis em Python e os seus tipos.', (SELECT id from "path" where name='Python'));
INSERT INTO topic ("name", description, "path") VALUES('Condicionais', 'Declarações e expressões condicionais.', (SELECT id from "path" where name='Python'));
INSERT INTO topic ("name", description, "path") VALUES('Loops', 'Funcionamento de loops no Python.', (SELECT id from "path" where name='Python'));
INSERT INTO topic ("name", description, "path") VALUES('Funções', 'Conceitos básicos de funções no Python.', (SELECT id from "path" where name='Python'));
INSERT INTO topic ("name", description, "path") VALUES('Estruturas de Dados', 'Estruturas de Dados básicas já fornecidas pela linguagem.', (SELECT id from "path" where name='Python'));
INSERT INTO topic ("name", description, "path") VALUES('Exceções', 'Exceções e conversão de dados no Python.', (SELECT id from "path" where name='Python'));


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Regras básicas de sintaxe do Python.',
	'Esta aula trás detalhes sobre as regras básicas de sintaxe do Python, como identificadores, palavras reservadas, indentação, entre outros.',
	'https://www.youtube.com/watch?v=WWV3cFi3mzQ',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Python'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Sintaxe Básica - Python - 1.',
	'Escolha o nome de variável que não é válido.',
	ARRAY ['firstVariable', '_200_var', 'numbers', '@variable', '000200'],
	'D',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Python'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Sintaxe e funcionamento das variáveis no Python.',
	'Esta aula descreve o funcionamento das variáveis no Python. Como declarar, referenciar, e utilizar operações sobre elas.',
	'https://www.youtube.com/watch?v=Ns3gMxgXpVo',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Python'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Variáveis - Python - 1.',
	'Selecione a expressão que declara uma variável n que recebe o inteiro 100.',
	ARRAY ['int n = 100;', 'var n = 100;', 'n = 100', 'let n = 100', 'var n = 100.0;'],
	'C',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Python'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Controle de fluxo através de condicionais.',
	'Esta aula descreve o funcionamento das condicionais e sua aplicação no controle de fluxo do Python.',
	'https://www.youtube.com/watch?v=pfmzkkymZwo',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Python'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Utilização do match no Python.',
	'Esta aula explica o funcionamento do comando match e demonstra seus casos de uso.',
	'https://www.youtube.com/watch?v=scNNi4860kk',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Python'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Condicionais - Python - 1.',
	'Qual a expressão ideal para interromper a execução de uma função caso um valor n seja inválido para divisão por 2.',
	ARRAY ['if n % 2 != 0: return', 'if (n // 2): return;', 'n % 2 == 0 ? continue', 'if (n % 2 == 0): return;', 'if n // 2 != 0: return'],
	'A',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Python'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Descrição do funcionamento de loops no Python.',
	'Esta aula descreve o funcionamento de loops no Python.',
	'https://www.youtube.com/watch?v=grHpdxUwCHc',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Python'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Loops - Python - 1.',
	'Selecione a palavra reservada para executar a próxima iteração de um loop.',
	ARRAY ['pass', 'return', 'continue', 'break', 'next'],
	'C',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Python'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e funcionamento de funções no Python.',
	'Esta aula explica como declarar e utilizar funções no Python.',
	'https://www.youtube.com/watch?v=mb5OeMveUzg',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Python'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Funções - Python - 1.',
	'O que acontece quando a função não retorna um valor explicitamente:',
	ARRAY ['A função retornará um RuntimeError', 'A função retornará None', 'A função retornará True', 'A função será executada novamente, entrando em um loop infinito', 'A função retornará o último valor do seu escopo'],
	'B',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Python'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Diferenças entre as principais estruturas de dados disponiveis no Python.',
	'Esta aula descreve as principais estruturas de dados disponiveis no Python e destaca as diferenças entre elas.',
	'https://www.youtube.com/watch?v=0zYuLLIzPIQ',
	(select id from topic where "name" = 'Estruturas de Dados' and "path" = (SELECT id from "path" where name='Python'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Estruturas de Dados - Python - 1.',
	'Qual método já disponibilizado pela linguagem é ideal para remover itens de uma lista:',
	ARRAY ['.delete()', 'pop(my_list)', 'del(my_list)', '.pop()', '.fill(None)'],
	'D',
	(select id from topic where "name" = 'Estruturas de Dados' and "path" = (SELECT id from "path" where name='Python'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Erros e Exceções no Python.',
	'Esta aula descreve os tipos de erros na linguagem e, quando possivel, como trata-los.',
	'https://www.youtube.com/watch?v=h01u7A3lWZY',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Python'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Python - 1.',
	'O que acontece ao tentar acessar uma posição inexistente de uma lista em um código fora de um block try/except',
	ARRAY ['O último valor da lista é retornado.', 'Uma exceção é lançada e a execução do programa é interrompida', 'Uma exceção é lançada e a execução do programa continua', 'Se a lista não estiver vazia, uma exceção é lançada', 'O valor None é retornado'],
	'B',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Python'))
);