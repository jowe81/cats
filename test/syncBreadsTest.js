const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

const catBreeds = {
  'Balinese': "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.",
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};


describe('#breedDetails', () => {
  for (let breed in catBreeds) {
    it(`returns breed details for the ${breed} breed`, () => {
      assert.strictEqual(breedDetails(breed), catBreeds[breed]);
    });
  }

  it('returns undefined for no input', () => {
    assert.strictEqual(breedDetails(), undefined);
  });

  it('returns undefined for a non-extant breed name', () => {
    assert.strictEqual(breedDetails("lighthousecat"), undefined);
  });

});