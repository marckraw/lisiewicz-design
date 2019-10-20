package pl.codepride.lisiewicz.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class LisEcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(LisEcommerceApplication.class, args);
	}
}
