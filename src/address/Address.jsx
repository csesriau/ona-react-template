import { useState, useEffect, useRef } from "react";

const URL_API = "https://data.geopf.fr/geocodage/search/?q=";

function searchAddresses(value) {
  return fetch(URL_API + value)
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.log("Parse failed ", e);
      return [];
    });
}

function Address(props) {
  const [addresses, setAddresses] = useState([]);
  const [value, setValue] = useState("");

  // debounce : setTimeout

  useEffect(() => {
    if (value && value.length > 3) {
      var data = searchAddresses(value);
      data.then((data) => setAddresses(data.features));
    }
    //
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form>
        <h3>Adresse </h3>
        <input
          type="text"
          placeholder="..."
          value={value}
          onChange={handleChange}
        />
      </form>
      <br />
      <h3>Résultat(s)</h3>
      {addresses.length}
    </div>
  );
}

export default Address;

/*

{
"status": "OK",
"results": [
{
"x": 2.437785,
"y": 48.847279,
"country": "StreetAddress",
"city": "Vincennes",
"oldcity": "",
"kind": "municipality",
"zipcode": "94300",
"metropole": true,
"fulltext": "Vincennes, 94300 Vincennes",
"classification": 7
}
]
}


*/
