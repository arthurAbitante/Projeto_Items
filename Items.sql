CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description TEXT
);

CREATE TABLE completed(
	id SERIAL PRIMARY KEY,
	idItem INT,
	CONSTRAINT `FK_idItem` FOREIGN KEY (`idItem`) REFERENCES `items` (`id`) ON DELETE RESTRICT
);
