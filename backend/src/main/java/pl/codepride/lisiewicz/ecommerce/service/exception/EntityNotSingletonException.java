package pl.codepride.lisiewicz.ecommerce.service.exception;

import org.springframework.http.HttpStatus;

public class EntityNotSingletonException extends DataRepositoryException {
    private static final String STANDARD_MESSAGE_CODE = "exception.entityNotSingletonException";

    private static final HttpStatus STANDARD_RESPONSE_CODE = HttpStatus.NOT_FOUND;

    public EntityNotSingletonException() {
        super();
    }

    public EntityNotSingletonException(String overriddenMessageCode, Object[] messageParams, String exceptionMessage) {
        super(overriddenMessageCode, messageParams, exceptionMessage);
    }

    public EntityNotSingletonException(String overriddenMessageCode, Object[] messageParams) {
        super(overriddenMessageCode, messageParams);
    }

    public EntityNotSingletonException(String overriddenMessageCode) {
        super(overriddenMessageCode);
    }

    @Override
    public String getStandardMessageCode() {
        return STANDARD_MESSAGE_CODE;
    }

    @Override
    public HttpStatus getStandardResponseCode() {
        return STANDARD_RESPONSE_CODE;
    }
}
