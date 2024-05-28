/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 16.1      */
/*  Created On : 28-may.-2024 4:24:06 a. m.             */
/*  DBMS       : PostgreSQL                             */
/* ---------------------------------------------------- */

/* Drop Tables */

DROP TABLE IF EXISTS "Area" CASCADE;
DROP TABLE IF EXISTS "Contrato" CASCADE;
DROP TABLE IF EXISTS "Espacio" CASCADE;
DROP TABLE IF EXISTS "Pago" CASCADE;
DROP TABLE IF EXISTS "Parqueadero" CASCADE;
DROP TABLE IF EXISTS "Propietario" CASCADE;
DROP TABLE IF EXISTS "Propietario_vehiculo" CASCADE;
DROP TABLE IF EXISTS "Registro" CASCADE;
DROP TABLE IF EXISTS "Tarifa" CASCADE;
DROP TABLE IF EXISTS "Vehiculo" CASCADE;
DROP TABLE IF EXISTS "Vigilante" CASCADE;

/* Create Tables */

CREATE TABLE "Area"
(
    k_num_area numeric(1) NOT NULL,
    k_iden_parq numeric(4) NULL,
    k_num_iden_vig numeric(10) NULL,
    k_tipo_iden_vig varchar(2) NULL,
    k_num_espacio numeric(2) NULL,
    PRIMARY KEY (k_num_area),
    CHECK (k_num_area >= 1),
    CHECK (k_iden_parq >= 1),
    CHECK (k_tipo_iden_vig IN ('CC','CE'))
);

CREATE TABLE "Contrato"
(
    k_num_contrato numeric(4) NOT NULL,
    k_placa_veh varchar(6) NULL,
    i_tipo_contrato varchar(1) NULL,
    k_iden_parq numeric(4) NOT NULL,
    k_num_iden_prop numeric(10) NULL,
    k_tipo_iden_prop varchar(2) NULL,
    PRIMARY KEY (k_num_contrato),
    CHECK (k_num_contrato >= 1),
    CHECK (k_iden_parq >= 1),
    CHECK (i_tipo_contrato IN ('D','S','M','A'))
);

CREATE TABLE "Espacio"
(
    k_v_tipo_vehiculo varchar(10) NULL,
    k_num_espacio numeric(2) NOT NULL,
    k_placa_veh varchar(6) NULL,
    k_num_area numeric(1) NULL,
    v_num_cupos numeric(3) NULL,
    PRIMARY KEY (k_num_espacio),
    CHECK (k_num_espacio >= 1),
    CHECK (v_num_cupos >= 0)
);

CREATE TABLE "Pago"
(
    id_pago numeric(20) NOT NULL,
    f_pago varchar(20) NULL,
    v_pagado_total numeric(7) NULL,
    f_forma_pago varchar(50) NULL,
    PRIMARY KEY (id_pago)
);

CREATE TABLE "Parqueadero"
(
    k_iden_parq numeric(4) NOT NULL,
    v_zona_ciudad numeric(2) NULL,
    v_dir_parqueadero varchar(20) NULL,
    v_nivel_parq numeric(1) NULL,
    i_tipo varchar(1) NULL,
    id_tarifa numeric(3) NULL,
    PRIMARY KEY (k_iden_parq),
    CHECK (k_iden_parq >= 1),
    CHECK (v_zona_ciudad >= 1),
    CHECK (v_nivel_parq >= 1 AND v_nivel_parq < 10),
    CHECK (i_tipo IN ('S','A'))
);

CREATE TABLE "Propietario"
(
    k_num_iden_prop numeric(10) NOT NULL,
    k_tipo_iden_prop varchar(2) NOT NULL,
    n_primer_nom varchar(20) NOT NULL,
    n_segundo_nom varchar(20) NOT NULL,
    n_primer_ape varchar(20) NULL,
    n_segundo_ape varchar(20) NOT NULL,
    t_num_contacto numeric(10) NOT NULL,
    PRIMARY KEY (k_num_iden_prop, k_tipo_iden_prop)
);

CREATE TABLE "Propietario_vehiculo"
(
    k_num_iden_prop numeric(10) NOT NULL,
    k_num_contrato numeric(4) NULL,
    k_placa_veh varchar(6) NOT NULL,
    k_tipo_iden_prop varchar(2) NOT NULL,
    PRIMARY KEY (k_num_iden_prop, k_placa_veh, k_tipo_iden_prop)
);

