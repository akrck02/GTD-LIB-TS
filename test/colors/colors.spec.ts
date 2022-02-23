import { MODULE_DEPENDENCIES } from "../../src/typescript/gtd.js";

const assert = chai.assert;
const colors = MODULE_DEPENDENCIES.colors;

describe('COLOR TOOLS', function () {

    it('RGB TO HEX', function () {
       
        console.log(">", "\n  RGB TO HEX ");
        console.log(">", "--------------------------------------");

        const rgb = [255, 255, 255];
        const hex = "#ffffff";

        console.log(">", "Testing: rgbToHex(rgb)");
        assert.equal(
            colors.rgbToHex( rgb[0], rgb[1], rgb[2] ),
            hex,
            "The rgb suposed to be " + hex + ", but it is not"
        );
        console.log(">", "Ok.");

    });


    it('HEX TO RGB', function () {
        
        console.log(">", "\n  HEX TO RGB ");
        console.log(">", "--------------------------------------");
    
        const rgb = [0, 0, 0];
        const hex = "#000000";

        console.log(">", "Testing: hexToRgb(hex)");
        const result = colors.hexToRgb( hex );
        
        assert.equal( result.r, rgb[0], "The r suposed to be " + rgb[0] + ", but it is not" );
        assert.equal( result.g, rgb[1], "The g suposed to be " + rgb[1] + ", but it is not" );
        assert.equal( result.b, rgb[2], "The b suposed to be " + rgb[2] + ", but it is not" );
        console.log(">", "Ok.");


    })

    it('HEX TO EPIC FAIL', function () {
        
        console.log(">", "\n  HEX TO EPIC FAIL ");
        console.log(">", "--------------------------------------");

        assert.equal( 0, 1, "The r suposed to be 1, but it is not" );
        console.log(">", "Ok.");
    })

});
