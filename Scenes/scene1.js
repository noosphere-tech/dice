class scene1 extends Phaser.scene{
	constructor(){
		super("bootGame");
	}
	create(){
		this.add.text(20 , 20, "Loading....");
	}
	
}