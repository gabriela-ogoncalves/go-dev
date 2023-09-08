INSERT INTO "path" ("name", description) VALUES('Golang', 'Back-end');

INSERT INTO topic ("name", description, "path") VALUES('Sintaxe Básica', 'Conceitos básicos de sintaxe da linguagem.', (SELECT id from "path" where name='Golang'));
INSERT INTO topic ("name", description, "path") VALUES('Variáveis', 'Variáveis em Golang e os seus tipos.', (SELECT id from "path" where name='Golang'));
INSERT INTO topic ("name", description, "path") VALUES('Condicionais', 'Declarações e expressões condicionais.', (SELECT id from "path" where name='Golang'));
INSERT INTO topic ("name", description, "path") VALUES('Loops', 'Funcionamento de loops no Golang.', (SELECT id from "path" where name='Golang'));
INSERT INTO topic ("name", description, "path") VALUES('Funções', 'Conceitos básicos de funções no Golang.', (SELECT id from "path" where name='Golang'));
INSERT INTO topic ("name", description, "path") VALUES('Exceções', 'Exceções e conversão de dados no Golang.', (SELECT id from "path" where name='Golang'));


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Regras básicas de sintaxe do Golang.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/WiGU_ZB-u0w?si=fyp_a4u7_ieTAfDg',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Sintaxe Básica - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'B',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Sintaxe Básica - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'A',
	(select id from topic where "name" = 'Sintaxe Básica' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e atribuição de variáveis no Golang.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/WiGU_ZB-u0w?si=fyp_a4u7_ieTAfDg',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Variáveis - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'C',
	(select id from topic where "name" = 'Variáveis' and "path" = (SELECT id from "path" where name='Golang'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Controle de fluxo através de condicionais.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/WiGU_ZB-u0w?si=fyp_a4u7_ieTAfDg',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Condicionais - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'A',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Condicionais - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'D',
	(select id from topic where "name" = 'Condicionais' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Descrição do funcionamento de loops no Golang.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/WiGU_ZB-u0w?si=fyp_a4u7_ieTAfDg',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Descrição do funcionamento de loops aninhados no Golang.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/WiGU_ZB-u0w?si=fyp_a4u7_ieTAfDg',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Loops - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'E',
	(select id from topic where "name" = 'Loops' and "path" = (SELECT id from "path" where name='Golang'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Declaração e funcionamento de funções no Golang.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/WiGU_ZB-u0w?si=fyp_a4u7_ieTAfDg',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Funções - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'D',
	(select id from topic where "name" = 'Funções' and "path" = (SELECT id from "path" where name='Golang'))
);


INSERT INTO lesson ("name", description, "source", topic) VALUES(
	'Erros e Exceções no Golang.',
	'Este é um exemplo de aula. O vídeo abaixo é apenas um teste de fluxo da aplicação. Em breve incluiremos dados reais para esta trilha!',
	'https://www.youtube.com/embed/WiGU_ZB-u0w?si=fyp_a4u7_ieTAfDg',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'B',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'A',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Golang'))
);

INSERT INTO exercise ("name", description, answers, correct_answer, topic) VALUES(
	'Exceções - Golang - 1.',
	'Esse é um exemplo de exercício. Escolha uma das opções abaixo para testar o fluxo. Em breve incluiremos exercícios reais para esta trilha.',
	ARRAY ['Primeira opção', 'Segunda opção', 'Terceira opção', 'Quarta opção', 'Quinta opção'],
	'E',
	(select id from topic where "name" = 'Exceções' and "path" = (SELECT id from "path" where name='Golang'))
);
