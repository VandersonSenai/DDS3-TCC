CREATE DATABASE `titanw25_japedidos_hml`;
USE `titanw25_japedidos_hml`;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(24) NOT NULL,
  `descricao` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`id`, `nome`, `descricao`) VALUES
(1,'Bebida','Produtos como refrigerantes, água, sucos.'),
(2,'Lanche','Produtos como hambúrger e similares.'),
(3,'Fritas','Produtos com batata-frita.'),
(4,'Sorvete','Produtos com sorvete.'),
(5,'Salgado','Produtos como coxinha, enrroladinho e outros.'),
(6,'Bolo',NULL),
(7,'Pão',NULL),
(8,'Torta',NULL),
(9,'Refeição',NULL),
(10,'Bala','Produtos doces e pequenos.'),
(11,'Gelatina',NULL);


--
-- Table structure for table `unidade`
--

DROP TABLE IF EXISTS `unidade`;
CREATE TABLE `unidade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(16) NOT NULL,
  `abreviacao` char(5) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `unidade`
--

INSERT INTO `unidade` VALUES (1,'Unidade','UND'),(2,'Cento','CENTO'),(3,'Dúzia','DUZIA'),(4,'Pacote','PCT'),(5,'Caixa','CX'),(6,'Grama','G'),(7,'Miligrama','MG'),(8,'Litros','L'),(9,'Mililitros','ML'),(10,'Kilograma','KG'),(11,'Garrafa','GRFA'),(12,'Pote','POTE');

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(48) NOT NULL,
  `login` varchar(20) NOT NULL UNIQUE,
  `senha` varchar(32) NOT NULL,
  `tipo` enum('administrador','atendente') NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` VALUES (1,'Administrador','admin','admin','administrador'),(2,'Atendente','atendente','senhaatendente','atendente'),(3,'Vanderson','vanderson','vanderson','administrador'),(4,'Thiago','thiago','thiago','administrador'),(5,'Valentin','valentin','valentin','administrador'),(6,'Franquilei','franquilei','franquilei','administrador'),(7,'Adriana Camargo','adriana','adriana','administrador');



--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `telefone` varchar(20) NOT NULL UNIQUE,
  `id_usuario_alt` int(11) DEFAULT NULL COMMENT 'Necessário para controle de alterações, conforme [RNF 06] Controle de alteração de dados',
  `dthr_alt` datetime DEFAULT NULL COMMENT 'Necessário para controle de alterações, conforme [RNF 06] Controle de alteração de dados',
  PRIMARY KEY (`id`),
  KEY `id_usuario_alt` (`id_usuario_alt`),
  CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`id_usuario_alt`) REFERENCES `usuario` (`id`)
);

--
-- Dumping data for table `cliente`
--

ALTER TABLE `cliente` DISABLE KEYS;
INSERT INTO `cliente` VALUES (1,'Yudy e Priscila','40028922',NULL,NULL),
(2,'Thiago Moura','33365759',NULL,NULL),
(3,'Maria Antônia Zeneide','33365758',NULL,NULL),
(4,'Roberto Marinho','33875845',NULL,NULL),
(5,'Mário Elias Silva','33335566',NULL,NULL),
(6,'Maria Conceição da Barra','34395548',NULL,NULL),
(7,'Gilberto Farias Júnio','27999449548',NULL,NULL),
(8,'Miriã Dias','27999457878',NULL,NULL),
(9,'Gisleide Andrade Pulquerio','27999147858',NULL,NULL),
(11,'Tenário Antônio Márcio','27999456473',NULL,NULL),
(12,'Richard Rodriges Meirelli','28998447868',NULL,NULL),
(13,'Walmira Andrade Ritchtofen','11999694578',NULL,NULL),
(14,'Antônio Márcio','27998485766',NULL,NULL),
(15,'Roberto Marciano Gaulês','2833245968',NULL,NULL),
(16,'Thiago Moura Baiense','27999483254',NULL,NULL),
(17,'José María Trindade','27998875468',NULL,NULL),
(18,'Rosemilda Andrade','40085922',NULL,NULL),
(19,'Robert Nathan','27999694567',NULL,NULL),
(20,'Silvana Moraes','30003000',NULL,NULL),
(21,'Marcelo Santos Tonário','27999554567',NULL,NULL),
(22,'João Alberto Malha','28999453567',NULL,NULL),
(23,'Roberto Marinho','2833365754',NULL,NULL),
(24,'Marjo Vinícius','2733365656',NULL,NULL),
(25,'Átila Marinho','2833465754',NULL,NULL);
ALTER TABLE `cliente` ENABLE KEYS;

--
-- Table structure for table `destinatario`
--

--
-- Table structure for table `est_andamento`
--

DROP TABLE IF EXISTS `est_andamento`;
CREATE TABLE `est_andamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(24) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `est_andamento`
--

INSERT INTO `est_andamento` VALUES (1,'Em aberto'),(2,'Aguardando pagamento'),(3,'Pago'),(4,'Em preparo/separação'),(5,'Aguardando envio'),(6,'Aguardando retirada'),(7,'Saiu para entrega'),(8,'Concluído'),(9,'Cancelado');


--
-- Temporary view structure for view `listacategorias`
--

DROP TABLE IF EXISTS `listacategorias`;
CREATE OR REPLACE VIEW `listaCategorias` AS    
SELECT  * from categoria order by nome;


--
-- Temporary view structure for view `listaunidades`
--

DROP TABLE IF EXISTS `listaunidades`;
CREATE OR REPLACE VIEW `listaUnidades` AS    
SELECT  * from unidade order BY nome;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE `pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `id_usuario_autor` int(11) NOT NULL,
  `dthr_criacao` datetime NOT NULL DEFAULT current_timestamp(),
  `id_usuario_alt` int(11) DEFAULT NULL COMMENT 'Necessário para controle de alterações, conforme [RNF 06] Controle de alteração de dados\nAo haver alteração em qualquer informação do pedido, deverá haver o registro do autor da alteração e do horário. Alterações no estado do pedido serão registrados independentemente\n',
  `dthr_alt` datetime DEFAULT NULL COMMENT 'Necessário para controle de alterações, conforme [RNF 06] Controle de alteração de dados\nAo haver alteração em qualquer informação do pedido, deverá haver o registro do autor da alteração e do horário. Alterações no estado do pedido serão registrados independentemente\n',
  `tipo_entrega` enum('ENVIO','RETIRADA') NOT NULL,
  `dthr_entregar` datetime NOT NULL,
  `preco_frete` decimal(8,2) NOT NULL DEFAULT 0.00,
  `tx_desconto` int(11) NOT NULL DEFAULT 0,
  `preco_final` decimal(10,2) NOT NULL,
  `dt_venc_pagamento` date DEFAULT NULL,
  `dt_pago` date DEFAULT NULL,
  `preco_custo_total` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`,`id_cliente`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`)
);

--
-- Dumping data for table `pedido`
--

