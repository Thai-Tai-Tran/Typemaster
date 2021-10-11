-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 11. Okt 2021 um 08:35
-- Server-Version: 10.4.14-MariaDB
-- PHP-Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `typemaster`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email_address` varchar(40) NOT NULL,
  `tel_number` int(20) NOT NULL,
  `password` varchar(64) NOT NULL,
  `birthdate` date NOT NULL,
  `gender` enum('female','male','diverse') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`id`, `username`, `first_name`, `last_name`, `email_address`, `tel_number`, `password`, `birthdate`, `gender`) VALUES
(61, 'X_Williams-X', 'Xavier', 'Hayes-Williams', 'x.williams@gmail.com', 1234567890, '973587778515457d1ef2c40e84ca60dd', '1973-05-09', 'male'),
(62, 'Lilly', 'Lilian', 'Muntz', 'l.muntz@gmail.com', 2147483647, '15c3b1dafc74335c22e55434666eac69', '1989-11-11', 'female'),
(63, 'Yui', 'Yue Jie', 'Shao', 'y.shao@gamil.com', 2147483647, 'hfghlj34565fc8009b133f37c36b818663443e53e', '1981-04-03', 'female'),
(64, 'Nana', 'Naina', 'Alekseeva', 'n.alekseeva@gmail.com', 2147483647, 'c2845daf94c6075a752dd7820858aa56', '1996-08-27', 'female'),
(65, 'Cy', 'Cyrus', 'Melo', 'c.melo@gmail.com', 2147483647, 'fc5aa966b69a7629b29085ad02160f61', '1994-11-27', 'diverse'),
(66, 'Not_Santa', 'Santa', 'Claus', 'northpole@info.com', 2147483647, '16b0054731879ddee5ba4047a8ec6ae1', '1930-12-24', 'male'),
(67, 'Mimi', 'Mimir', 'Jørgensen', 'm.jorgensen@gmail.com', 2147483647, '79fbdf80d29377c11e4c109beb90ff56', '1973-01-31', 'diverse'),
(68, 'Yrem', 'Yonas', 'Efrem', 'y.efrem@gmai.com', 2147483647, '0d0de78d16ea533e6715334d958d11e7', '1960-11-05', 'male'),
(69, 'KayM', 'Katrin', 'Mahler', 'k.mahler@gmail.com', 2147483647, 'caedc549266e4332f89dd1912c499c19', '1979-06-12', 'female');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
