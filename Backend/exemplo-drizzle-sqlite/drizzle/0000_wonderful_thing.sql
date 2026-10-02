CREATE TABLE `usuarios` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nome` text NOT NULL,
	`email` text NOT NULL,
	`criado_em` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `usuarios_email_unique` ON `usuarios` (`email`);--> statement-breakpoint
CREATE TABLE `cursos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`titulo` text NOT NULL,
	`carga_horaria` integer DEFAULT 40 NOT NULL,
	`ativo` integer DEFAULT true NOT NULL,
	`resumo` text GENERATED ALWAYS AS ("titulo" || ' (' || "carga_horaria" || 'h)') STORED,
	`prerequisito_id` integer,
	FOREIGN KEY (`prerequisito_id`) REFERENCES `cursos`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cursos_titulo_unique` ON `cursos` (`titulo`);--> statement-breakpoint
CREATE TABLE `matriculas` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`usuario_id` integer NOT NULL,
	`curso_id` integer NOT NULL,
	`status` text DEFAULT 'ativa' NOT NULL,
	`nota` real,
	`aprovado` integer GENERATED ALWAYS AS ("nota" is not null and "nota" >= 6) STORED,
	`matriculado_em` integer NOT NULL,
	FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`curso_id`) REFERENCES `cursos`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `matriculas_usuario_curso_idx` ON `matriculas` (`usuario_id`,`curso_id`);--> statement-breakpoint
CREATE INDEX `matriculas_curso_idx` ON `matriculas` (`curso_id`);