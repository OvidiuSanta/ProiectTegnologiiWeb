CREATE TABLE `Posts` (
  `PostId` int unsigned NOT NULL AUTO_INCREMENT,
  `UserId` int unsigned NOT NULL,
  `MediaCollectionId` int unsigned NOT NULL DEFAULT '0',
  `MediaId` int unsigned NOT NULL DEFAULT '0',
  `Type` varchar(50) NOT NULL,
  `Title_en` varchar(255) NOT NULL,
  `Description_en` text NOT NULL,
  `Post_en` longtext NOT NULL,
  `Date` datetime DEFAULT CURRENT_TIMESTAMP,
  `Visibility` tinyint unsigned NOT NULL DEFAULT '1' COMMENT '0 - not visibile, 1 - visible',
  `CreationDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`PostId`),
  KEY `Type` (`Type`,`MediaCollectionId`,`MediaId`,`Date`,`Visibility`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb3;