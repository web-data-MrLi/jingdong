$(function(){


	function yidong(xianshi,yincang){
    var item=$(xianshi);
	var list=$(yincang);
	for(var i=0;i<item.length;i++){
		item[i].index=i;
		item[i].onmouseover=function(){
			//for(var i=0;i<list.length;i++){
			//}
		list[this.index].style.display="block";
		}
         item[i].onmouseout=function(){
		list[this.index].style.display="none";
		}
	    }
}

yidong(".bbb",".b0b")
  //选想咯

    function xuanka(a,b,c){
    var item0=$(a);
	var list0=$(b);
	var xuan=$(c) 
	    xuan[0].style.display="block";
	    list0[0].style.display="block";
	for(var i=0;i<item0.length;i++){
		item0[i].index=i;
		item0[i].onmouseover=function(){
			for(var i=0;i<item0.length;i++){
			 xuan[i].style.display="none";
	         list0[i].style.display="none";
		    }
		xuan[this.index].style.display="block";
		list0[this.index].style.display="block";
	      }
			}
			}
xuanka(".fidi1",".f1di",".bian")
xuanka(".df2",".df1",".bian1")
xuanka(".pufa",".pin1",".bian2")
xuanka(".puying",".wei",".bian3")
xuanka(".shuma",".dianm",".bian4")
xuanka(".shuma",".dianm",".bian4")
xuanka(".che",".che4",".che2")
xuanka(".dong",".dong3",".dong2")
xuanka(".huo",".huo3",".huo2")
xuanka(".wanju",".wanju3",".wanju2")
xuanka(".shipin",".shipin3",".shipin2")
xuanka(".tushu",".tushu3",".tushu2")
     
                 function lunbobo(a,b,c,d,e,f){
                 var luns=$(f,$(a)[0]);
		         var zhangs=$("li",$(b)[0]);
		         var middle=$(c)[0];
                 var lefts=$(d)[0];
			     var rights=$(e)[0];
			     var mw=parseInt(getStyle(middle,"width"));
                 var flag=true;
                      //初始化
				 for(var i=0;i<luns.length;i++){
				        if(i==0){continue;}
						luns[i].style.left=mw+"px";
				        }
                         zhangs[0].className="hot";
						//轮播
				    var next=0;
                    var now=0;
                   var t=setInterval(mave,2000);
					  function mave(){
					         next++
						     if(next==luns.length){next=0};
						        luns[next].style.left=mw+"px";
								//¼Ó600µÄ¿ÉÒÔÊ¡È¥³õÊ¼»¯»°
                                animate(luns[now],{left:-mw},600);
								animate(luns[next],{left:0},600,function(){flag=true});
								zhangs[now].className="";
						        zhangs[next].className="hot";
								now=next;
						         }
			            //移入移出
			         middle.onmouseover=function(){
				     clearInterval(t)
				           } 
                     middle.onmouseout=function(){
				     t=setInterval(mave,2000) } 
			         lefts.onclick=function(){
						 if(flag)
						 { mavel();}
						   flag=false;
					       }
                          rights.onclick=function(){
							  if(flag){
							  mave();
							  }flag=false;
					     }
			            function mavel(){
					      next--;
						  if(next<0)
							  {next=luns.length-1};
						  luns[next].style.left=-mw+"px";
                          animate(luns[now],{left:mw});

                          zhangs[now].className="";
						  zhangs[next].className="hot";
					      animate(luns[next],{left:0},function(){flag=true});
						  now=next;
						              }
                    for(var i=0;i<zhangs.length;i++){
				                zhangs[i].index=i;
					            zhangs[i].onclick=function(){
					              if(now>this.index){  luns[this.index].style.left=mw+"px";
                                  animate(luns[now],{left:-mw});
								  animate(luns[this.index],{left:0});
						           }else if(now<this.index)
								   {
                                    luns[this.index].style.left=-mw+"px";
                                    animate(luns[now],{left:mw});
								    animate(luns[this.index],{left:0});
						            }
									 zhangs[now].className="";
						             zhangs[this.index].className="hot";	
						             now=this.index;
						             next=this.index;
						       }
				           }
                          }

      lunbobo(".lun",".zhang",".wb",".left",".right","a");
      lunbobo(".r70",".rli1",".r7",".leve",".reve","a");
      lunbobo(".o11",".sanli",".oo1",".sanleve",".sanreve","a");
      lunbobo(".o12",".sili",".oo2",".sileve",".sireve","a");
      lunbobo(".o13",".wuli",".oo3",".wuleve",".wureve","a");
      lunbobo(".j3",".shili",".jo3",".shileve",".shireve","a");
      lunbobo(".y91",".erli",".y9",".erleve",".erreve",".y90");
      lunbobo(".f31",".liuli",".f3",".liuleve",".liureve",".f311");
      lunbobo(".f301",".qili",".f03",".qileve",".qireve",".f3101");
      lunbobo(".f3001",".bali",".f003",".baleve",".qireve",".f31001");
      lunbobo(".f30001",".jiuli",".f0003",".jiuleve",".qireve",".f310001");
      lunbobo(".k13",".shi1li",".k12",".shi1leve",".shi1reve","a");
      lunbobo(".z03",".shierli",".z3",".shierleve",".shierreve","a");
      lunbobo(".z003",".shier0li",".z013",".shier0leve",".shier0reve","a");
                    
		 // var head=$(".head")[0];
		 // var bann=$(".bann");
		 // var dibu=$(".dibu");
		 // var bannl=$(".ban_lou");
		     
		 // var zuo=$(".zuo")[0];
		 // var li=$("li",zuo);
		 // var Cheight=document.documentElement.clientHeight;
		 // var height=zuo.offsetHeight;
		 // var bannll=bannl[0].offsetTop;
   //        zuo.style.display="none"
   //        var now
   //        var flag=true;
   //        var flag1=true;
   //        // console.log(bannl[1].offsetTop)
   //               window.onscroll=function(){
   //               	var obj=document.documentElement.scrollTop;
   //               	if(obj>bannll-300){
   //               	zuo.style.display="block";
   //               	zuo.style.top=(Cheight-height)/2+"px";
   //               	}
   //               	if(obj<bannll-300){
   //               		zuo.style.display="none";
   //               	}
   //                  for(var i=0;i<11;i++){
   //                  	if(obj>bannl[i].offsetTop-200){
   //                  		for(var j=0;j<11;j++){
   //                  		li[j].style.background="#fff"
   //                  	}

   //                  		li[i].style.background="red";
   //                  		now=i;

   //                  	}
   //                  }
   //                }
   //                for(var i=0;i<li.length;i++){
   //                	  li[i].index=i;
   //                	 li[i].onclick=function(){

   //                	 	animate(document.documentElement,{scrollTop:bannl[this.index].offsetTop},600);
   //                	 }
   //                	 li[i].onmouseover=function(){
   //                	 	 li[this.index].style.background="red"
   //                	 }
   //                	  li[i].onmouseout=function(){
                  	 	
   //                	 	 if(this.index==now){
   //                	 	 	return }
   //                	li[this.index].style.background="#fff" 	 
   //                	 }
   //                }
 ff(".e1",".foor",".data",".foor-list");
     function ff(b,c,d,e){
      var banner=$(b);
     var bannerH=banner[0].offsetTop;
     var two=$(c)[0];
     var foor=$(d);
  var foor_list=$(e);
  var lou=$(".lou");  
  var ceng=$(".ceng"); 
  var cHeight=document.documentElement.clientHeight;
    var flag=true;
  var flae2=true;
  var now;
  for(var i=0;i<foor.length;i++){
         foor[i].h=foor[i].offsetTop;
  }
  for(var i=0;i<12;i++){
    ceng[i].style.display='none';
  }
  window.onscroll=function(){
    var obj=document.body.scrollTop?document.body:document.documentElement;
         var  top=obj.scrollTop;              
      if(top>foor[0].h-500){
          var nHeight=two.offsetHeight;
          two.style.display="block";
        
          two.style.top=(cHeight-nHeight)/2+"px";   
      }
       if(top<foor[0].h-300){
        two.style.display="none";
       } 
    
       for(var i=0;i<foor.length;i++){   
        if(top>=foor[i].h-200){

          for(var j=0;j<foor_list.length;j++){
            lou[j].style.display="block";
            ceng[j].style.display="none";
            
          } 
           lou[i].style.display="none";
          ceng[i].style.display="block";
          
           now=i;
           }
       }
        for (var i=0;i<foor_list.length;i++) {
          foor_list[i].index=i;
           foor_list[i].onclick=function(){
                      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
                       animate(obj,{scrollTop:foor[this.index].h},500);
                     
                       now=this.index;
             }  
             foor_list[i].onmouseover=function(){
              this.style.background="#c81623";
             }   
             foor_list[i].onmouseout=function(){
              if(this==now){
                return;
              }
              this.style.background="#fff";

             }
       } 
     }
   }

//ban下一部分
 function lunbo(a,c,d){
 var cen=$(a)[0];
 var one=$("ul",$(a)[0]);
   var btnl=$(c)[0];
   var btnr=$(d)[0];
  var wm=parseInt(getStyle(cen,"width"));
  var text=0;
  var now=0;
  one[0].style.zIndex=10;
  //初始化
        for(var i=0;i<one.length;i++){
          if(i==0){continue;}
        one[i].style.left=wm+"px"; 
        }
   //  //左右箭头
    var flag=true;
   btnr.onclick=function(){
      if(flag){
         aa();
         flag=false;
      }
      
   }
   btnl.onclick=function(){
      if(flag){
         bb();
         flag=false;
      }
   }
   //自动轮播图
   //记录当前窗口图片下表
  
  function aa(){
    text++;
    if(text==one.length){
    text=0;
    }
    //先让所有图片层级降低；当前层及图片调高
    for(var i=0;i<one.length;i++){
      one[text].style.left=wm+"px";     
      animate(one[now],{left:-wm});
      animate(one[text],{left:0},function(){flag=true});
      now=text;
      }
        }
  
  function bb(){
     text--;
     if(text<0){
     text=one.length-1;
     }
     for(var i=0;i<one.length;i++){
      one[text].style.left=-wm+"px";
      animate(one[now],{left:wm});
      animate(one[text],{left:0},function(){flag=true});
      now=text;
      }
        }
  }
lunbo(".tworight",".twol",".twor");
//youlan
var yc=$("li",$(".youlan1")[0]);
    for(var i=0;i<yc.length;i++){
        yc[i].index=i;
        yc[i].onmouseover=function(){
            this.style.backgroundColor="#c81623";
            animate($("span",this)[0],{left:-60},200);
        }
        yc[i].onmouseout=function(){
            var that=this.index;
            animate($("span",this)[0],{left:0},200,function(){
               yc[that].style.backgroundColor="#7a6e6e";
            })
        }
    }



	})


	 