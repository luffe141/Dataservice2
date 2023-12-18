import jsonData from './../../expressserver/summoners/luffe141-eune/summoner.json';

const champions = {
  266: { id: 266, name: 'Aatrox' },
  103: { id: 103, name: 'Ahri' },
  84: { id: 84, name: 'Akali' },
  166: { id: 166, name: 'Akshan' },
  12: { id: 12, name: 'Alistar' },
  32: { id: 32, name: 'Amumu' },
  34: { id: 34, name: 'Anivia' },
  1: { id: 1, name: 'Annie' },
  523: { id: 523, name: 'Aphelios' },
  22: { id: 22, name: 'Ashe' },
  136: { id: 136, name: 'Aurelion Sol' },
  268: { id: 268, name: 'Azir' },
  432: { id: 432, name: 'Bard' },
  526: { id: 526, name: 'BelVeth' }
}

const Riotgames = () => {
  // Now you can use jsonData in your component
 


  let lastPlayTime = "";
  let championId = "";
  

if(jsonData){

  for (const data of jsonData){

    if(data.lastPlayTime){
      
      if (data.lastPlayTime>lastPlayTime){
        
        lastPlayTime= data.lastPlayTime;
        championId = data.championId;  
      }
    }

  }
}

console.log(champions[championId]);
  return (
    <div>
      <h1>Luffe141 sidste spillede champion</h1>
      <p>
        {champions[championId].name}
      </p>
    </div>
  );
};

export default Riotgames;