INSERT INTO `pedido` VALUES (1,1,1,'2024-11-15 15:21:32',NULL,NULL,'ENVIO','2024-11-29 16:45:00',15.00,10,52.80,'2024-11-23','2024-11-16',27.00),
(2,2,1,'2024-11-16 11:37:28',NULL,NULL,'RETIRADA','2024-11-22 18:00:00',0.00,5,155.80,NULL,'2024-11-16',39.00),
(3,3,1,'2024-11-14 18:45:10',NULL,NULL,'ENVIO','2024-11-26 12:00:00',15.00,10,141.90,NULL,'2024-11-16',41.45),
(4,4,1,'2024-11-14 18:45:10',NULL,NULL,'RETIRADA','2024-11-19 05:00:00',0.00,0,18.75,NULL,'2024-11-16',13.15),
(5,5,1,'2024-11-16 14:09:29',NULL,NULL,'ENVIO','2024-11-16 14:00:00',0.00,10,264.60,NULL,'2024-11-16',93.00),
(6,6,1,'2024-11-16 14:14:23',NULL,NULL,'RETIRADA','2024-11-27 18:00:00',15.00,0,146.25,'2024-11-30','2024-11-16',54.45),
(7,7,1,'2024-11-16 14:23:05',NULL,NULL,'RETIRADA','2024-11-20 15:00:00',0.00,0,37.50,NULL,'2024-11-16',7.50),
(8,8,1,'2024-11-16 14:35:59',NULL,NULL,'ENVIO','2024-11-16 14:00:00',0.00,0,95.25,NULL,'2024-11-20',28.45),
(9,9,1,'2024-11-16 14:36:33',NULL,NULL,'ENVIO','2024-11-16 14:00:00',0.00,0,18.75,'2024-11-17','2024-11-20',3.75),
(11,11,1,'2024-11-16 14:38:36',1,'2024-11-19 20:17:21','ENVIO','2024-11-16 14:00:00',0.00,0,112.50,NULL,'2024-11-16',41.30),
(12,12,1,'2024-11-16 14:39:36',NULL,NULL,'RETIRADA','2024-11-16 14:00:00',0.00,5,88.35,'2024-11-27','2024-11-16',28.00),
(13,13,1,'2024-11-16 14:40:42',NULL,NULL,'ENVIO','2024-11-16 14:00:00',0.00,5,120.18,NULL,'2024-11-24',31.50),
(14,14,1,'2024-11-16 14:42:04',NULL,NULL,'RETIRADA','2024-11-28 17:00:00',0.00,0,55.50,NULL,'2024-11-16',20.50),
(15,15,1,'2024-11-17 11:57:45',NULL,NULL,'RETIRADA','2024-12-30 22:00:00',0.00,0,279.00,NULL,'2024-11-18',63.00),
(16,16,1,'2024-11-17 12:05:10',NULL,NULL,'ENVIO','2024-11-18 12:45:00',20.00,15,163.44,NULL,'2024-11-17',43.15),
(17,17,1,'2024-11-18 08:58:28',NULL,NULL,'ENVIO','2024-11-20 10:00:00',15.00,10,466.80,NULL,NULL,157.65),
(18,18,1,'2024-11-18 16:27:56',4,'2024-11-24 22:35:56','ENVIO','2024-11-24 16:00:00',0.00,10,12.60,NULL,'2024-11-20',9.00),
(19,19,1,'2024-11-24 15:21:49',NULL,NULL,'RETIRADA','2024-11-26 15:00:00',0.00,0,78.75,NULL,'2024-11-24',53.15),
(20,20,4,'2024-11-24 16:04:37',7,'2024-11-24 16:12:01','RETIRADA','2024-11-25 16:00:00',0.00,0,61.50,NULL,'2024-11-24',35.50),
(21,1,4,'2024-11-24 22:41:58',NULL,NULL,'ENVIO','2024-11-30 09:15:00',15.00,0,124.75,NULL,NULL,72.15),
(22,19,4,'2024-11-24 22:42:58',NULL,NULL,'ENVIO','2024-11-25 15:00:00',0.00,0,175.00,NULL,'2024-11-24',81.00),
(23,17,4,'2024-11-24 22:43:54',NULL,NULL,'ENVIO','2024-11-24 10:00:00',15.00,20,409.40,NULL,'2024-11-24',151.65),
(24,5,4,'2024-11-24 22:44:30',NULL,NULL,'ENVIO','2024-11-24 14:00:00',0.00,10,154.80,NULL,'2024-11-24',81.00),
(25,7,4,'2024-11-24 22:49:52',NULL,NULL,'RETIRADA','2024-11-26 15:00:00',12.50,10,129.28,NULL,NULL,52.15),
(26,16,4,'2024-11-24 22:50:53',NULL,NULL,'ENVIO','2024-12-31 10:45:00',20.00,50,182.50,NULL,NULL,77.50),
(27,20,4,'2024-11-24 22:51:43',NULL,NULL,'RETIRADA','2024-11-29 17:00:00',25.00,5,139.95,NULL,NULL,77.00),
(28,21,4,'2024-11-24 22:53:54',NULL,NULL,'ENVIO','2024-11-29 22:00:00',60.00,5,149.30,'2024-12-01',NULL,53.30),
(29,21,4,'2024-11-24 22:54:36',NULL,NULL,'ENVIO','2024-12-19 10:00:00',60.00,20,268.80,'2024-12-04',NULL,79.50),
(30,22,4,'2024-11-24 22:55:46',NULL,NULL,'RETIRADA','2024-12-02 11:15:00',25.00,10,319.75,NULL,'2024-11-24',130.30),
(31,23,4,'2024-11-24 22:58:55',4,'2024-11-24 23:01:56','RETIRADA','2024-11-25 22:00:00',0.00,15,157.68,'2024-12-01',NULL,84.50),
(32,23,4,'2024-11-24 22:59:17',4,'2024-11-24 23:02:04','RETIRADA','2024-12-22 22:00:00',0.00,0,134.50,'2024-12-25',NULL,53.00),
(33,24,4,'2024-11-24 23:00:18',NULL,NULL,'ENVIO','2024-11-24 22:00:00',0.00,70,48.00,NULL,'2024-11-24',100.00),
(34,23,4,'2024-11-24 23:00:34',4,'2024-11-24 23:02:15','RETIRADA','2024-11-24 22:00:00',0.00,0,127.50,NULL,'2024-11-24',46.00),
(35,25,4,'2024-11-24 23:01:03',NULL,NULL,'RETIRADA','2024-12-20 08:45:00',0.00,0,110.00,NULL,'2024-11-24',62.60),
(36,23,4,'2024-11-24 23:01:29',NULL,NULL,'RETIRADA','2025-01-08 22:00:00',0.00,0,133.00,NULL,NULL,85.00);

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` int(11) NOT NULL,
  `id_unidade` int(11) NOT NULL,
  `nome` varchar(32) NOT NULL,
  `preco_venda` decimal(8,2) NOT NULL DEFAULT 0.00,
  `preco_custo` decimal(8,2) NOT NULL DEFAULT 0.00,
  `id_usuario_alt` int(11) DEFAULT NULL,
  `dthr_alt` datetime DEFAULT NULL,
  `estado` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`id`,`id_unidade`,`id_categoria`),
  KEY `id_categoria` (`id_categoria`),
  KEY `id_unidade` (`id_unidade`),
  KEY `id_usuario_alt` (`id_usuario_alt`),
  CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`),
  CONSTRAINT `produto_ibfk_2` FOREIGN KEY (`id_unidade`) REFERENCES `unidade` (`id`),
  CONSTRAINT `produto_ibfk_3` FOREIGN KEY (`id_usuario_alt`) REFERENCES `usuario` (`id`)
);

