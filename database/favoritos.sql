-- Rode no phpMyAdmin, dentro do banco `pokemon`
CREATE TABLE `favoritos` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` int UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `favoritos_numero_unique` (`numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
