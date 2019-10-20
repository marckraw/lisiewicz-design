package pl.codepride.lisiewicz.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pl.codepride.lisiewicz.ecommerce.model.response.CompanyInformationResponse;
import pl.codepride.lisiewicz.ecommerce.service.InformationService;

@Controller
public class InformationController {

    @Autowired
    private InformationService informationService;

    @RequestMapping(value = "/company/information", method = RequestMethod.GET)
    public ResponseEntity getUser() {
        CompanyInformationResponse contactInformation= informationService.getContactInformation();
        return new ResponseEntity<>(contactInformation, HttpStatus.OK);
    }
}