--
-- Dumping data for table `produto`
--

INSERT INTO `produto` VALUES (1,4,8,'SORVETE LUIGI 1,5lt',19.50,12.45,NULL,NULL,''),
(2,4,8,'SORVETE LUIGI 1,7lt',21.75,14.15,NULL,NULL,''),
(3,4,8,'AÇAI 1,2lt',18.75,13.15,NULL,NULL,''),
(4,1,11,'COCA-COLA 2lts',14.00,9.00,NULL,NULL,''),
(5,1,11,'COCA-COLA 600ml',9.00,6.50,NULL,NULL,''),
(6,1,11,'GUARANA ANTARTICA 2lts ',14.00,9.00,NULL,NULL,''),
(7,1,11,'GUARANA ANTARTICA 600ml',9.00,6.50,NULL,NULL,''),
(8,1,11,'HEINIKEN 600lm',16.50,10.50,NULL,NULL,''),
(9,1,11,'FANTA UVA 2lT',14.00,9.50,NULL,NULL,''),
(10,5,1,'COXINHA DE FRANGO',0.75,0.15,NULL,NULL,''),
(11,5,1,'RIZOLE DE PIZZA',0.75,0.15,NULL,NULL,''),
(12,5,1,'BOLINHA DE QUEIJO',0.75,0.15,NULL,NULL,''),
(13,5,1,'RISSOLE DE CAMARÃO',0.75,0.15,NULL,NULL,''),
(14,5,2,'COXINHA DE FRANGO',75.00,15.00,NULL,NULL,''),
(15,5,2,'RIZOLE DE PIZZA',75.00,15.00,NULL,NULL,''),
(16,5,2,'BOLINHA DE QUEIJO',75.00,15.00,NULL,NULL,''),
(17,5,2,'KIBE DE CARNE',75.00,15.00,NULL,NULL,''),
(18,5,2,'RISSOLE DE CAMARÃO',75.00,15.00,NULL,NULL,''),
(19,5,1,'MINI CHURROS',0.75,0.15,NULL,NULL,''),
(20,5,1,'ENROLADO DE SALSICHA ',0.75,0.15,NULL,NULL,''),
(21,4,1,'AÇAI 600ML',10.00,6.00,NULL,NULL,''),
(22,2,1,'X TUDO',25.00,15.00,NULL,NULL,''),
(23,2,1,'X EGG',20.00,13.00,NULL,NULL,''),
(24,2,1,'X EGG BACON',21.00,14.00,NULL,NULL,''),
(25,2,1,'PIZZA PORTUGUESA 4 PED.',20.00,15.00,NULL,NULL,''),
(26,2,1,'PIZZA PORTUGUESA 6 PED.',30.00,20.00,NULL,NULL,''),
(27,2,1,'PIZZA PORTUGUESA 8 PED.',40.00,25.00,NULL,NULL,''),
(28,2,1,'HAMBURGUER',16.00,12.00,NULL,NULL,''),
(29,4,1,'PICOLÉ AJELSO SABORES',3.50,1.00,NULL,NULL,''),
(30,1,1,'COCA-COLA LATA',5.00,3.50,NULL,NULL,''),
(31,2,10,'BATATA FRITA C/FRANGO',40.00,25.00,NULL,NULL,''),
(32,4,1,'SORVETE KIBOM 1,5LT',30.00,16.00,NULL,NULL,'');

--
-- Table structure for table `produto_pedido`
--

DROP TABLE IF EXISTS `produto_pedido`;
CREATE TABLE `produto_pedido` (
  `id_produto` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `preco_venda` decimal(8,2) NOT NULL,
  `preco_custo` decimal(8,2) NOT NULL,
  `info_adicional` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_produto`,`id_pedido`),
  KEY `id_pedido` (`id_pedido`),
  CONSTRAINT `produto_pedido_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`),
  CONSTRAINT `produto_pedido_ibfk_2` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id`)
);

--
-- Dumping data for table `produto_pedido`
--

