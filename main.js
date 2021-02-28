var okoyeFamilyBookImgSrcStrs=['images/will_n_okoye.jpg', 'images/christina_i_okoye.jpg', 'images/okoye_twins.jpg', 'images/chuckwuemeka_i_okoye.jpg', 'images/chinelo_i_okoye.jpg', 'images/okoye_parents.jpg', 'images/okoye_family.jpg'];
var okoyeFamilyBookImgAltStrs=['Will N. Okoye', 'Christina I. Okoye', 'Okoye Twins', 'Chuckwuemeka (nickname Chuck) I. Okoye', 'Chinelo I. Okoye', 'Okoye Parents', 'Okoye Family'];
var i=0;
var h2=document.querySelector('h2');
var okoyeFamilyBookImg=document.querySelector('img');

function prevImg(){
    i=i-1;

    if(i<0){
        i=6;
    }

    okoyeFamilyBookImg.src=okoyeFamilyBookImgSrcStrs[i];
    okoyeFamilyBookImgAltStrs.alt=okoyeFamilyBookImgAltStrs[i];
    h2.innerText=okoyeFamilyBookImgAltStrs[i];
}

function nextImg(){
    i=i+1;

    if(i>6){
        i=0;
    }

    okoyeFamilyBookImg.src=okoyeFamilyBookImgSrcStrs[i];
    okoyeFamilyBookImgAltStrs.alt=okoyeFamilyBookImgAltStrs[i];
    h2.innerText=okoyeFamilyBookImgAltStrs[i];
}