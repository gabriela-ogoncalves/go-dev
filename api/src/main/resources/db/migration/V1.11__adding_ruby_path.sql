INSERT INTO "path" ("name", description) VALUES('Ruby', 'Front-end');

INSERT INTO topic ("name", description, "path") VALUES('Sintaxe Básica', 'Conceitos básicos de sintaxe da linguagem.', (SELECT id from "path" where name='Ruby'));
INSERT INTO topic ("name", description, "path") VALUES('Variáveis', 'Variáveis em Ruby e os seus tipos.', (SELECT id from "path" where name='Ruby'));
INSERT INTO topic ("name", description, "path") VALUES('Condicionais', 'Declarações e expressões condicionais.', (SELECT id from "path" where name='Ruby'));
INSERT INTO topic ("name", description, "path") VALUES('Loops', 'Funcionamento de loops no Ruby.', (SELECT id from "path" where name='Ruby'));
INSERT INTO topic ("name", description, "path") VALUES('Funções', 'Conceitos básicos de funções no Ruby.', (SELECT id from "path" where name='Ruby'));
INSERT INTO topic ("name", description, "path") VALUES('Exceções', 'Exceções e conversão de dados no Ruby.', (SELECT id from "path" where name='Ruby'));


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Regras básicas de sintaxe do Ruby.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/bLDH3NypOVo?si=w5vUF_Lo7cUXWRdq',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Sintaxe Básica - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'B',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Sintaxe Básica - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'A',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e atribuição de variáveis no Ruby.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/bLDH3NypOVo?si=w5vUF_Lo7cUXWRdq',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Variáveis - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'C',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Ruby'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Controle de fluxo através de condicionais.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/bLDH3NypOVo?si=w5vUF_Lo7cUXWRdq',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Condicionais - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'A',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Condicionais - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'D',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Descrição do funcionamento de loops no Ruby.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/bLDH3NypOVo?si=w5vUF_Lo7cUXWRdq',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Descrição do funcionamento de loops no Ruby.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/bLDH3NypOVo?si=w5vUF_Lo7cUXWRdq',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Loops - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'E',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Ruby'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e funcionamento de funções no Ruby.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/bLDH3NypOVo?si=w5vUF_Lo7cUXWRdq',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Funções - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'D',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Ruby'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Erros e Exceções no Ruby.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/bLDH3NypOVo?si=w5vUF_Lo7cUXWRdq',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'B',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'A',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Ruby'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Ruby - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'E',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Ruby'))
);
