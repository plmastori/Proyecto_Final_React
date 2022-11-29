-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-11-2022 a las 12:54:32
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursoreact`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(11, 'España', 'Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE DOBLE ', '    Fechas y Medios de Pagos: Consultar\r\n', 'trvkbdjhoapuq6lu3vk0'),
(8, 'Londres', 'Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE DOBLE ', '    Fechas y Medios de Pagos: Consultar\r\n', 'spq5xpxnrm5ixxbkwbgl'),
(9, 'Aruba', 'Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE DOBLE ', '    Fechas y Medios de Pagos: Consultar\r\n', 'oflbzcwa3z80c3p1gykc'),
(10, 'Buenos Aires', 'Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE DOBLE ', '    Fechas y Medios de Pagos: Consultar\r\n', 'q0a0tzivbnwky7lgtequ'),
(12, 'Disney', 'Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE DOBLE ', '    Fechas y Medios de Pagos: Consultar', 'p09z0lfgvj7gjwlzaftp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'root', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Patri', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
