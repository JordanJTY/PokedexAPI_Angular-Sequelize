import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPokemon } from '../interfaces/ipokemon';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  endpoint: string = "http://localhost:8080/pokemon"

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

  postPokemon(pokemon: IPokemon) {
    let data = new URLSearchParams();
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
    this.http.post<IPokemon>(this.endpoint, data, httpOptionsUsingUrlEncoded).subscribe(response => { }, (error) => { console.log(error) });
  }

  putPokemon(pokemon: IPokemon, id: number) {
    let data = new URLSearchParams();
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
    this.http.put(this.endpoint + "/" + id, data, httpOptionsUsingUrlEncoded).subscribe(response => { }, (error) => { console.log(error) });
  }
}
