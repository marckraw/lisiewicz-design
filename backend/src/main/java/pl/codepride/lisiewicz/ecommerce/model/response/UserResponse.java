package pl.codepride.lisiewicz.ecommerce.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.codepride.lisiewicz.ecommerce.entity.User;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserResponse {
    private String id;
    private String firstName;
    private String lastName;
    private String email;

    public UserResponse(User user) {
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.id = user.getId();
    }
}