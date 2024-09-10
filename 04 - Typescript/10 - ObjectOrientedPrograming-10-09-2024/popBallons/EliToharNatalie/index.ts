class Ballon {
  id: string;
  ballonImgUrl: string;
  ExplosionUrl: string;
  constructor(id: string, ballonImgUrl: string, ExplosionUrl: string)
  {
    this.id=`id-${crypto.randomUUID()}`;
    this.ballonImgUrl=ballonImgUrl;
    this.ExplosionUrl=ExplosionUrl;
  }

}

const ballon1=new Ballon("","","");