INSERT INTO `produto_pedido` VALUES (1,3,1,19.50,12.45,NULL),
(1,17,1,19.50,12.45,NULL),
(1,23,1,19.50,12.45,NULL),
(2,17,1,21.75,14.15,NULL),
(2,23,1,21.75,14.15,NULL),
(2,28,1,21.75,14.15,NULL),
(3,4,1,18.75,13.15,NULL),
(3,6,3,18.75,13.15,NULL),
(3,11,2,18.75,13.15,NULL),
(3,16,1,18.75,13.15,NULL),
(3,17,1,18.75,13.15,NULL),
(3,19,1,18.75,13.15,NULL),
(3,21,1,18.75,13.15,NULL),
(3,23,1,18.75,13.15,NULL),
(3,30,2,18.75,13.15,NULL),
(3,35,4,18.75,13.15,NULL),
(4,1,3,14.00,9.00,NULL),
(4,13,1,14.00,9.00,NULL),
(4,17,1,14.00,9.00,NULL),
(4,18,1,14.00,9.00,NULL),
(4,21,3,14.00,9.00,NULL),
(4,25,1,14.00,9.00,NULL),
(4,28,1,14.00,9.00,NULL),
(4,31,1,14.00,9.00,NULL),
(4,32,1,14.00,9.00,NULL),
(5,3,1,9.00,6.50,NULL),
(5,5,3,9.00,6.50,NULL),
(5,8,2,9.00,6.50,NULL),
(5,14,2,9.00,6.50,NULL),
(5,17,1,9.00,6.50,NULL),
(5,24,3,9.00,6.50,NULL),
(6,2,1,14.00,9.00,NULL),
(6,20,1,14.00,9.00,NULL),
(6,24,2,14.00,9.00,NULL),
(6,27,1,14.00,9.00,NULL),
(7,12,2,9.00,6.50,NULL),
(7,17,1,9.00,6.50,NULL),
(7,23,1,9.00,6.50,NULL),
(8,15,1,16.50,10.50,NULL),
(8,17,1,16.50,10.50,NULL),
(8,23,1,16.50,10.50,NULL),
(8,31,1,16.50,10.50,NULL),
(9,5,3,14.00,9.50,NULL),
(9,17,1,14.00,9.50,NULL),
(9,23,2,14.00,9.50,NULL),
(9,24,3,14.00,9.50,NULL),
(10,8,1,0.75,0.15,NULL),
(10,14,50,0.75,0.15,NULL),
(10,17,1,0.75,0.15,NULL),
(10,23,1,0.75,0.15,NULL),
(11,28,1,0.75,0.15,NULL),
(12,3,50,0.75,0.15,NULL),
(12,7,50,0.75,0.15,NULL),
(12,9,25,0.75,0.15,NULL),
(12,17,1,0.75,0.15,NULL),
(12,23,1,0.75,0.15,NULL),
(12,25,50,0.75,0.15,NULL),
(13,17,1,0.75,0.15,NULL),
(13,23,1,0.75,0.15,NULL),
(14,5,2,75.00,15.00,NULL),
(14,12,1,75.00,15.00,NULL),
(14,15,1,75.00,15.00,NULL),
(14,16,1,75.00,15.00,NULL),
(14,17,1,75.00,15.00,NULL),
(14,23,1,75.00,15.00,NULL),
(14,29,1,75.00,15.00,NULL),
(15,17,1,75.00,15.00,NULL),
(15,23,1,75.00,15.00,NULL),
(16,2,2,75.00,15.00,NULL),
(16,6,1,75.00,15.00,NULL),
(16,15,1,75.00,15.00,NULL),
(16,17,1,75.00,15.00,NULL),
(16,23,1,75.00,15.00,NULL),
(16,26,1,75.00,15.00,NULL),
(16,29,1,75.00,15.00,NULL),
(16,34,1,75.00,15.00,NULL),
(17,3,1,75.00,15.00,NULL),
(17,11,1,75.00,15.00,NULL),
(17,13,1,75.00,15.00,NULL),
(17,15,1,75.00,15.00,NULL),
(17,16,1,75.00,15.00,NULL),
(17,17,1,75.00,15.00,NULL),
(17,22,1,75.00,15.00,NULL),
(17,23,1,75.00,15.00,NULL),
(17,26,2,75.00,15.00,NULL),
(18,5,1,75.00,15.00,NULL),
(18,17,1,75.00,15.00,NULL),
(18,23,1,75.00,15.00,NULL),
(18,24,1,75.00,15.00,NULL),
(18,26,1,75.00,15.00,NULL),
(18,31,1,75.00,15.00,NULL),
(18,32,1,75.00,15.00,NULL),
(19,15,50,0.75,0.15,NULL),
(19,17,1,0.75,0.15,NULL),
(19,23,1,0.75,0.15,NULL),
(19,29,50,0.75,0.15,NULL),
(20,13,50,0.75,0.15,NULL),
(20,17,2,0.75,0.15,NULL),
(20,20,10,0.75,0.15,NULL),
(20,23,2,0.75,0.15,NULL),
(20,25,51,0.75,0.15,NULL),
(21,21,1,10.00,6.00,NULL),
(21,30,2,10.00,6.00,NULL),
(22,27,1,25.00,15.00,NULL),
(22,36,3,25.00,15.00,NULL),
(23,22,2,20.00,13.00,NULL),
(23,25,1,20.00,13.00,NULL),
(24,27,2,21.00,14.00,NULL),
(24,32,2,21.00,14.00,NULL),
(24,34,2,21.00,14.00,NULL),
(24,36,2,21.00,14.00,NULL),
(25,19,1,20.00,15.00,NULL),
(25,22,1,20.00,15.00,NULL),
(25,25,1,20.00,15.00,NULL),
(27,20,1,40.00,25.00,NULL),
(27,27,1,40.00,25.00,NULL),
(27,28,1,40.00,25.00,NULL),
(27,29,1,40.00,25.00,NULL),
(27,33,4,40.00,25.00,NULL),
(28,21,2,16.00,12.00,NULL),
(28,29,1,16.00,12.00,NULL),
(28,36,1,16.00,12.00,NULL),
(29,21,2,3.50,1.00,NULL),
(29,28,5,3.50,1.00,NULL),
(29,29,5,3.50,1.00,NULL),
(29,30,60,3.50,1.00,NULL),
(29,32,1,3.50,1.00,NULL),
(29,34,3,3.50,1.00,NULL),
(29,35,10,3.50,1.00,NULL),
(30,26,5,5.00,3.50,NULL),
(31,19,1,40.00,25.00,NULL),
(31,22,1,40.00,25.00,NULL),
(31,31,2,40.00,25.00,NULL),
(32,30,2,30.00,16.00,NULL);

--
-- Temporary view structure for view `listatodosprodutos`
--

DROP TABLE IF EXISTS `listatodosprodutos`;
CREATE OR REPLACE VIEW `listaTodosProdutos` AS
SELECT p.id, p.nome, c.nome as categoria, p.preco_venda , p.preco_custo, u.abreviacao as unidade, p.estado
FROM produto as p
LeFT JOIN
	categoria as c
    on p.id_categoria = c.id
LeFT JOIN
	unidade as u
    on p.id_unidade = u.id
ORDER BY p.nome;


--
-- Table structure for table `est_andamento_pedido`
--

DROP TABLE IF EXISTS `est_andamento_pedido`;
CREATE TABLE `est_andamento_pedido` (
  `id_est_andamento` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_usuario_autor` int(11) NOT NULL COMMENT 'Usuário responsável pela atribuição do estado ao pedido',
  `dthr_criacao` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id_est_andamento`,`id_pedido`),
  KEY `id_pedido` (`id_pedido`),
  CONSTRAINT `est_andamento_pedido_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`),
  CONSTRAINT `est_andamento_pedido_ibfk_2` FOREIGN KEY (`id_est_andamento`) REFERENCES `est_andamento` (`id`)
);


DROP TABLE IF EXISTS `destinatario`;
CREATE TABLE `destinatario` (
  `id_pedido` int(11) NOT NULL,
  `info` varchar(120) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  CONSTRAINT `destinatario_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`)
);

--
-- Dumping data for table `destinatario`
--
INSERT INTO `destinatario` VALUES (1,'Dados destinatário, ponto de referência...'),
(3,'Entregar ao porteiro'),
(5,'Em cima da Padaria Renovada, ao lado do supermercado.'),
(6,'Dados destinatário, ponto de referência...'),
(16,'Entregar ao porteiro do condomínio'),
(17,'Entregar em horário comercial'),
(18,'Dados destinatário, ponto de referência...'),
(21,'Dados destinatário, ponto de referência...'),
(23,'Entregar em horário comercial'),
(24,'Em cima da Padaria Renovada, ao lado do supermercado.'),
(26,'Entregar ao porteiro do condomínio'),
(33,'Entregar ao Gregory');
--
-- Table structure for table `destino`
--

DROP TABLE IF EXISTS `destino`;
CREATE TABLE `destino` (
  `id_pedido` int(11) NOT NULL,
  `logradouro` varchar(45) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `bairro` varchar(45) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `pais` varchar(45) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  CONSTRAINT `destino_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`)
);

