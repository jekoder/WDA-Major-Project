<body>
<div style=" width:auto; background:url(img/main_bglist.jpg) repeat-x #cccccc;height: 672px;">

<div class="container">
   <!-- begin home-main-->
   <div class="home-main clearfix">
      <div class="book-online">
         <h2>Book Online</h2>
         <form action="">
         <ul>
            <li>
               <label class="label-left">Rental Country</label>
               <input class="ipt" type="text" />
            </li>
            <li>
               <label class="label-left">Pick Up From</label>
               <input class="ipt" type="text" />
            </li>
            <li>
               <label class="label-left">Pick Up Date</label>
               <input class="ipt" type="text" />
            </li>
            <li>
               <label class="label-left">Return Date</label>
               <input class="ipt" type="text" />
            </li>
            <li>
               <label class="label-left">Driver's Age</label>
               <input class="ipt" type="text" />
            </li>
         </ul>
         <input class="btn-search" type="button" value="SEARCH" />
         </form>
      </div>
      <div class="home-slide">
         <ul class="slides">
            <li><a href="#"><img src="img/slide_pic_1.jpg" alt="" /></a></li>
            <li><a href="#"><img src="img/slide_pic_2.jpg" alt="" /></a></li>
            <li><a href="#"><img src="img/slide_pic_1.jpg" alt="" /></a></li>
            <li><a href="#"><img src="img/slide_pic_2.jpg" alt="" /></a></li>
         </ul>
      </div>
   </div>
   <!--end home-main-->
   
   <!--begin home-steps-->
   <div class="home-steps">
      <h2><em>How it all works</em>Get the Perfect Car in 4 simple steps</h2>
      <ul class="clearfix">
         <li><a href="#">1.Find a car</a></li>
         <li><a href="#">2.Book it</a></li>
         <li><a href="#">3.Pick it up</a></li>
         <li><a href="#">4.Enjoy!</a></li>
      </ul>
   </div>
   <!--end home-steps-->
   
</div>
</div>
<script type="text/javascript">
//slide
new Slide('.home-slide',{index: 1 ,effect:'fade',delay:5,firstDelay:5});
</script>