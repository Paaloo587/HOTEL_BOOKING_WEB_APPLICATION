-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dbms_project
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking_details`
--

DROP TABLE IF EXISTS `booking_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_details` (
  `ID` int NOT NULL,
  `email_id` varchar(45) NOT NULL,
  `booking_no` varchar(40) NOT NULL,
  `paybyhotel` int NOT NULL,
  `paynow` bigint NOT NULL,
  `indate` varchar(45) NOT NULL,
  `outdate` varchar(45) NOT NULL,
  `rooms` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`,`email_id`,`indate`,`outdate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_details`
--

LOCK TABLES `booking_details` WRITE;
/*!40000 ALTER TABLE `booking_details` DISABLE KEYS */;
INSERT INTO `booking_details` VALUES (1000,'r.navaneeth992@gmail.com','AT HOTEL',1,0,'2022-05-29','2022-05-30','2'),(1006,'r.navaneeth992@gmail.com','AT HOTEL',1,0,'2022-06-08','2022-06-09','3');
/*!40000 ALTER TABLE `booking_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `TRIGGER4` AFTER INSERT ON `booking_details` FOR EACH ROW UPDATE ROOM_AVA
INNER JOIN BOOKING_DETAILS ON HOTEL_ID=ID 
SET AVA=AVA-ROOMS
WHERE ID=HOTEL_ID AND DATE>=INDATE AND DATE<=OUTDATE */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `TRIGGER5` BEFORE DELETE ON `booking_details` FOR EACH ROW UPDATE ROOM_AVA
INNER JOIN BOOKING_DETAILS ON HOTEL_ID=ID 
SET AVA=AVA+ROOMS
WHERE ID=HOTEL_ID AND DATE>=INDATE AND DATE<=OUTDATE */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `cancel_reasons`
--