--
-- Dumping data for table `destino`
--
INSERT INTO `destino` VALUES (1,'Rua Antônio Roberto Braga','2','Bairro Legal','Cidade Antiga','ES','Brasil'),
(3,'Rua das Caieiras','79','Jacarandá','Carapicuíba','GO','Brasil'),
(5,'Rua dos Anjos Mirins','32','Marataízes','Cidade Alta','RJ','Brasil'),
(8,'Avenida São João','323','Vila Joana','Jundiaí','SP','Brasil'),
(9,'Rua Serra de Bragança','454','Vila Gomes Cardim','São Paulo','ES','Brasil'),
(11,'Rua Carlos Augusto Cornelsen','342','Bom Retiro','Curitiba','PR','Brasil'),
(13,'Rua Serra de Bragança','32','Vila Gomes Cardim','São Paulo','SP','Brasil'),
(16,'Rua das Mariposas Ciganas','213','Itamarajó','Capiúba','ES','Brasil'),
(17,'Belmira Altares','232','Itararé','Campo Belo','RJ','Brasil'),
(18,'Palmeiras Cintilantes','32','Planalto Mineiro','Planalto Mineiro','SC','Brasil'),
(21,'Rua Antônio Roberto Braga','2','Bairro Legal','Bairro Legal','ES','Brasil'),
(22,'Belmira Ramos','125','Marataízes','Carapicuíba','RJ','Brasil'),
(23,'Belmira Altares','232','Itararé','Itararé','RJ','Brasil'),
(24,'Rua dos Anjos Mirins','32','Marataízes','Marataízes','RJ','Brasil'),
(26,'Rua das Mariposas Ciganas','213','Itamarajó','Itamarajó','ES','Brasil'),
(28,'João Benedio Farias','321','Bom Marajá do Sul','Marajá','TO','Brasil'),
(29,'João Benedio Farias','321','Bom Marajá do Sul','Bom Marajá do Sul','TO','Brasil'),
(33,'Rua do Senai','1','Vitória','Vitória','ES','Brasil');


--
-- Dumping data for table `est_andamento_pedido`
--

INSERT INTO `est_andamento_pedido` VALUES (1,1,1,'2024-11-15 15:21:32.000'),
(1,2,1,'2024-11-16 11:37:28.000'),
(1,3,1,'2024-11-14 18:45:10.000'),
(1,4,1,'2024-11-14 18:45:10.000'),
(1,5,1,'2024-11-16 14:09:29.000'),
(1,6,1,'2024-11-16 14:14:23.000'),
(1,7,1,'2024-11-16 14:23:05.000'),
(1,8,1,'2024-11-16 14:35:59.000'),
(1,9,1,'2024-11-16 14:36:33.000'),
(1,11,1,'2024-11-16 14:38:36.000'),
(1,12,1,'2024-11-16 14:39:36.000'),
(1,13,1,'2024-11-16 14:40:42.000'),
(1,14,1,'2024-11-16 14:42:04.000'),
(1,15,1,'2024-11-17 11:57:45.000'),
(1,16,1,'2024-11-17 12:05:10.000'),
(1,17,1,'2024-11-18 08:58:27.543'),
(1,18,1,'2024-11-18 16:27:56.001'),
(1,19,1,'2024-11-24 15:21:49.000'),
(1,20,4,'2024-11-24 16:04:37.000'),
(1,21,4,'2024-11-24 22:41:58.000'),
(1,22,4,'2024-11-24 22:42:58.000'),
(1,23,4,'2024-11-24 22:43:54.000'),
(1,24,4,'2024-11-24 22:44:30.000'),
(1,25,4,'2024-11-24 22:49:52.000'),
(1,26,4,'2024-11-24 22:50:53.000'),
(1,27,4,'2024-11-24 22:51:43.000'),
(1,28,4,'2024-11-24 22:53:54.000'),
(1,29,4,'2024-11-24 22:54:36.000'),
(1,30,4,'2024-11-24 22:55:46.000'),
(1,31,4,'2024-11-24 22:58:55.000'),
(1,32,4,'2024-11-24 22:59:17.000'),
(1,33,4,'2024-11-24 23:00:18.000'),
(1,34,4,'2024-11-24 23:00:34.000'),
(1,35,4,'2024-11-24 23:01:03.000'),
(1,36,4,'2024-11-24 23:01:29.000'),
(2,1,1,'2024-11-16 11:17:43.000'),
(2,6,1,'2024-11-16 14:14:40.000'),
(2,9,1,'2024-11-16 14:43:15.000'),
(2,12,1,'2024-11-16 14:42:52.000'),
(2,28,4,'2024-11-24 23:04:59.296'),
(2,29,4,'2024-11-24 23:06:21.849'),
(2,31,4,'2024-11-24 23:03:03.034'),
(2,32,4,'2024-11-24 23:04:08.064'),
(3,1,1,'2024-11-16 11:22:23.000'),
(3,2,1,'2024-11-16 11:37:53.000'),
(3,3,1,'2024-11-14 18:45:10.000'),
(3,4,1,'2024-11-16 13:09:00.000'),
(3,5,1,'2024-11-16 14:09:53.000'),
(3,6,1,'2024-11-16 14:16:12.000'),
(3,7,1,'2024-11-16 14:23:17.000'),
(3,8,4,'2024-11-24 23:02:31.857'),
(3,9,4,'2024-11-24 23:06:05.596'),
(3,11,4,'2024-11-24 23:03:54.713'),
(3,12,1,'2024-11-16 14:43:28.000'),
(3,13,4,'2024-11-24 23:02:57.141'),
(3,14,1,'2024-11-16 14:43:54.000'),
(3,15,1,'2024-11-18 19:54:14.878'),
(3,16,1,'2024-11-17 16:04:26.836'),
(3,18,4,'2024-11-24 23:03:16.856'),
(3,19,4,'2024-11-24 23:02:42.104'),
(3,20,4,'2024-11-24 23:03:32.477'),
(3,22,4,'2024-11-24 23:05:12.873'),
(3,23,4,'2024-11-24 23:05:20.317'),
(3,24,4,'2024-11-24 23:04:53.374'),
(3,30,4,'2024-11-24 23:02:48.985'),
(3,33,4,'2024-11-24 23:03:25.329'),
(3,34,4,'2024-11-24 23:03:45.840'),
(3,35,4,'2024-11-24 23:03:38.884'),
(4,1,1,'2024-11-16 11:27:26.000'),
(4,14,1,'2024-11-16 14:43:54.000'),
(4,15,1,'2024-11-18 19:54:14.885'),
(4,34,4,'2024-11-24 23:03:45.842'),
(5,1,1,'2024-11-16 11:27:47.000'),
(5,4,1,'2024-11-16 13:09:00.000'),
(5,33,4,'2024-11-24 23:03:25.331'),
(6,7,1,'2024-11-16 14:23:38.000'),
(6,22,4,'2024-11-24 23:05:12.874'),
(7,1,1,'2024-11-16 11:27:54.000'),
(7,2,1,'2024-11-16 11:38:58.000'),
(7,4,1,'2024-11-16 13:12:08.000'),
(7,5,1,'2024-11-16 14:12:12.000'),
(7,6,1,'2024-11-16 14:16:40.000'),
(7,13,4,'2024-11-24 23:02:57.143'),
(7,20,4,'2024-11-24 23:03:32.479'),
(8,1,1,'2024-11-16 13:07:53.000'),
(8,2,1,'2024-11-16 13:07:53.000'),
(8,3,1,'2024-11-16 13:07:53.000'),
(8,5,1,'2024-11-16 14:12:29.000'),
(8,6,1,'2024-11-16 14:21:46.000'),
(8,7,4,'2024-11-24 23:04:45.965'),
(8,9,4,'2024-11-24 23:06:05.598'),
(8,18,4,'2024-11-24 23:03:16.860'),
(8,23,4,'2024-11-24 23:05:20.319'),
(8,33,4,'2024-11-24 23:04:22.193'),
(8,34,4,'2024-11-24 23:04:35.456'),
(8,35,4,'2024-11-24 23:03:38.886'),
(9,4,1,'2024-11-16 13:13:11.000'),
(9,17,4,'2024-11-24 23:05:45.047');

