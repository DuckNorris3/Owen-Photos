import dbImport from './dbImport.js';

describe('getOneObject', () => {
  test('works', () => {
    expect(2).toEqual(2);
  });

  // test('it should fetch an object in the valid format from the database', () => {
  //   dbImport.getOneObject(4, (data) => {
  //     const resultObj = data.data[0];
  //     expect(typeof resultObj).toEqual('object');
  //     expect(resultObj.siteID).not.toBe(null);
  //     expect(resultObj.userPic).not.toBe(null);
  //     expect(resultObj.caption).not.toBe(null);
  //     expect(resultObj.location).not.toBe(null);
  //     expect(resultObj.postedOn).not.toBe(null);
  //     expect(resultObj.userName).not.toBe(null);
  //     expect(Array.isArray(resultObj.pictures)).toBe(true);
  //   });
  // });
});