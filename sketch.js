let video;
let poseNet;
let pose;
let img;
function setup() {
	createCanvas(640, 480);
	video = createCapture(VIDEO);
	// img = loadImage('https://www.pngarts.com/files/4/Male-Face-PNG-Image-Transparent.png'); 
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
	console.log(poses);
	if(poses.length > 0) {
		pose = poses[0].pose;
	}
}

function modelLoaded() {
	console.log('poseNet Ready');
}

function draw() {
	image(video, 0, 0);
	if(pose) {
	fill(255, 0, 0);
	ellipse(pose.nose.x, pose.nose.y, 64);
	//image(img, pose.nose.x, pose.nose.y);
	}
}