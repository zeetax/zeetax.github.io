// Counter Animation
document.querySelectorAll('.counter').forEach(counter=>{
  counter.innerText='0';
  const update=()=>{
    const target=+counter.getAttribute('data-target');
    const c=+counter.innerText;
    const increment=target/200;
    if(c<target){
      counter.innerText=`${Math.ceil(c+increment)}`;
      setTimeout(update,10);
    }else{
      counter.innerText=target;
    }
  };
  update();
});
