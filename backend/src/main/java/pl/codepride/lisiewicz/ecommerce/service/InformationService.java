package pl.codepride.lisiewicz.ecommerce.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import pl.codepride.lisiewicz.ecommerce.model.response.CompanyInformationResponse;

@Service("informationService")
public class InformationService {

    @Value("${contact.companyname}")
    String contactCompanyName;

    @Value("${contact.nip}")
    String contactNip;

    @Value("${contact.email}")
    String contactEmail;

    @Value("${contact.phonenumber}")
    String contactPhoneNumber;

    @Value("${contact.address.street.name}")
    String contactStreetName;

    @Value("${contact.address.street.number}")
    String contactStreetNumber;

    @Value("${contact.address.postcode}")
    String contactPostcode;

    @Value("${contact.address.voivodeship}")
    String contactVoivodeship;

    @Value("${social.facebook}")
    String facebookLink;

    @Value("${social.instagram}")
    String instagramLink;

    @Value("${social.twitter}")
    String twietterLink;


    public CompanyInformationResponse getContactInformation() {

        CompanyInformationResponse contactInformation = new CompanyInformationResponse();
        contactInformation.setCompanyName(contactCompanyName);
        contactInformation.setNip(contactNip);
        contactInformation.setEmail(contactEmail);
        contactInformation.setPhoneNumber(contactPhoneNumber);
        contactInformation.setStreet(contactStreetName);
        contactInformation.setNumber(contactStreetNumber);
        contactInformation.setPostcode(contactPostcode);
        contactInformation.setVoivodeship(contactVoivodeship);
        contactInformation.setFacebookLink(facebookLink);
        contactInformation.setInstagramLink(instagramLink);
        contactInformation.setTwitterLink(twietterLink);

        return contactInformation;
    }
}
