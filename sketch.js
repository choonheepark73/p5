//let star;
let stars=[];
let factor=100;
let speedSlider;
let width, height;

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);
  speedSlider=createSlider(0,20,1,1);// min max 기본값 단위
  //star = createVector(800,0,10);//두개(세개)의 값을 하나로 묶어줌 x y z
  //  star = createVector(
  //   random(-200*2,200*2), 
  //   random(-200,200),
  //   random(10,400));

  for(let i=0; i<500;i++){
    stars[i] = createVector(
      random(-width*factor,width*factor), 
      random(-height*factor,height*factor),
      random(width));
    stars[i].pz=stars[i].z;//이전의 값을 pz를 만들어 넣어줌  stars x y z pz 네개의 값 가지고 있음
  } 

}

function draw() {
  background(0);
  fill(255);
  translate(width/2, height/2);

  for(let star of stars){
    let x=star.x/star.z;
    let y=star.y/star.z;
    let px=star.x/star.pz;
    let py=star.y/star.pz;

    let d=map(star.z,0,width,10,1);
    fill(255);
    //fill(0,255,0);
    //stroke(0,0,255);
    noStroke();//윤곽선 없애기
    circle(x,y,d);
    stroke(255);
    line(x,y,px,py);
    star.pz = star.z;
    //rect(x,y,d);//사각형이 날아오게
    //textSize(d*5);
    //text("*",x,y);//문자 날아오게
    //text("별",x,y);//문자 날아오게
   // text(int(random(1,10)),x,y);
    star.z -= speedSlider.value();//속도 숫자가 커지면 빨라짐
    if(star.z<1){
      star.x = random(-width*factor,width*factor);
      star.y = random(-height*factor,height*factor);
      star.z =width;
      star.pz=width;
    }
    
  }

  // let x=star.x/star.z;
  // let y=star.y/star.z;

  // let d=map(star.z,0,400,1,10);//map 숫자의 범위를 지정
  //et d=15
  //circle(star.x,star.y,d);//x y 길이
  //circle(x,y,d);
  //star.z += 10
  // rectMode(CENTER);
  // rect(mouseX, mouseY, 100);

}