--
-- Table structure for table `info_cancelamento`
--

DROP TABLE IF EXISTS `info_cancelamento`;
CREATE TABLE `info_cancelamento` (
  `id_pedido` int(11) NOT NULL,
  `justificativa` varchar(120) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  CONSTRAINT `info_cancelamento_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`)
);

--
-- Dumping data for table `info_cancelamento`
--

INSERT INTO `info_cancelamento` VALUES (4,'Infelizmente, o cliente não estava presente para receber o pedido.'),
(17,'Cliente não efetuou o paganento.');
--
-- Table structure for table `info_pagamento`
--

DROP TABLE IF EXISTS `info_pagamento`;
CREATE TABLE `info_pagamento` (
  `id_pedido` int(11) NOT NULL,
  `dt_vencimento` date DEFAULT NULL,
  `dt_pago` date DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  CONSTRAINT `info_pagamento_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`)
);

--
-- Table structure for table `info_pf`
--

DROP TABLE IF EXISTS `info_pf`;
CREATE TABLE `info_pf` (
  `id_pedido` int(11) NOT NULL,
  `nome_cliente` varchar(45) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  CONSTRAINT `info_pf_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`)
);

--
-- Dumping data for table `info_pf`
--
INSERT INTO `info_pf` VALUES (3,'Carlos Antônio Roberto','40237265087'),
(14,'Antônio Márcio','53354825081');
--
-- Table structure for table `info_pj`
--

DROP TABLE IF EXISTS `info_pj`;
CREATE TABLE `info_pj` (
  `id_pedido` int(11) NOT NULL,
  `cnpj` varchar(20) NOT NULL,
  `nome_fantasia` varchar(60) NOT NULL,
  `nome_empresarial` varchar(60) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  CONSTRAINT `info_pj_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`)
);


--
-- Table structure for table `intercorrencia`
--

DROP TABLE IF EXISTS `intercorrencia`;
CREATE TABLE `intercorrencia` (
  `id_intercorrencia` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `dthr_criacao` datetime NOT NULL DEFAULT current_timestamp(),
  `id_usuario_autor` int(11) NOT NULL,
  PRIMARY KEY (`id_intercorrencia`,`id_pedido`,`id_usuario_autor`),
  KEY `id_pedido` (`id_pedido`),
  KEY `id_usuario_autor` (`id_usuario_autor`),
  CONSTRAINT `intercorrencia_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`),
  CONSTRAINT `intercorrencia_ibfk_2` FOREIGN KEY (`id_usuario_autor`) REFERENCES `usuario` (`id`)
);

--
-- Temporary view structure for view `vw_est_andamento_pedido`
--

CREATE OR REPLACE VIEW vw_est_andamento_pedido AS 
SELECT 
    e_a_p.id_pedido,
    e_a_p.id_est_andamento,
    e_a.nome AS nome_est_andamento,
    e_a_p.id_usuario_autor,
    u.nome AS nome_usuario_autor,
    e_a_p.dthr_criacao
FROM 
    est_andamento_pedido AS e_a_p
    INNER JOIN est_andamento AS e_a ON e_a.id = e_a_p.id_est_andamento
    INNER JOIN usuario AS u ON u.id = e_a_p.id_usuario_autor
ORDER BY id_pedido ASC, dthr_criacao ASC, id_est_andamento ASC;

--
-- Temporary view structure for view `vw_estadoproduto`
--

DROP TABLE IF EXISTS `vw_estadoproduto`;
CREATE OR REPLACE VIEW vw_estadoProduto
AS
	SELECT 
		p.id, 
		p.nome, 
		c.nome AS categoria, 
		u.nome AS unidade, 
		CASE WHEN p.estado = b'1'
			THEN "ATIVO"
			ELSE "DESATIVADO"
		END AS estado
	FROM produto AS p
		INNER JOIN categoria AS c
			ON c.id = p.id_categoria
		INNER JOIN unidade AS u
			ON u.id = p.id_unidade;



--
-- Temporary view structure for view `vw_ultimo_estado_pedido`
--

DROP TABLE IF EXISTS `vw_ultimo_estado_pedido`;
CREATE OR REPLACE VIEW vw_ultimo_estado_pedido AS
     SELECT
        ultimo_estado_pedido.id_pedido,
        ultimo_estado_pedido.id_est_andamento AS id_est,
        e_a.nome AS nome_est,
        ultimo_estado_pedido.id_usuario_autor AS id_usuario_autor_est,
        u.nome AS nome_usuario_autor_est,
        ultimo_estado_pedido.dthr_criacao AS dthr_criacao_est
    FROM
    -- Obtém data e hora do último estado associado a cada pedido
        (SELECT *
            FROM (
                SELECT
                    id_pedido,
                    id_est_andamento,
                    id_usuario_autor,
                    dthr_criacao,
                    (SELECT MAX(dthr_criacao) FROM est_andamento_pedido AS E WHERE E.id_pedido = est_andamento_pedido.id_pedido) AS dthr_ultimo
                FROM est_andamento_pedido
                ORDER BY id_pedido ASC, dthr_ultimo DESC , id_est_andamento DESC
            ) AS abc
            GROUP BY abc.id_pedido
        ) AS ultimo_estado_pedido
        INNER JOIN est_andamento AS e_a
            ON e_a.id = ultimo_estado_pedido.id_est_andamento
        INNER JOIN usuario AS u
            ON u.id = ultimo_estado_pedido.id_usuario_autor
    WHERE dthr_criacao = dthr_ultimo; -- Exibe apenas os estados de cada pedido que sejam os últimos (tenham data de criação igual à ultima encontrada para cada pedido)

--
-- Temporary view structure for view `vw_pedido`
--