DROP TABLE IF EXISTS `cancel_reasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cancel_reasons` (
  `ID` int NOT NULL,
  `email_id` varchar(45) NOT NULL,
  `reason` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cancel_reasons`
--

LOCK TABLES `cancel_reasons` WRITE;
/*!40000 ALTER TABLE `cancel_reasons` DISABLE KEYS */;
INSERT INTO `cancel_reasons` VALUES (999,'karthikadhi123@gmail.com','Other Reasons'),(999,'r.navaneeth992@gmail.com','Personal Reasons'),(1000,'karthikadhi123@gmail.com','Other Reasons'),(1000,'r.navaneeth992@gmail.com','Change of Plans'),(1000,'raja@gmail.com','Change of Plans'),(1002,'karthikadhi123@gmail.com','Change of Plans'),(2006,'karthikadhi123@gmail.com','Change of Plans'),(1003,'karthikadhi123@gmail.com','Other Reasons'),(1006,'karthikadhi123@gmail.com','Other Reasons');
/*!40000 ALTER TABLE `cancel_reasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_details`
--

DROP TABLE IF EXISTS `card_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_details` (
  `card_no` bigint NOT NULL,
  `email_id` varchar(45) NOT NULL,
  `cvc` int NOT NULL,
  `expirydate` date NOT NULL,
  `cardtype` varchar(45) NOT NULL,
  PRIMARY KEY (`card_no`,`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_details`
--

LOCK TABLES `card_details` WRITE;
/*!40000 ALTER TABLE `card_details` DISABLE KEYS */;
INSERT INTO `card_details` VALUES (21213,'karthikadhi123@gmail.com',143,'2022-04-01','MasterCard'),(4566585,'r.navaneeth992@gmail.com',234,'2025-06-01','master card'),(324365867,'r.navaneeth992@gmail.com',345,'2026-10-01','Master Card'),(123456789012,'karthikadhi123@gmail.com',345,'2025-07-01','MasterCard'),(419841134221,'karthikadhi123@gmail.com',211,'2022-08-01','VISA');
/*!40000 ALTER TABLE `card_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cust_comments`
--

DROP TABLE IF EXISTS `cust_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cust_comments` (
  `ID` int NOT NULL,
  `email_id` varchar(45) NOT NULL,
  `comments` varchar(450) DEFAULT NULL,
  `ratings` int NOT NULL,
  PRIMARY KEY (`ID`,`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cust_comments`
--

LOCK TABLES `cust_comments` WRITE;
/*!40000 ALTER TABLE `cust_comments` DISABLE KEYS */;
INSERT INTO `cust_comments` VALUES (999,'karthikadhi123@gmail.com','Best Pace to Stay',5),(1000,'chitra@gmail.com','bxcgb',5),(1000,'karthikadhi123@gmail.com','Maintenances are poor',2),(1000,'raja@gmail.com','dshsdyb',4),(1002,'karthikadhi123@gmail.com','Best Place to Stay',5),(1003,'karthikadhi123@gmail.com','Good Hotel for Couples',3),(1006,'karthikadhi123@gmail.com','Good Hotel, Good to stay',3),(1006,'r.navaneeth992@gmail.com','Best Place to stay',4),(2006,'karthikadhi123@gmail.com','Nice for a afternoon stay',4);
/*!40000 ALTER TABLE `cust_comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `TRIGGER1` AFTER INSERT ON `cust_comments` FOR EACH ROW UPDATE HOTEL_DETAILS 
INNER JOIN CUST_COMMENTS ON CUST_COMMENTS.ID=HOTEL_DETAILS.ID
SET HOTEL_DETAILS.RATINGS=(SELECT AVG(CUST_COMMENTS.RATINGS) FROM CUST_COMMENTS WHERE CUST_COMMENTS.ID=HOTEL_DETAILS.ID) 
WHERE CUST_COMMENTS.ID=HOTEL_DETAILS.ID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `TRIGGER3` AFTER UPDATE ON `cust_comments` FOR EACH ROW UPDATE HOTEL_DETAILS 
INNER JOIN CUST_COMMENTS ON CUST_COMMENTS.ID=HOTEL_DETAILS.ID
SET HOTEL_DETAILS.RATINGS=(SELECT AVG(CUST_COMMENTS.RATINGS) FROM CUST_COMMENTS WHERE CUST_COMMENTS.ID=HOTEL_DETAILS.ID) 
WHERE CUST_COMMENTS.ID=HOTEL_DETAILS.ID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `TRIGGER2` BEFORE DELETE ON `cust_comments` FOR EACH ROW UPDATE HOTEL_DETAILS 
INNER JOIN CUST_COMMENTS ON CUST_COMMENTS.ID=HOTEL_DETAILS.ID
SET HOTEL_DETAILS.RATINGS=(SELECT AVG(CUST_COMMENTS.RATINGS) FROM CUST_COMMENTS WHERE CUST_COMMENTS.ID=HOTEL_DETAILS.ID) 
WHERE CUST_COMMENTS.ID=HOTEL_DETAILS.ID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `cust_details`
--

DROP TABLE IF EXISTS `cust_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cust_details` (
  `email_id` varchar(30) NOT NULL,
  `mobile_no` bigint NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`email_id`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `mobile_no_UNIQUE` (`mobile_no`),
  UNIQUE KEY `email_id_UNIQUE` (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cust_details`
--

LOCK TABLES `cust_details` WRITE;
/*!40000 ALTER TABLE `cust_details` DISABLE KEYS */;
INSERT INTO `cust_details` VALUES ('chitra@gmail.com',9876543210,'Chitra','chitra'),('karthik@gmail.com',6383387257,'Karthik S','karthik'),('karthik1@gmail.com',1234512345,'Karthik','kar'),('karthikadhi123@gmail.com',9245677907,'Karthik','qwerty'),('nava@gmail.com',9042142170,'Navaneeth','nav'),('navaneth992@gmail.com',9042142160,'Navaneeth','nava'),('r.navaneeth992@gmail.com',9042142199,'Navaneeth','navi0909'),('raja@gmail.com',9042142166,'raja','raja');
/*!40000 ALTER TABLE `cust_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_details`
--

DROP TABLE IF EXISTS `hotel_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_details` (
  `ID` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  `City` varchar(45) NOT NULL,
  `Area` varchar(45) NOT NULL,
  `PhNo` bigint NOT NULL,
  `Price` int NOT NULL,
  `Ratings` decimal(12,5) NOT NULL,
  `totalrooms` int NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_details`
--

LOCK TABLES `hotel_details` WRITE;
/*!40000 ALTER TABLE `hotel_details` DISABLE KEYS */;
INSERT INTO `hotel_details` VALUES (981,'The Leela Palace','Chennai','Mylapore',6127936838,800,0.00000,20),(982,'Trident','Chennai','Chennai South',7477543951,0,0.00000,30),(983,'The Raintree','Chennai','St. Mary Road',7477536838,0,0.00000,8),(984,'Park Hyatt','Chennai','Guindy',9273709384,0,0.00000,34),(985,'Grand Chennai ','Chennai','Pondy Bazaar',9834931209,0,0.00000,12),(986,'Taj Club House','Chennai','Mount Road',6555698955,0,0.00000,67),(987,'Citadiness','Chennai','Sholinganallur',8556555652,0,0.00000,45),(988,'The Westin','Chennai','Velachery',9866555652,0,0.00000,5),(989,'Taj Coromandel','Chennai','Central Chennai',6555479845,0,0.00000,100),(999,'Taj Hotel','Bangalore','Mysore',9042142160,750,5.00000,25),(1000,'ITC Hotel','Bangalore','Jayanagar',9652162011,1000,3.66667,50),(1001,'ITC Grand Goa','Goa','Utorda',9288382189,350,5.00000,34),(1002,'Park Regis','Goa','Arpora',3452678912,350,5.00000,34),(1003,'Nagoa Grande Resort & Spa','Goa','Marathalli',3452678912,3520,3.00000,34),(1004,'Radisson Hotel','Goa','Candolim',3452678912,3150,5.00000,34),(1005,'Quality Inn Ocean Palms','Goa','Calangute',3452678912,2350,5.00000,34),(1006,'Azzure ','Goa','Candolim',3452678912,4350,3.50000,34),(1007,'Amani Vagator','Goa','Calangute',3452678912,3500,5.00000,34),(1008,'Hyatt Centric','Goa','Candolim',3452678912,1030,5.00000,34),(1009,'River Palace','Goa','Simvaddo',3452678912,1550,5.00000,34),(1010,'Beleza ','Goa','Betalbatim',3452678912,1250,5.00000,34),(2001,'Claridges','New Delhi','Cannought Place',9288382189,350,5.00000,34),(2002,'Le Meridian','New Delhi','Cannought Place',3452678912,350,5.00000,34),(2003,'Roseate','New Delhi','Aerocity',3452678912,3520,5.00000,34),(2004,'ITC Maurya','New Delhi','Cannought Place',3452678912,3150,5.00000,34),(2005,'Novotel','New Delhi','Aerocity',3452678912,2350,5.00000,34),(2006,'The Lodhi','New Delhi','Cannought Place',3452678912,4350,4.00000,34),(2007,'Sheraton','New Delhi','Central Delhi',3452678912,3500,5.00000,34),(2008,'Taj Palace','New Delhi','Central Delhi',3452678912,1030,5.00000,34),(2009,'Shangri-La Eros Hotel','New Delhi','Aerocity',3452678912,1550,5.00000,34),(2010,'Radisson Blu Plazza ','New Delhi','Central Delhi',3452678912,1250,5.00000,34);
/*!40000 ALTER TABLE `hotel_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_extra_details`
--

DROP TABLE IF EXISTS `hotel_extra_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_extra_details` (
  `ID` int NOT NULL,
  `swim` tinyint NOT NULL,
  `wifi` tinyint NOT NULL,
  `restaurant` tinyint NOT NULL,
  `ac` tinyint NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_extra_details`
--

LOCK TABLES `hotel_extra_details` WRITE;
/*!40000 ALTER TABLE `hotel_extra_details` DISABLE KEYS */;
INSERT INTO `hotel_extra_details` VALUES (981,0,1,0,1),(982,1,0,1,1),(983,0,1,0,1),(984,1,0,0,1),(985,0,1,0,1),(986,1,1,0,1),(987,0,0,1,1),(988,1,0,0,1),(989,0,1,0,1),(990,1,1,1,1),(999,1,1,1,1),(1000,0,1,0,0),(1001,0,1,1,0),(1002,1,1,1,1),(1003,0,0,1,0),(1004,1,1,1,1),(1005,0,1,1,0),(1006,1,0,1,1),(1007,1,1,1,0),(1008,1,0,1,0),(1009,0,1,1,1),(1010,1,1,1,0),(2001,0,1,1,0),(2002,1,1,1,1),(2003,0,0,1,0),(2004,1,1,1,1),(2005,0,1,1,0),(2006,1,0,1,1),(2007,1,1,1,0),(2008,1,0,1,0),(2009,0,1,1,1),(2010,1,1,1,0);
/*!40000 ALTER TABLE `hotel_extra_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_hotel`
--

DROP TABLE IF EXISTS `login_hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_hotel` (
  `ID` varchar(45) NOT NULL,
  `email_id` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`,`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_hotel`
--

LOCK TABLES `login_hotel` WRITE;
/*!40000 ALTER TABLE `login_hotel` DISABLE KEYS */;
INSERT INTO `login_hotel` VALUES ('1000','r.navaneeth992@gmail.com'),('1006','karthikadhi123@gmail.com'),('981','trident@gmail.com'),('982','tajc@gmail.com'),('999','taj@gmail.com');
/*!40000 ALTER TABLE `login_hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_ava`
--

DROP TABLE IF EXISTS `room_ava`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_ava` (
  `hotel_id` int NOT NULL,
  `date` date NOT NULL,
  `ava` int NOT NULL,
  PRIMARY KEY (`hotel_id`,`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_ava`
--

LOCK TABLES `room_ava` WRITE;
/*!40000 ALTER TABLE `room_ava` DISABLE KEYS */;
INSERT INTO `room_ava` VALUES (999,'2022-06-08',4),(1000,'2022-06-08',7),(1001,'2022-06-08',34),(1001,'2022-06-09',34),(1001,'2022-06-10',34),(1002,'2022-06-08',34),(1002,'2022-06-09',34),(1002,'2022-06-10',34),(1003,'2022-06-08',31),(1003,'2022-06-09',31),(1003,'2022-06-10',31),(1004,'2022-06-08',34),(1004,'2022-06-09',34),(1004,'2022-06-10',34),(1005,'2022-06-08',34),(1005,'2022-06-09',34),(1005,'2022-06-10',34),(1006,'2022-06-08',29),(1006,'2022-06-09',29),(1006,'2022-06-10',29),(1007,'2022-06-08',34),(1007,'2022-06-09',34),(1007,'2022-06-10',34),(1008,'2022-06-08',34),(1008,'2022-06-09',34),(1008,'2022-06-10',34),(1009,'2022-06-08',34),(1009,'2022-06-09',34),(1009,'2022-06-10',34),(1010,'2022-06-08',34),(1010,'2022-06-09',34),(1010,'2022-06-10',34),(2001,'2022-06-08',34),(2001,'2022-06-09',34),(2001,'2022-06-10',34),(2002,'2022-06-08',34),(2002,'2022-06-09',34),(2002,'2022-06-10',34),(2003,'2022-06-08',34),(2003,'2022-06-09',34),(2003,'2022-06-10',34),(2004,'2022-06-08',34),(2004,'2022-06-09',34),(2004,'2022-06-10',34),(2005,'2022-06-08',34),(2005,'2022-06-09',34),(2005,'2022-06-10',34),(2006,'2022-06-08',34),(2006,'2022-06-09',34),(2006,'2022-06-10',34),(2007,'2022-06-08',34),(2007,'2022-06-09',34),(2007,'2022-06-10',34),(2008,'2022-06-08',34),(2008,'2022-06-09',34),(2008,'2022-06-10',34),(2009,'2022-06-08',34),(2009,'2022-06-09',34),(2009,'2022-06-10',34),(2010,'2022-06-08',34),(2010,'2022-06-09',34),(2010,'2022-06-10',34);
/*!40000 ALTER TABLE `room_ava` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view1`
--

DROP TABLE IF EXISTS `view1`;
/*!50001 DROP VIEW IF EXISTS `view1`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view1` AS SELECT 
 1 AS `reason`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'dbms_project'
--

--
-- Dumping routines for database 'dbms_project'
--
/*!50003 DROP PROCEDURE IF EXISTS `procedure1` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procedure1`(IN OUTDAT DATE)
BEGIN
	DECLARE I INT DEFAULT 0;
	DECLARE INDATE DATE;
    BEGIN
    SELECT DATE INTO INDATE FROM ROOM_AVA ORDER BY DATE LIMIT 1;
    DELETE FROM ROOM_AVA WHERE DATE>=INDATE AND DATE<=OUTDAT ; 
    END;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procedure2` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procedure2`(IN EMAIL VARCHAR(45))
BEGIN
	SELECT * FROM LOGIN_HOTEL WHERE EMAIL_ID=EMAIL;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `view1`
--

/*!50001 DROP VIEW IF EXISTS `view1`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view1` AS select distinct `cancel_reasons`.`reason` AS `reason` from (`login_hotel` join `cancel_reasons`) where (`login_hotel`.`ID` = `cancel_reasons`.`ID`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-04 17:36:53
