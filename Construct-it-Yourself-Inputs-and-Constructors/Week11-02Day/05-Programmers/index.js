/* eslint-disable new-cap */
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/**
 * a single programmer
*/
class Programmer {
  /**
       * @param(str) name
       * @param(str)jobtitle
       * @param(number)age
       * @param(str)favelang
       */
  constructor(

      Name,
      Jobtitle,
      age,
      Favelang,
  ) {
    this.Name = Name;
    this.Jobtitle = Jobtitle;
    this.age = age;
    this.Favelang = Favelang;
  }
  Printinfo() {
    /**
           * prints info
           */
    console.log(`
            Name: ${this.Name},
            Job: ${this.Jobtitle},
            Age: ${this.age},
            FaveLang: ${this.Favelang}`
    );
  }
}
const pgr = new Programmer(
    'nick',
    'junior dev',
    23,
    'JavaScript'
);
pgr.Printinfo();