DROP TABLE IF EXISTS `vw_pedido`;
CREATE OR REPLACE VIEW vw_pedido AS
    SELECT 
        p.id,
        p.id_cliente,
        -- Informações do cliente
        c.telefone AS telefone_cliente,
        c.nome AS nome_cliente,
        info_pf.nome_cliente AS nome_cliente_info_pf,
        info_pf.cpf AS cpf_info_pf,
        info_pj.cnpj AS cnpj_info_pj,
        info_pj.nome_fantasia AS nome_fantasia_info_pj,
        info_pj.nome_empresarial AS nome_empresarial_info_pj,
        -- Informações de entrega
        p.tipo_entrega,
        p.dthr_entregar,
        p.preco_frete,
        d.logradouro AS logradouro_destino,
        d.numero AS numero_destino,
        d.bairro AS bairro_destino,
        d.cidade AS cidade_destino,
        d.estado AS estado_destino,
        d.pais AS pais_destino,
        destinatario.info AS info_destinatario,
        -- Informações de controle de alteração
        p.id_usuario_autor,
        u.nome AS nome_usuario_autor,
        p.dthr_criacao,
        p.id_usuario_alt,
        u_alt.nome AS nome_usuario_alt,
        p.dthr_alt,
        -- Informações de pagamento
        p.tx_desconto,
        p.preco_final,
        p.dt_venc_pagamento,
        p.dt_pago,
        p.preco_custo_total,
        -- Informações de estado atual
        u_e_p.id_est AS id_ultimo_est,
        u_e_p.nome_est AS nome_ultimo_est,
        u_e_p.id_usuario_autor_est AS id_usuario_autor_ultimo_est,
        u_e_p.nome_usuario_autor_est AS nome_usuario_autor_ultimo_est,
        u_e_p.dthr_criacao_est AS dthr_criacao_ultimo_est,
        -- Cancelamento
        info_canc.justificativa AS info_cancelamento
    FROM 
        pedido AS p
        -- Informações básicas do pedido
        INNER JOIN usuario AS u 
            ON u.id = p.id_usuario_autor 
        LEFT JOIN usuario AS u_alt
            ON u_alt.id = p.id_usuario_alt 
        INNER JOIN cliente AS c 
            ON c.id = p.id_cliente 
        LEFT JOIN destino AS d 
            ON d.id_pedido = p.id 
        LEFT JOIN destinatario 
            ON destinatario.id_pedido = p.id 
        -- Informações adicionais do cliente
        LEFT JOIN info_pf 
            ON info_pf.id_pedido = p.id 
        LEFT JOIN info_pj 
            ON info_pj.id_pedido = p.id 
        -- Estado atual do pedido
        INNER JOIN vw_ultimo_estado_pedido AS u_e_p 
            ON u_e_p.id_pedido = p.id
        -- Info de cancelamento
        LEFT JOIN info_cancelamento AS info_canc ON info_canc.id_pedido = p.id
    ORDER BY p.id;


--
-- Temporary view structure for view `vw_produto`
--

DROP TABLE IF EXISTS `vw_produto`;
CREATE OR REPLACE VIEW vw_produto
AS SELECT 
    prod.id,
    prod.nome AS nome_produto,
    prod.id_categoria,
    cat.nome AS nome_categoria,
    cat.descricao AS descricao_categoria,
    prod.id_unidade,
    unid.nome AS nome_unidade,
    unid.abreviacao AS abreviacao_unidade,
    prod.preco_venda,
    prod.preco_custo,
    prod.id_usuario_alt,
    usr.nome AS nome_usuario_alt,
    usr.tipo AS tipo_usuario,
    prod.dthr_alt,
    prod.estado
    FROM produto AS prod
        INNER JOIN categoria AS cat ON cat.id = prod.id_categoria
        INNER JOIN unidade AS unid ON unid.id = prod.id_unidade
        LEFT JOIN usuario AS usr ON usr.id = prod.id_usuario_alt;

--
-- Temporary view structure for view `vw_produtos_pedido`
--

DROP TABLE IF EXISTS `vw_produtos_pedido`;
CREATE OR REPLACE VIEW vw_produtos_pedido
AS SELECT 
    prod_ped.id_pedido AS id_pedido,
    prod_ped.id_produto,
    prod.nome AS nome_produto,
    prod_ped.quantidade AS quantidade_produto,
    prod_ped.info_adicional AS info_adicional_produto_pedido,
    prod.id_categoria,
    cat.nome AS nome_categoria,
    cat.descricao AS descricao_categoria,
    prod.id_unidade,
    unid.nome AS nome_unidade,
    unid.abreviacao AS abreviacao_unidade,
    prod_ped.preco_venda,
    prod_ped.preco_custo,
    prod.id_usuario_alt,
    usr.nome AS nome_usuario_alt,
    usr.tipo AS tipo_usuario,
    prod.dthr_alt,
    prod.estado
    FROM produto_pedido AS prod_ped
        INNER JOIN produto AS prod ON prod.id = prod_ped.id_produto
        INNER JOIN categoria AS cat ON cat.id = prod.id_categoria
        INNER JOIN unidade AS unid ON unid.id = prod.id_unidade
        LEFT JOIN usuario AS usr ON usr.id = prod.id_usuario_alt;

--
-- Dumping routines for database 'japedidos'
--

DELIMITER //
CREATE FUNCTION `preco_custo_produto`(id_prod INT) RETURNS decimal(8,2)
BEGIN
    DECLARE r DECIMAL(8,2);
    SELECT preco_custo INTO r FROM produto  WHERE id = id_prod LIMIT 1;
    RETURN r;
END //
DELIMITER ;


DELIMITER //
CREATE FUNCTION `preco_venda_produto`(id_prod INT) RETURNS decimal(8,2)
BEGIN
    DECLARE r DECIMAL(8,2);
    SELECT preco_venda INTO r FROM produto  WHERE id = id_prod LIMIT 1;
    RETURN r;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE `atualizar_precos_pedido`(IN id_ped INT)
    MODIFIES SQL DATA
BEGIN
        DECLARE soma_custo DECIMAL(8,2);
        DECLARE soma_venda DECIMAL(8,2);
        DECLARE valor_preco_final DECIMAL(8,2);
        DECLARE valor_preco_frete DECIMAL (8,2);
        DECLARE valor_tx_desconto INT;
    
        -- Definição de valores auxilires
        SELECT 
            p.preco_frete, p.tx_desconto 
        INTO valor_preco_frete, valor_tx_desconto 
        FROM pedido p
        WHERE 
            p.id = id_ped 
        LIMIT 1;
        
        -- Soma precos dos produtos
        SELECT 
            SUM(pp.preco_venda * pp.quantidade) AS pv_total, 
            SUM(pp.preco_custo * pp.quantidade) AS pc_total
        INTO
            soma_venda,
            soma_custo
        FROM produto_pedido pp 
        WHERE
            pp.id_pedido = id_ped;
        
        -- Cálculos finais
        SET valor_preco_final = soma_venda - (soma_venda * CAST(valor_tx_desconto/100 AS DECIMAL(3,2))) + valor_preco_frete;
    
        UPDATE 
            pedido 
        SET 
            preco_final = valor_preco_final, 
            preco_custo_total = soma_custo 
        WHERE id = id_ped;
    END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE `select_estados_pedido`(IN id_ped INT)
    READS SQL DATA
BEGIN
   SELECT * FROM vw_est_andamento_pedido WHERE id_pedido = id_ped;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `select_pedidos_by_estado`(IN id_est INT)
    READS SQL DATA
