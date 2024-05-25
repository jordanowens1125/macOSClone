const getDataByCity = async (input: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=39.099724&lon=-94.578331&date=2020-03-04&appid=${process.env.APIKEY}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("error");
  }
  return res.json();
};

export default getDataByCity;
