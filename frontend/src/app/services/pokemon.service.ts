import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPokemon } from '../interfaces/ipokemon';

// const httpOptionsUsingUrlEncoded = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
// };

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  endpoint: string = "http://localhost:8080/api/pokemon"

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get<Array<IPokemon>>(this.endpoint);
  }

  getPokemon(id: number) {
    return this.http.get<IPokemon>(this.endpoint + "/" + id);
  }

  deletePokemon(id: number) {
    this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
  }

  postPokemon(pokemon: IPokemon, blob) {
    let data = new FormData();
    data.append("numpokemon", pokemon.numpokemon.toString());
    data.append("name", pokemon.name);
    data.append("type1", pokemon.type1);
    data.append("type2", pokemon.type2);
    data.append("hp", pokemon.hp.toString());
    data.append("attack", pokemon.attack.toString());
    data.append("defense", pokemon.defense.toString());
    data.append("sp_attack", pokemon.sp_attack.toString());
    data.append("sp_defense", pokemon.sp_defense.toString());
    data.append("speed", pokemon.speed.toString());
    data.append("file", blob);
    this.http.post<IPokemon>(this.endpoint, data).subscribe(response => { }, (error) => { console.log(error) });
  }

  putPokemon(pokemon: IPokemon, id: number, blob) {
    let data = new FormData();
    data.append("numpokemon", pokemon.numpokemon.toString());
    data.append("name", pokemon.name);
    data.append("type1", pokemon.type1);
    data.append("type2", pokemon.type2);
    data.append("hp", pokemon.hp.toString());
    data.append("attack", pokemon.attack.toString());
    data.append("defense", pokemon.defense.toString());
    data.append("sp_attack", pokemon.sp_attack.toString());
    data.append("sp_defense", pokemon.sp_defense.toString());
    data.append("speed", pokemon.speed.toString());
    data.append("file", blob);
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, (error) => { console.log(error) });
  }
}
