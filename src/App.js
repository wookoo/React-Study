import React from 'react';

function Food({foodName}){
  console.log(foodName);
  return(
    <div>
      <h3>{foodName}</h3>
      <img src={"https://i.ytimg.com/vi/f08PnZA9AyY/hqdefault.jpg"} alt={foodName}/>
    </div>

  );
}

const FoodList = ["감w자","김치","햄버거","피자","고기","엄"];


function App() {
  return (

    <div>
      <h1>hellasdo</h1>
      {FoodList.map(foodName=><Food key={foodName} foodName={foodName}/>)} {/*3번라인의 name 이랑 같음*/}
    </div>

  );
}

export default App;
