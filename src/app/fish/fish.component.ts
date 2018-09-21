import { Component } from '@angular/core';

@Component({
    selector: 'fish',
    templateUrl: './fish.component.html',
    styles: [`
        .changeWhite{
            color: white;
        }
    `]
})
export class FishComponent{
    fishMessage = 'Hello World from Fish';
    isShow = false;
    message = "Display";
    fishMessages = [];
    
    showMessage(){
        if(this.isShow === false){
            this.isShow = true;
            this.fishMessages.push(this.fishMessage);
            this.message = "Hide";
        }
        else{
            this.isShow = false;
            this.message = "Display";
        }
    }
    
    getColor(){
        return this.fishMessages.length >= 5 ? 'blue' : null;
    }
}