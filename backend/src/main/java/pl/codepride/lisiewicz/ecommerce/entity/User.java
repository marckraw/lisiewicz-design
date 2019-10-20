package pl.codepride.lisiewicz.ecommerce.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import pl.codepride.lisiewicz.ecommerce.model.request.RegistrationRequest;

@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    private String id;

    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private String authToken;

    private String tokenExpiration;

    public User(RegistrationRequest registrationRequest) {
        this.setPassword(registrationRequest.getPassword());
        this.setEmail(registrationRequest.getEmail());
        this.firstName = registrationRequest.getFirstName();
        this.lastName = registrationRequest.getLastName();
    }
}