CREATE TABLE "Registro"
(
    k_num_registro numeric(10) NOT NULL,
    k_placa_veh varchar(6) NULL,
    v_pago_total numeric(7) NULL,
    v_tarifa numeric(3) NULL,
    f_hora_in date NULL,
    f_hora_out date NULL,
    id_persona numeric(20) NULL,
    k_num_espacio numeric(2) NULL,
    PRIMARY KEY (k_num_registro),
    CHECK (k_num_registro >= 1),
    CHECK (v_pago_total >= v_tarifa)
);

CREATE TABLE "Tarifa"
(
    id_tarifa numeric(3) NOT NULL,
    id_parqueadora varchar(20) NULL,
    k_valor numeric(7) NULL,
    f_año date NULL,
    PRIMARY KEY (id_tarifa)
);

CREATE TABLE "Vehiculo"
(
    k_placa_veh varchar(6) NOT NULL,
    k_num_contrato numeric(40) NULL,
    v_color_vehiculo varchar(10) NULL,
    v_marca_vehiculo varchar(10) NULL,
    v_modelo_vehiculo numeric(10) NULL,
    v_tipo_vehiculo varchar(50) NULL,
    PRIMARY KEY (k_placa_veh)
);

CREATE TABLE "Vigilante"
(
    k_num_iden_vig numeric(10) NOT NULL,
    k_num_area numeric(1) NULL,
    k_tipo_iden_vig varchar(2) NOT NULL,
    n_primer_nom varchar(20) NULL,
    n_segundo_nom varchar(20) NOT NULL,
    n_primer_ape varchar(20) NULL,
    n_segundo_ape varchar(20) NOT NULL,
    i_compa_can varchar(1) NULL,
    k_iden_parq numeric(4) NULL,
    PRIMARY KEY (k_num_iden_vig, k_tipo_iden_vig),
    CHECK (k_num_iden_vig >= 1),
    CHECK (k_num_area >= 1),
    CHECK (k_tipo_iden_vig IN ('CC','CE')),
    CHECK (i_compa_can IN ('S','N'))
);

/* Create Foreign Key Constraints */

ALTER TABLE "Area" ADD CONSTRAINT "FK_Area_Espacio"
    FOREIGN KEY ("k_num_espacio") REFERENCES "Espacio" ("k_num_espacio") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Area" ADD CONSTRAINT "FK_Area_Parqueadero"
    FOREIGN KEY ("k_iden_parq") REFERENCES "Parqueadero" ("k_iden_parq") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Area" ADD CONSTRAINT "FK_Area_Vigilante"
    FOREIGN KEY ("k_num_iden_vig","k_tipo_iden_vig") REFERENCES "Vigilante" ("k_num_iden_vig","k_tipo_iden_vig") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Contrato" ADD CONSTRAINT "FK_Contrato_Parqueadero"
    FOREIGN KEY ("k_iden_parq") REFERENCES "Parqueadero" ("k_iden_parq") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Contrato" ADD CONSTRAINT "FK_Contrato_Propietario"
    FOREIGN KEY ("k_num_iden_prop","k_tipo_iden_prop") REFERENCES "Propietario" ("k_num_iden_prop","k_tipo_iden_prop") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Parqueadero" ADD CONSTRAINT "FK_Parqueadero_Tarifa"
    FOREIGN KEY ("id_tarifa") REFERENCES "Tarifa" ("id_tarifa") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Propietario_vehiculo" ADD CONSTRAINT "FK_Propietario_vehiculo_Propietario"
    FOREIGN KEY ("k_num_iden_prop","k_tipo_iden_prop") REFERENCES "Propietario" ("k_num_iden_prop","k_tipo_iden_prop") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Propietario_vehiculo" ADD CONSTRAINT "FK_Propietario_vehiculo_Vehiculo"
    FOREIGN KEY ("k_placa_veh") REFERENCES "Vehiculo" ("k_placa_veh") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Registro" ADD CONSTRAINT "FK_Registro_Espacio"
    FOREIGN KEY ("k_num_espacio") REFERENCES "Espacio" ("k_num_espacio") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "Registro" ADD CONSTRAINT "FK_Registro_Pago"
    FOREIGN KEY ("id_persona") REFERENCES "Pago" ("id_pago") ON DELETE NO ACTION ON UPDATE NO ACTION;