BEGIN
  SELECT * FROM vw_pedido WHERE id_ultimo_est = id_est ORDER BY dthr_entregar ASC;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE `select_produtos_pedido`(IN id_ped INT)
    READS SQL DATA
BEGIN
        SELECT * FROM vw_produtos_pedido WHERE id_pedido = id_ped;
    END //
DELIMITER ;

CREATE VIEW vw_pedido_faturado AS
    SELECT 
        ped.id AS id_pedido,
        ped.dt_pago,
        ped.preco_custo_total,
        ped.preco_frete,
        ped.preco_final,
        (ped.preco_final - ped.preco_frete) AS arrecadado,
        (ped.preco_final - ped.preco_frete) - preco_custo_total AS lucro
    FROM pedido ped 
        LEFT JOIN est_andamento_pedido eap ON eap.id_pedido = ped.id
    WHERE
        id_pedido IN (
            SELECT 
                pedido.id AS id_pedido
            FROM pedido 
                LEFT JOIN est_andamento_pedido eap ON eap.id_pedido = pedido.id
            WHERE 
                eap.id_est_andamento = 3)
        AND id_pedido NOT IN (
            SELECT 
                pedido.id
            FROM pedido 
                LEFT JOIN est_andamento_pedido eap ON eap.id_pedido = pedido.id
            WHERE eap.id_est_andamento = 9)
    GROUP BY ped.id
    ORDER BY dt_pago DESC;

DELIMITER //
CREATE PROCEDURE fluxo_caixa_mensal(IN dt_final DATE, IN dt_inicio DATE)
BEGIN
    SELECT 
        DATE_ADD(DATE(CONCAT(YEAR(dt_associada),"-01-01")), INTERVAL mes-1 MONTH) AS dt_inicio_mes,
        DATE_SUB(DATE_ADD(DATE_ADD(DATE(CONCAT(YEAR(dt_associada),"-01-01")), INTERVAL mes-1 MONTH), INTERVAL 1 MONTH), INTERVAL 1 DAY) AS dt_limite_mes,
        mes,
        arrecadado,
        custo,
        lucro
    FROM (
        SELECT
            dt_associada,
            mes,
            SUM(arrecadado) AS arrecadado,
            SUM(preco_custo_total) AS custo,
            SUM(lucro) AS lucro
        FROM (
            SELECT 
                dt_pago AS dt_associada,
                MONTH(dt_pago) AS mes,
                arrecadado,
                preco_custo_total,
                lucro
            FROM 
                vw_pedido_faturado
            WHERE 
                dt_pago BETWEEN dt_inicio AND dt_final
        ) pedidos_mensais
        GROUP BY mes
    ) AS faturado_mensal;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE fluxo_caixa_semanal(IN dt_final DATE, IN dt_inicio DATE)
BEGIN
    SELECT 
        DATE_ADD(DATE(CONCAT(YEAR(dt_associada),"-01-01")), INTERVAL semana-1 WEEK) AS dt_inicio_semana,
        DATE_SUB(DATE_ADD(DATE_ADD(DATE(CONCAT(YEAR(dt_associada),"-01-01")), INTERVAL semana-1 WEEK), INTERVAL 1 WEEK), INTERVAL 1 DAY) AS dt_limite_semana,
        semana,
        arrecadado,
        custo,
        lucro
    FROM (
        SELECT
            dt_associada,
            semana,
            SUM(arrecadado) AS arrecadado,
            SUM(preco_custo_total) AS custo,
            SUM(lucro) AS lucro
        FROM (
            SELECT 
                dt_pago AS dt_associada,
                WEEKOFYEAR(dt_pago) AS semana,
                arrecadado,
                preco_custo_total,
                lucro
            FROM 
                vw_pedido_faturado
            WHERE 
                dt_pago BETWEEN dt_inicio AND dt_final
        ) pedidos_semanais
        GROUP BY semana
    ) AS faturado_semanal;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE produtos_mais_vendidos(IN dt_final DATE, IN dt_inicio DATE, IN result_limit INT)
    BEGIN
        SELECT 
            pp.id_produto,
			pp.nome_produto,
			pp.abreviacao_unidade,
            SUM(pp.quantidade_produto) AS soma_quantidade, 
            SUM(pp.preco_venda * pp.quantidade_produto) AS soma_venda, 
            SUM(pp.preco_custo * pp.quantidade_produto) AS soma_custo
        FROM 
            vw_produtos_pedido pp 
        WHERE 
            pp.id_pedido IN (SELECT vw_pedido_faturado.id_pedido FROM vw_pedido_faturado WHERE dt_pago BETWEEN dt_final AND dt_inicio)
        GROUP BY pp.id_produto
        ORDER BY soma_quantidade DESC, id_produto ASC, soma_venda DESC
        LIMIT result_limit;
    END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE fluxo_caixa_agregado(IN dt_final DATE, IN dt_inicio DATE)
BEGIN
--     DECLARE dt_final DATE DEFAULT CURRENT_DATE();
--     DECLARE dt_inicio DATE DEFAULT DATE_SUB(dt_final, INTERVAL 1 WEEK);

    DECLARE concluido INT DEFAULT 8;
    DECLARE cancelado INT DEFAULT 9;
    DECLARE pago INT DEFAULT 3;

    SELECT 
        SUM(arrecadado) AS arrecadado,
        SUM(preco_custo_total) AS custo,
        SUM(lucro) AS lucro
    FROM vw_pedido_faturado
    WHERE
        dt_pago BETWEEN dt_inicio AND dt_final;
END//
DELIMITER ;

DELIMITER //
CREATE  PROCEDURE fluxo_caixa_anual(IN dt_final DATE, IN dt_inicio DATE)
BEGIN
    SELECT 
        ano,
        arrecadado,
        custo,
        lucro
    FROM (
        SELECT
            dt_associada,
            ano,
            SUM(arrecadado) AS arrecadado,
            SUM(preco_custo_total) AS custo,
            SUM(lucro) AS lucro
        FROM (
            SELECT 
                dt_pago AS dt_associada,
                YEAR(dt_pago) AS ano,
                arrecadado,
                preco_custo_total,
                lucro
            FROM 
                vw_pedido_faturado
            WHERE 
                dt_pago BETWEEN dt_inicio AND dt_final
        ) pedidos_anuais
        GROUP BY ano
    ) AS faturado_anual;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE fluxo_caixa_diario(IN dt_final DATE, IN dt_inicio DATE)
BEGIN
    DECLARE total_arrecadado DECIMAL(12,2);
    DECLARE total_custo DECIMAL(12,2);
    DECLARE lucro_total DECIMAL(12,2);

    SELECT 
        dt_associada,
        arrecadado,
        custo,
        lucro
    FROM (
        SELECT 
            dt_pago AS dt_associada,
            SUM(arrecadado) AS arrecadado,
            SUM(preco_custo_total) AS custo,
            SUM(lucro) AS lucro
        FROM vw_pedido_faturado
        WHERE 
            dt_pago BETWEEN dt_inicio AND dt_final
        GROUP BY dt_pago
    ) AS faturado_diario;
END//
DELIMITER ;