-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 29 mars 2023 à 13:50
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `miaou_blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `author_id`, `title`, `body`, `date`) VALUES
(6, 19, 'Nouveau titre', 'Ut tempus nibh ullamcorper magna eleifend, non ornare ipsum viverra. Integer nisl ante, dignissim non metus et, lobortis dictum ex. Etiam dignissim ipsum nec vulputate feugiat. Nullam et lectus pretium nisi euismod sodales at non quam. Donec consectetur et odio ac convallis. Mauris condimentum mi purus, nec efficitur tellus faucibus ac. Maecenas scelerisque dignissim lorem, a dictum nisl semper in. Sed fringilla erat erat, at dignissim libero scelerisque at. Nullam venenatis, elit eu laoreet scelerisque, quam eros fermentum lacus, id efficitur eros diam eget augue. Vestibulum sed eleifend justo, fermentum lacinia mauris. Vestibulum tincidunt fermentum metus, consequat iaculis neque cursus ut. Praesent facilisis metus quis tortor consequat, sed aliquet nisl aliquet.\r\n\r\nDonec gravida augue rhoncus augue ultricies, a bibendum lacus gravida. Etiam nisl erat, tempus nec dui a, eleifend egestas quam. Cras nec nunc id lorem interdum mollis. Pellentesque mauris dui, faucibus at odio sed, aliquet sagittis augue. Nulla ultrices ipsum nec ligula placerat venenatis. Suspendisse consequat metus eget vestibulum auctor. Suspendisse rutrum ultricies nisi. Quisque aliquam viverra neque, in eleifend mauris mollis sit amet. Nulla dui velit, fringilla ac dui a, blandit commodo diam. Sed odio neque, convallis sit amet nulla sit amet, laoreet eleifend tellus. Duis sit amet vestibulum massa. Nulla facilisi. Quisque nec tortor molestie mi vestibulum commodo. Fusce lectus tellus, sollicitudin at gravida in, tincidunt a arcu.', '2023-03-22 11:27:49'),
(8, 19, 'Curabitur congue vestibulum', 'Cras pharetra magna justo, in ultrices nulla blandit et. Aliquam finibus orci dolor, ut commodo neque finibus quis. Proin vel lacus turpis. In quis elit vel risus placerat semper quis sed lectus. Nunc sodales nisl vitae fermentum commodo. Morbi aliquam neque dolor, et tempor turpis blandit ac. Fusce ut erat vitae orci dapibus finibus.  Morbi laoreet nulla nunc. Nam suscipit augue dui, in tempus lacus blandit sed. Donec quis pretium augue. Mauris placerat, orci placerat varius rutrum, elit ligula laoreet felis, at rhoncus ligula ipsum vel ipsum. Sed egestas arcu quam, quis egestas libero tincidunt at. Etiam fringilla ex venenatis elit laoreet mattis. Nullam eget ornare lectus. Curabitur sed ante quis metus maximus feugiat ac vitae diam. Proin accumsan erat non sapien imperdiet, in rutrum quam aliquam. Praesent eu ultrices libero, vel gravida est. Ut varius eros quis tincidunt molestie. Aenean suscipit posuere vulputate.', '2023-03-22 11:27:49'),
(14, 19, 'Nouveau post', 'content post', '2023-03-22 11:27:49');

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `body` longtext NOT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) NOT NULL,
  `roles` varchar(180) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(19, 'admin@example.fr', 'admin', 'adminPass'),
(20, 'user@example.fr', 'user', 'userPass'),
(21, 'michel.customer@nfs.school', 'user', '!');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_23A0E66F675F31B` (`author_id`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_9474526CF675F31B` (`author_id`),
  ADD KEY `IDX_9474526C7294869C` (`article_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FK_23A0E66F675F31B` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `FK_9474526C7294869C` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `FK_9474526CF675F31B` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
