import { describe, it } from "mocha";
import { isValidEmail, isValidUrl } from "../../src/typescript/validation/regexp";

var assert = require('assert');

describe('REGULAR EXPRESSION TOOLS', function () {

    it('VALID EMAIL', function () {

      console.log("---------------------------------------------");
      console.log("  VALID EMAIL TEST                           ");
      console.log("---------------------------------------------");
      

      const validEmail = "mymail99.12x6a.amigo@mymailprovider.com";
      const EmailWithoutName = "@mymailprovider.com";
      const EmailWithoutDomain = "mymail@";
      const EmailWithInvalidDomain = "mymail@amigo";

      console.log("\nTesting valid email: " + validEmail);
      assert.equal(isValidEmail(validEmail), true, "The email suposed to be valid, but it is not"); 
      console.log("Ok.");
          
      
      console.log("\nTesting email without name: " + EmailWithoutName);
      assert.equal(isValidEmail(EmailWithoutName), false, "The email suposed to be invalid, but failed");   
      console.log("Ok.");  
      
      console.log("\nTesting email without domain: " + EmailWithoutDomain);
      assert.equal(isValidEmail(EmailWithoutDomain), false, "The email suposed to be invalid, but failed");     
      console.log("Ok.");

      console.log("\nTesting email with invalid domain: " + EmailWithInvalidDomain);
      assert.equal(isValidEmail(EmailWithInvalidDomain), false, "The email suposed to be invalid, but failed");     
      console.log("Ok.");

    });


    it('VALID URL', function () {

      console.log("---------------------------------------------");
      console.log("  VALID URL TEST                           ");
      console.log("---------------------------------------------");

      const validUrl = "http://www.mydomain.com";
      const validUrlWithPort = "http://www.mydomain.com:8080";
      const validUrlWithPath = "http://www.mydomain.com/path/to/file.html";

      const invalidUrl = "http:/amigo";

      console.log("\nTesting valid url: " + validUrl);
      assert.equal(isValidUrl(validUrl), true, "The url suposed to be valid, but it is not");
      console.log("Ok.");

      console.log("\nTesting valid url with port: " + validUrlWithPort);
      assert.equal(isValidUrl(validUrlWithPort), true, "The url suposed to be valid, but it is not");
      console.log("Ok.");

      console.log("\nTesting valid url with path: " + validUrlWithPath);
      assert.equal(isValidUrl(validUrlWithPath), true, "The url suposed to be valid, but it is not");
      console.log("Ok.");

      console.log("\nTesting invalid url: " + invalidUrl);
      assert.equal(isValidUrl(invalidUrl), false, "The url suposed to be invalid, but it is not");
      console.log("Ok.");

    })

});
