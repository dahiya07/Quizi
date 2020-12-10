-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2020 at 11:27 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bix`
--

-- --------------------------------------------------------

--
-- Table structure for table `quiz_1s`
--

CREATE TABLE `quiz_1s` (
  `id` int(11) NOT NULL,
  `Question` varchar(255) DEFAULT NULL,
  `Ans_1` varchar(255) DEFAULT NULL,
  `Ans_2` varchar(255) DEFAULT NULL,
  `Ans_3` varchar(255) DEFAULT NULL,
  `Ans_4` varchar(255) DEFAULT NULL,
  `Correct` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz_1s`
--

INSERT INTO `quiz_1s` (`id`, `Question`, `Ans_1`, `Ans_2`, `Ans_3`, `Ans_4`, `Correct`, `createdAt`, `updatedAt`) VALUES
(4, '1. What is ReactJS?\r\n', 'JSX makes code easy to write', 'It renders both on client and server side', 'Easy to write UI Test cases and integration with tools such as JEST.', 'All of the Above', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'React is a ________', 'Javascript Library', 'Javascript Framework', 'Both', 'None', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Number of elements, a valid react component can return ', '1', '2', '3', '4', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Everything in React os a _____', 'Module', 'Component', 'Package', 'Class', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'In which Directory React Component are saved?', 'Inside js/components/', 'inside vendor/components/\r\n', 'inside external/components/\r\n', 'inside vendor/', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'State in react is________', 'A Permanent storage', 'Internal Storage of the component', 'Both', 'None', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'props in react can________', 'Be changed inside the component', 'Not be Changed in the component', 'Be changed in side other component', 'none', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_2s`
--

CREATE TABLE `quiz_2s` (
  `id` int(11) NOT NULL,
  `Question` varchar(255) DEFAULT NULL,
  `Ans_1` varchar(255) DEFAULT NULL,
  `Ans_2` varchar(255) DEFAULT NULL,
  `Ans_3` varchar(255) DEFAULT NULL,
  `Ans_4` varchar(255) DEFAULT NULL,
  `Correct` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz_2s`
--

INSERT INTO `quiz_2s` (`id`, `Question`, `Ans_1`, `Ans_2`, `Ans_3`, `Ans_4`, `Correct`, `createdAt`, `updatedAt`) VALUES
(1, 'Where do eagles mate ?', 'in the clouds', 'in their nests', 'in the air', 'in a tree', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Walt Disney was said to be afraid of which creature?', 'Lions', 'Dogs', 'Mice', 'Snakes', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Apparently if a person stood up and yelled for eight years and seven months and six days, this would generate enough energy to make what?', 'An idiot out of him', 'A chocolate Bomb', 'An atomic cake', 'One cup of coffee', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'In space, which sad thing can astronauts not perform properly?', 'Cry', 'Sneeze', 'Cough', 'Hiccup', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Joey\'s Favourite line is ____', 'Can I be anymore funny', 'Unagi', 'I Know ! I Know', 'How you Doin ?', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Email` tinyint(1) DEFAULT NULL,
  `Quiz_1` float DEFAULT 0,
  `Quiz_2` float DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Name`, `Password`, `Email`, `Quiz_1`, `Quiz_2`, `createdAt`, `updatedAt`) VALUES
(1, 'ABHI', '1234', 0, 0.71, 0.6, '2020-12-07 15:48:06', '2020-12-10 22:07:50'),
(2, 'DAHIYA', '2222', 1, 0, 0, '2020-12-10 17:45:10', '2020-12-10 17:45:10'),
(3, 'DA', '2222', 1, NULL, NULL, '2020-12-10 17:49:41', '2020-12-10 17:49:41'),
(4, 'DAm', '2222', 1, 0, 0, '2020-12-10 17:50:58', '2020-12-10 17:50:58'),
(5, 'blahj', '1111', 0, 0, 0, '2020-12-10 18:00:29', '2020-12-10 18:00:29'),
(6, 'bhuu', '1475', 0, 0.86, 0, '2020-12-10 18:02:40', '2020-12-10 18:03:34'),
(7, 'abhishelll', '1414', 0, 0, 0, '2020-12-10 22:08:40', '2020-12-10 22:08:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quiz_1s`
--
ALTER TABLE `quiz_1s`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_2s`
--
ALTER TABLE `quiz_2s`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quiz_1s`
--
ALTER TABLE `quiz_1s`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `quiz_2s`
--
ALTER TABLE `quiz_2s`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
