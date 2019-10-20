package pl.codepride.lisiewicz.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pl.codepride.lisiewicz.ecommerce.entity.User;
import pl.codepride.lisiewicz.ecommerce.model.request.LoginRequest;
import pl.codepride.lisiewicz.ecommerce.model.request.RegistrationRequest;
import pl.codepride.lisiewicz.ecommerce.model.response.UserResponse;
import pl.codepride.lisiewicz.ecommerce.service.UserService;
import pl.codepride.lisiewicz.ecommerce.service.exception.EntityExists;
import pl.codepride.lisiewicz.ecommerce.service.exception.EntityNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public ResponseEntity hello() {
        return ResponseEntity.ok().body("I'm alive master fuck yeah!");
    }

    @RequestMapping(value = "/user/{userId}", method = RequestMethod.GET)
    public ResponseEntity getUser(@PathVariable String userId) {
        Optional<User> user = userService.findById(userId);
        if (user.isPresent()) {
            UserResponse userResponse = new UserResponse(user.get());
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody LoginRequest loginRequest) {
        try {
            User user = userService.authenticate(loginRequest);
            UserResponse userResponse = new UserResponse(user);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED, e.getStandardResponseCode());
        }
    }

    @RequestMapping(value = "/register", method = RequestMethod.PUT)
    public ResponseEntity register(@RequestBody RegistrationRequest registrationRequest) {
        try {
            User user = userService.registerUser(registrationRequest);
            UserResponse userResponse = new UserResponse(user);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        } catch (EntityExists e) {
            return new ResponseEntity<>(HttpStatus.IM_USED, e.getStandardResponseCode());
        }
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity getUsers() {
        List<User> users = userService.findAll();
        List<UserResponse> usersResponses = users.stream()
                .map(user -> new UserResponse(user))
                .collect(Collectors.toList());
        return new ResponseEntity<>(usersResponses, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/purge", method = RequestMethod.GET)
    public ResponseEntity purge() {
        userService.purge();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
