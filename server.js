for (i = 0; i < 2; i++) {
  const fs = require("fs");
  fs.readFile(`./input${i}.json`, "utf-8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const data = JSON.parse(jsonString)
      console.log(data);
      // Content Data
      for (j = 0; j < 6; j++) {
        // Created Variable for film name
        let nameOfFilm = data[0][j].title;
        console.log(nameOfFilm);
        // Created Variable for the content type 
        let contentData = data[0][j].contentType;
        console.log(`This is the content Type - ${contentData}`)
        // Created Variable for the Brand of the content
        let contentBrand = data[0][j].brand;
        console.log(`This is the Brand - ${contentBrand}`);
        // Created Variable for the Availability of content and in which countries
        let availabilityOfContent = data[0][j].availability;
        console.log(`This is available in - ${availabilityOfContent}`);
        // Created an Available dates variable for the available dates of the content
        let availableDates = data[0][j].availableDate;
        console.log(`Here are the available dates - ${availableDates}`);
        // Fetched and defined the popularity score from the JSON data
        popularityScore = data[0][j].popularityScore;
        console.log(`This is the popularity score ${Number(popularityScore)}`);
        
        // brandPreferancesData
        const brandPreferanceValue = Number(popularityScore);
        console.log(`this is the brand preferance value ${brandPreferanceValue}`)
        
        let brand = data[0][j].brand;
        let contentType = data[0][j].contentType;
        let brandPreferance, l;
        brandPreferance = data[1];
        for (l in brandPreferance) {
          console.log(`This is the value of l - ${l}`);
          console.log(`This is the value of the brandPreferance[l] - ${brandPreferance[l]}`)
          if ((brandPreferance[l] = "love")&&(contentBrand = l)) {
            console.log(Number(brandPreferanceValue) + 50);
          }
          else if ((brandPreferance[l] = "like")&&(contentBrand = brand)) {
            console.log(brandPreferanceValue + 10);
          } else if ((brandPreferance[l] = "adore")&&(contentBrand = brand)) {
            console.log(brandPreferanceValue + 30);
          } else if ((brandPreferance[l] = "dislike")&&(contentBrand = brand)) {
            console.log(brandPreferanceValue - 20);
          } else {
            console.log(`No data or indifferent ${brandPreferanceValue + 0}`);
          }
          
        }
        let contentPreferance, k;
        contentPreferance = data[2];
        console.log(contentPreferance);
        for (k in contentPreferance) {
          console.log(k);
          console.log(contentPreferance[k])
          if ((contentPreferance[k] = "love") && (contentData = contentType)) {
            console.log(brandPreferanceValue + 50);
          }
          else if ((contentPreferance[k] = "like") && (contentData = contentType)) {
            console.log(brandPreferanceValue + 10);
          } else if ((contentPreferance[k] = "adore") && (contentData = contentType)) {
            console.log(brandPreferanceValue + 30);
          } else if ((brandPreferance[k] = "dislike") && (contentData = contentType)) {
            console.log(brandPreferanceValue - 20);
          } else {
            console.log(`No data or indifferent ${brandPreferanceValue + 0}`);
          }
        }
        function jsonReader(filePath, cb) {
          fs.readFile(filePath, "utf-8", (err, fileData) => {
            if (err) {
              return cb && cb(err);
            }
            try {
              const object = JSON.parse(fileData);
              return cb && cb(null, object);
            } catch (err) {
              return cb && cb(err);
            }
          });
        }
        jsonReader(`./input${i}.json`, JSON.stringify(data), err => {
          if (err) {
            console.log(err);
          } else {
            data[0][j].popularityScore = brandPreferanceValue;
            fs.writeFile(`./input${i}.json`, JSON.stringify(data), err => {
              if (err) {
                console.log(err);
              }
            })
          }
        })
      }
    } catch (err) {
      console.log("Error parsing JSON", err);
    }
  }
  });
}

