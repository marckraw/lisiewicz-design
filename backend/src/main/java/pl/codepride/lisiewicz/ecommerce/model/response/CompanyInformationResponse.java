package pl.codepride.lisiewicz.ecommerce.model.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CompanyInformationResponse {
    private String email;
    private String street;
    private String number;
    private String postcode;
    private String voivodeship;
    private String nip;
    private String companyName;
    private String phoneNumber;
    private String facebookLink;
    private String twitterLink;
    private String instagramLink;

}
