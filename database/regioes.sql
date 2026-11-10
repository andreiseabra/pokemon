-- Rode no phpMyAdmin, dentro do banco `pokemon` (igual ao dump do professor)
CREATE TABLE `regioes` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `regioes` (`id`, `nome`) VALUES
(1, 'kanto'),
(2, 'johto'),
(3, 'hoenn'),
(4, 'sinnoh'),
(5, 'unova'),
(6, 'kalos'),
(7, 'alola'),
(8, 'galar');
