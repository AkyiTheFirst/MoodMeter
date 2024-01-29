function takeIn(val){
    let photo = document.getElementById("myMood");
    photo.src = "./slidePhotos/n" + val + ".png";
    document.getElementById("demo").innerHTML = moodOf(val);
}

function moodOf(val){
    if(val == 0){
        return("Very Ange!");
    }
    else if(val == 1){
        return("Ange");
    }
    else if(val == 2){
        return("Displeased");
    }
    else if(val == 3){
        return("Neutral");
    }
    else if(val == 4){
        return("Pleased");
    }
    else if(val == 5){
        return("Happe");
    }
    else if(val == 6){
        return("Very Happe!");
    }
    else{
        return("Neutral");
    }
}