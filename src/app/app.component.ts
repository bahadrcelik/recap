import { Component } from '@angular/core'; //"@Componenet" declariton kullanabilmek için yazıyoruz.

@Component({
  selector: 'app-root', // "app-root" 'u bir tag olarak kullanabilmek için 'selector' kullanıyourz.
  templateUrl: './app.component.html', // "./" aynı klasör demektir.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'recap';
  user:string = "Bahadır Çelik";
 
}
