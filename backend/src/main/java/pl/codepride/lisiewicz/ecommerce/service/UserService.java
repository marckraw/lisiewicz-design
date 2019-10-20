package pl.codepride.lisiewicz.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import pl.codepride.lisiewicz.ecommerce.entity.User;
import pl.codepride.lisiewicz.ecommerce.model.request.LoginRequest;
import pl.codepride.lisiewicz.ecommerce.model.request.RegistrationRequest;
import pl.codepride.lisiewicz.ecommerce.repository.UserRepository;
import pl.codepride.lisiewicz.ecommerce.service.exception.EntityExists;
import pl.codepride.lisiewicz.ecommerce.service.exception.EntityNotFoundException;

import java.util.List;
import java.util.Optional;

@Service("userService")
public class UserService {

    private static final String MESSAGE_NOT_FOUND_MESSAGE_CODE = "exception.entityNotFoundException.meal";

    @Autowired
    @Qualifier("userRepository")
    private UserRepository userRepository;

    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public Optional<User> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User registerUser(RegistrationRequest registrationRequest) throws EntityExists {
        Optional<User> existingUser = findUserByEmail(registrationRequest.getEmail());
        if (existingUser.isPresent())
            throw new EntityExists("User already exists");
        User user = new User(registrationRequest);

        User userSaved = userRepository.save(user);
        return userSaved;
    }

    public User authenticate(LoginRequest loginRequest) throws EntityNotFoundException {
        Optional<User> user = findUserByEmail(loginRequest.getEmail());
        if (user.isPresent()) return user.get();
        else throw new EntityNotFoundException(MESSAGE_NOT_FOUND_MESSAGE_CODE);
    }

    public void purge() {
        userRepository.deleteAll();
    }
}
