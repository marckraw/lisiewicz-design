package pl.codepride.lisiewicz.ecommerce.model.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegistrationRequest {

    private String email;

    private String firstName;

    private String lastName;

    private String password;


    public RegistrationRequest() {
    }

    public RegistrationRequest(String email, String firstName, String lastName, String password) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}

