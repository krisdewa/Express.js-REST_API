-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_express_api
CREATE DATABASE IF NOT EXISTS `db_express_api` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_express_api`;

-- Dumping structure for table db_express_api.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `created_date` timestamp NULL DEFAULT NULL,
  `updated_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- Dumping data for table db_express_api.posts: ~5 rows (approximately)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` (`id`, `title`, `content`, `created_date`, `updated_date`) VALUES
	(1, 'Belajar Express.js 0', 'Belajar Express.js 0', NULL, NULL),
	(2, 'Belajar Express.js 1', 'Belajar Express.js 1', NULL, NULL),
	(3, 'Belajar Express.js 2', 'Belajar Express.js 2', NULL, NULL),
	(4, 'Belajar Express.js 3', 'Belajar Express.js 3', NULL, NULL),
	(8, 'Artikel satu ini adalah percobaan 1asdasd', 'Jadi ini adalah content 1 yang rencananya bakal diisi content yaudah tunggu aja content\n\n', NULL, '2022-10-27 16:16:41'),
	(9, 'asdasdasd', 'asdasdasdasd', NULL, NULL),
	(10, 'asdasdasdasd asd aSD', 'asdasdasdasdasd asdasd ad ssadasd', NULL, '2022-10-27 16:22:23');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
