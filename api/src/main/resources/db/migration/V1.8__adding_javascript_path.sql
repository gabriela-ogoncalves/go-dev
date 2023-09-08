INSERT INTO "path" ("name", description) VALUES('Javascript', 'Front-end');

INSERT INTO topic ("name", description, "path") VALUES('Sintaxe Básica', 'Conceitos básicos de sintaxe da linguagem.', (SELECT id from "path" where name='Javascript'));
INSERT INTO topic ("name", description, "path") VALUES('Variáveis', 'Variáveis em Javascript e os seus tipos.', (SELECT id from "path" where name='Javascript'));
INSERT INTO topic ("name", description, "path") VALUES('Condicionais', 'Declarações e expressões condicionais.', (SELECT id from "path" where name='Javascript'));
INSERT INTO topic ("name", description, "path") VALUES('Loops', 'Funcionamento de loops no Javascript.', (SELECT id from "path" where name='Javascript'));
INSERT INTO topic ("name", description, "path") VALUES('Funções', 'Conceitos básicos de funções no Javascript.', (SELECT id from "path" where name='Javascript'));
INSERT INTO topic ("name", description, "path") VALUES('Exceções', 'Exceções e conversão de dados no Javascript.', (SELECT id from "path" where name='Javascript'));


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Regras básicas de sintaxe do Javascript.',
	'Esta aula traz detalhes sobre as regras básicas de sintaxe do Javascript, como identificadores, palavras reservadas, entre outros.',
	'https://www.youtube.com/embed/QEuoSMBM6yo?si=xV1wrHWqRPObIT7z',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Sintaxe Básica - Javascript - 1.',
	'Selecione a chamada da função que pode ser utilizada para enviar um conteúdo para o console.',
	ARRAY ['print()', 'console.log()', 'System.out.println();', 'printf()', 'cout <<'],
	'B',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Javascript'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e atribuição de variáveis no Javascript.',
	'Esta aula descreve o funcionamento das variáveis no Javascript. Como declarar, atribuir, referenciar, e utilizar operações sobre elas.',
	'https://www.youtube.com/embed/YSf_Ck1t4zg?si=PNco5AA-ffxfsTIT',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Variáveis - Javascript - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'C',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Javascript'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Controle de fluxo através de condicionais.',
	'Esta aula descreve o funcionamento das condicionais e sua aplicação no controle de fluxo do Javascript.',
	'https://www.youtube.com/embed/1bFpiRU7q2g?si=ljHLLHcMOviAtE-B',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Condicionais - Javascript - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'A',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Condicionais - Javascript - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'D',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Descrição do funcionamento de loops no Javascript.',
	'Esta aula descreve o funcionamento de loops no Javascript.',
	'https://www.youtube.com/embed/rL8IrB3EY_c?si=jDIvScefiAlRunmB',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Descrição do funcionamento de loops aninhados no Javascript.',
	'Esta aula descreve o funcionamento de loops aninhados no Javascript.',
	'https://www.youtube.com/embed/0C3K9DAalCs?si=5EXCzLGyJRpy3oLB',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Loops - Javascript - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'E',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Javascript'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e funcionamento de funções no Javascript.',
	'Esta aula explica como declarar e utilizar funções no Javascript.',
	'https://www.youtube.com/embed/xaR4VUq1ih8?si=9VfTltecu0NllETC',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Funções - Javascript - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'D',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Javascript'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Erros e Exceções no Javascript.',
	'Esta aula descreve os tipos de erros na linguagem e, quando possivel, como trata-los.',
	'https://www.youtube.com/embed/KpA6Idl9-a0?si=ds_SOZKWZTAByNBZ',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Javascript - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'B',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Javascript - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'A',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Javascript'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Javascript - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'E',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Javascript'))
);
