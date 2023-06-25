INSERT INTO "path" ("name", description) VALUES('Java', 'Back-end');

INSERT INTO topic ("name", description, "path") VALUES('Sintaxe Básica', 'Conceitos básicos de sintaxe da linguagem.', (SELECT id from "path" where name='Java'));
INSERT INTO topic ("name", description, "path") VALUES('Variáveis', 'Variáveis em Java e os seus tipos.', (SELECT id from "path" where name='Java'));
INSERT INTO topic ("name", description, "path") VALUES('Condicionais', 'Declarações e expressões condicionais.', (SELECT id from "path" where name='Java'));
INSERT INTO topic ("name", description, "path") VALUES('Loops', 'Funcionamento de loops no Java.', (SELECT id from "path" where name='Java'));
INSERT INTO topic ("name", description, "path") VALUES('Funções', 'Conceitos básicos de funções no Java.', (SELECT id from "path" where name='Java'));
INSERT INTO topic ("name", description, "path") VALUES('Exceções', 'Exceções e conversão de dados no Java.', (SELECT id from "path" where name='Java'));
INSERT INTO topic ("name", description, "path") VALUES('Orientação a Objetos', 'Conceitos de orientação a objetos no Java.', (SELECT id from "path" where name='Java'));
INSERT INTO topic ("name", description, "path") VALUES('Classes', 'Funcionamento de objetos e suas classes no Java.', (SELECT id from "path" where name='Java'));
INSERT INTO topic ("name", description, "path") VALUES('Interfaces', 'Definindo interfaces no Java.', (SELECT id from "path" where name='Java'));


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Regras básicas de sintaxe do Java.',
	'Esta aula trás detalhes sobre as regras básicas de sintaxe do Java, como identificadores, palavras reservadas, entre outros.',
	'https://www.youtube.com/embed/q-XM8NBHYcs',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Sintaxe Básica - Java - 1.',
	'Selecione a chamada da função que pode ser utilizada para enviar um conteúdo para o console.',
	ARRAY ['print()', 'console.log()', 'System.out.println();', 'printf()', 'cout <<'],
	'C',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Java'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e atribuição de variáveis no Java.',
	'Esta aula descreve o funcionamento das variáveis no Java. Como declarar, atribuir, referenciar, e utilizar operações sobre elas.',
	'https://www.youtube.com/embed/btgjFETF5QA',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Variáveis - Python - 1.',
	'Qual das opções não é uma declaração de variável válida no Java.',
	ARRAY ['int $dd = 100;', 'byte b;', 'n = 4;', 'string id = \"test\";', 'boolean b = false;'],
	'C',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Java'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Controle de fluxo através de condicionais.',
	'Esta aula descreve o funcionamento das condicionais e sua aplicação no controle de fluxo do Java.',
	'https://www.youtube.com/embed/stA3kLdNndI',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Condicionais - Java - 1.',
	'Dada uma estrutura switch-case, qual a palavra-chave para interromper a execução da árvore de condicionais.',
	ARRAY ['break', 'pass', 'return', 'default', 'goto'],
	'A',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Java'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Descrição do funcionamento de loops no Java.',
	'Esta aula descreve o funcionamento de loops no Java.',
	'https://www.youtube.com/embed/hEl67ZAU_Hg',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Loops - Java - 1.',
	'Selecione a palavra reservada para executar a próxima iteração de um loop.',
	ARRAY ['pass', 'return', 'continue', 'break', 'next'],
	'C',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Java'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e funcionamento de funções no Java.',
	'Esta aula explica como declarar e utilizar funções no Java.',
	'https://www.youtube.com/embed/2gcNaS6s4UI',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Utilização de parâmetros e argumentos nas funções do Java.',
	'Esta aula explica de que forma podemos usar parâmetros nas funções do Java.',
	'https://www.youtube.com/embed/2hCtm9V-RvY',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Retorno de funções no Java.',
	'Esta aula detalha como funciona o retorno de valores das funções no Java.',
	'https://www.youtube.com/embed/IusVWbETMgE',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Funções - Java - 1.',
	'Qual o tipo de retorno válido para uma função cuja expressão de retorno é `return x % 2 == 0 ? "even" : "odd";`
  ',
	ARRAY ['int', 'boolean', 'string', 'Tuple<int, boolean>', 'char'],
	'C',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Java'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Erros e Exceções no Java.',
	'Esta aula descreve os tipos de erros na linguagem e, quando possivel, como trata-los.',
	'https://www.youtube.com/embed/ld2C4GcAtsg',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Java - 1.',
	'O que acontece ao tentar acessar uma posição inexistente de uma lista em um código fora de um bloco try/catch',
	ARRAY ['O último valor da lista é retornado.', 'Uma exceção é lançada e a execução do programa é interrompida', 'Uma exceção é lançada e a execução do programa continua', 'Se a lista não estiver vazia, uma exceção é lançada', 'O valor null é retornado'],
	'B',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Java'))
);



INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Introdução à Orientação a Objetos com Java.',
	'Esta aula é uma introdução sobre a utilização dos conceitos de orientação de objetos utilizando Java.',
	'https://www.youtube.com/embed/cVQ3bGsBvQY',
	(select id from topic where "name" = 'Orientação a Objetos' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Orientação a Objetos - Java - 1.',
	'A programação orientada a objetos é um estilo de programação em que você organiza seu programa em torno de _.',
	ARRAY ['Funções', 'Ações', 'Dados', 'Objetos', 'Classes'],
	'D',
	(select id from topic where "name" = 'Orientação a Objetos' and "path" = (SELECT id from "path" where name='Java'))
);



INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Classes no Java.',
	'Esta aula descreve a utilização de classes no Java.',
	'https://www.youtube.com/embed/ohmHbdUhAGc',
	(select id from topic where "name" = 'Classes' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Classes - Java - 1.',
	'Qual modificador de acesso torna as variáveis de métodos de uma classe acessiveis apenas no escopo onde são declaradas.',
	ARRAY ['public', 'virtual', 'private', 'nonmodifier', 'protected'],
	'C',
	(select id from topic where "name" = 'Classes' and "path" = (SELECT id from "path" where name='Java'))
);



INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Interfaces no Java.',
	'Esta aula descreve a utilização de Interfaces no Java.',
	'https://www.youtube.com/embed/6uLLfRNgRA4',
	(select id from topic where "name" = 'Interfaces' and "path" = (SELECT id from "path" where name='Java'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Interfaces - Java - 1.',
	'Qual é a palavra chave que possibilita a utilização de uma interface.',
	ARRAY ['extends', 'import', 'return', 'implements', 'inherits'],
	'D',
	(select id from topic where "name" = 'Interfaces' and "path" = (SELECT id from "path" where name='Java'))
);