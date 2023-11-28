-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 22 2023 г., 19:47
-- Версия сервера: 5.6.51
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `Customer` (
  `ID` int(11) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `PhoneNo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `Order` (
  `ID` int(11) NOT NULL,
  `Customer_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `OrderItem` (
  `ID` int(11) NOT NULL,
  `Order_ID` int(11) NOT NULL,
  `Produc_ID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `Product` (
  `ID` int(11) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `Customer`
  ADD PRIMARY KEY (`ID`);


ALTER TABLE `Order`
  ADD PRIMARY KEY (`ID`);


ALTER TABLE `OrderItem`
  ADD PRIMARY KEY (`ID`);


ALTER TABLE `Product`
  ADD PRIMARY KEY (`ID`);


ALTER TABLE `Customer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `Order`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `OrderItem`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `Product`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
