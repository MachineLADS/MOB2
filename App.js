import React, { Component } from "react";
import { Text, View, Image } from 'react-native';

class App extends Component {
  
  render(){
  return (
    
    <View style = {{marginTop: 30}}>
      <Image 
        source={{ uri: 'https://repositorio.sbrauble.com/arquivos/in/magic/313/5f4243b32c323-ybfet2-wsgnx3-dcff8dc1cb1162fa920db66007131ac9.jpg'}}
        style={{width: 250, height: 355}}
        />
        
        <Image 
        source={{ uri: 'https://down-br.img.susercontent.com/file/c4725d86be24837a57029b6291117956.webp'}}
        style={{width: 76, height: 82, top: 349, position: 'absolute', left: 330}}
        />


      <Text style={{ fontFamily: 'Inter-Black', borderWidth: 2, padding: 10, display: 'inline-block', borderRadius: 15, top: 4 }}>
        Artistas: Christopher Rush {"\n"} 
        Coleção: Era glacial 
        
      </Text>
      
      <Text style={{ fontFamily: 'Inter-Black', top: 6, fontSize: 20 }}>
        Coleção com artes alternativas:
      </Text>
      
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7e5NuYNA2kfqVd0vZp8txb9SyyocR7kXBB-i9qtcPEbr_dsuubQPxmNtRny4H_-96k_o&usqp=CAU'}}
        style={{width: 40, height: 50, top: 469, position: 'absolute'}}
        />
      
      
      
      
      <Text style={{ fontFamily: 'Inter-Black', borderWidth: 1, padding: 25, display: 'inline-block', borderRadius: 15, top: 4, fontSize: 11 }}>
        Coleção: Dual Deck: Izzet vs. Golgari / Artista: Willian Murai 
        
      </Text>  
      
      
      <Image 
        source={{ uri: 'https://draftsim.com/wp-content/uploads/2021/11/Mercadian-Masques-set-symbol.png'}}
        style={{width: 40, height: 40, top: 545, position: 'absolute'}}
        />
      
      
      
      
      <Text style={{ fontFamily: 'Inter-Black', borderWidth: 1, padding: 25, display: 'inline-block', borderRadius: 15, top: 4, fontSize: 11 }}>
        Coleção: Máscaras de Mercádia / Artista: Di Terlizzi 
      
      </Text> 

      <Image 
        source={{ uri: 'https://www.vhv.rs/dpng/d/279-2792311_masters-mtg-masters-25-symbol-hd-png-download.png'}}
        style={{width: 40, height: 45, top: 609, position: 'absolute'}}
        />
     
     
      
      
      <Text style={{ fontFamily: 'Inter-Black', borderWidth: 1, padding: 25, display: 'inline-block', borderRadius: 15, top: 4, fontSize: 11 }}>
        Coleção: Masters 25 / Artista: Chris Rahn 
      
      </Text>  
      
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfLLRRcfCHOUTvrSDZwshjtlogcZN2mh5UH9A0cNw-skc_C_yoSTe9Ok0efOatmYQUAU&usqp=CAU'}}
        style={{width: 60, height: 25, top: 710, position: 'absolute'}}
        />
      
      
      <Text style={{ fontFamily: 'Inter-Black', borderWidth: 1, padding: 35, display: 'inline-block', borderRadius: 15, top: 4, fontSize: 11 }}>
        Coleção: secret lair / Artistas: Justin & Alexis Hernandez 
      </Text>
      
      <Image 
        source={{ uri: 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/4/43/40K_expansion_symbol.png/revision/latest/scale-to-width-down/900?cb=20221208023312'}}
        style={{width: 60, height: 25, top: 800, position: 'absolute'}}
        />

      <Text style={{ fontFamily: 'Inter-Black', borderWidth: 1, padding: 30, display: 'inline-block', borderRadius: 15, top: 4, fontSize: 11 }}>
        Coleção: Warhammer 40.000 / Artistas: Alex Konstad 
      
      </Text>     

      

    </View>
  );
}

}

export default App;
