CREATE TABLE IF NOT EXISTS public."Artistas"
(
    id integer NOT NULL,
    nombre text,
    descripcion text,
    foto text,
    PRIMARY KEY (id)
);

ALTER TABLE public."Artistas"
    OWNER to postgres;

INSERT INTO public."Artistas"(
	"id", nombre, descripcion, foto)
	VALUES (1, 'Alvaro Sarmiento', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','retratos(2).jpg');
INSERT INTO public."Artistas"(
	"id", nombre, descripcion, foto)
	VALUES (2, 'Maria Serna', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'retratos.jpg');
INSERT INTO public."Artistas"(
	"id", nombre, descripcion, foto)
	VALUES (3, 'Lorenza Gonzalez', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'retratos(1).jpg');
INSERT INTO public."Artistas"(
	"id", nombre, descripcion, foto)
	VALUES (4, 'Juan Vidal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'retratos(3).jpg');
