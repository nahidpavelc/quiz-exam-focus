import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <section class="menu-area bg-white">
  <div class="container-xl">
    <nav class="navbar navbar-expand-lg bg-white">

      <ul class="mobile-header-buttons">
        <li><a class="mobile-nav-trigger" href="#mobile-primary-nav">http://bhaters.abrms.com/menu<span></span></a></li>
        <li><a class="mobile-search-trigger" href="#mobile-search">http://bhaters.abrms.com/search<span></span></a></li>
      </ul>

      <a href="http://bhaters.abrms.com/" class="navbar-brand"><img src="http://bhaters.abrms.com/uploads/system/1a3e991f1270d1299d7f25f2519bac72.png" alt="" style={{height:'35px'}}/></a>

      <div class="main-nav-wrap">
  <div class="mobile-overlay"></div>

  <ul class="mobile-main-nav">
    <div class="mobile-menu-helper-top"></div>
        <li class="has-children text-nowrap fw-bold">
      <a href="">
        <i class="fas fa-th d-inline text-20px"></i>
        <span class="fw-500">Categories</span>
        <span class="has-sub-category"><i class="fas fa-angle-right"></i></span>
      </a>

      <ul class="category corner-triangle top-left is-hidden pb-0">
        <li class="go-back"><a href=""><i class="fas fa-angle-left"></i>Menu</a></li>

                    <li class="has-children">
            <a href="javascript:;" class="py-2 text-wrap d-flex" onclick="redirect_to('http://bhaters.abrms.com/home/courses?category=on')">
              <span class="icon"><i class="fas fa-chess"></i></span>
              <span>ON</span>
              <span class="has-sub-category ms-auto"><i class="fas fa-angle-right"></i></span>
            </a>
            <ul class="sub-category is-hidden">
              <li class="go-back-menu"><a href=""><i class="fas fa-angle-left"></i>Menu</a></li>
              <li class="go-back"><a href="">
                <i class="fas fa-angle-left"></i>
                <span class="icon"><i class="fas fa-chess"></i></span>
                ON              </a></li>
                            <li><a class="text-wrap" href="http://bhaters.abrms.com/home/courses?category=online">Online</a></li>
                      </ul>
        </li>
                <li class="has-children">
            <a href="javascript:;" class="py-2 text-wrap d-flex" onclick="redirect_to('http://bhaters.abrms.com/home/courses?category=off')">
              <span class="icon"><i class="fas fa-chess"></i></span>
              <span>Off</span>
              <span class="has-sub-category ms-auto"><i class="fas fa-angle-right"></i></span>
            </a>
            <ul class="sub-category is-hidden">
              <li class="go-back-menu"><a href=""><i class="fas fa-angle-left"></i>Menu</a></li>
              <li class="go-back"><a href="">
                <i class="fas fa-angle-left"></i>
                <span class="icon"><i class="fas fa-chess"></i></span>
                Off              </a></li>
                            <li><a class="text-wrap" href="http://bhaters.abrms.com/home/courses?category=offline">Offline</a></li>
                      </ul>
        </li>
            <li class="all-category-devided mb-0 p-0">
        <a href="http://bhaters.abrms.com/home/courses" class="py-3">
          <span class="icon"><i class="fa fa-align-justify"></i></span>
          <span>All courses</span>
        </a>
      </li>

      
            </ul>
    </li>
    
    <div class="mobile-menu-helper-bottom"></div>
  </ul>
</div>

      <form class="inline-form me-auto" action="http://bhaters.abrms.com/home/search" method="get">
        <div class="input-group search-box mobile-search">
          <input type="text" name="query" value="" class="form-control" placeholder="Search for courses"/>
          <div class="input-group-append">
            <button class="btn" type="submit"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </form>

            
      
      <div class="cart-box menu-icon-box" id="cart_items">
        <div class="icon">
	<a href="http://bhaters.abrms.com/home/shopping_cart"><i class="fas fa-shopping-cart"></i></a>
	<span class="number">0</span>
</div>

{/* <!-- Cart Dropdown goes here --> */}
<div class="dropdown course-list-dropdown corner-triangle top-right" style="display: none;"> 
{/* <!-- Just remove the display none from the css to make it work --> */}
	<div class="list-wrapper">
		<div class="item-list">
			<ul>
							</ul>
		</div>
		<div class="dropdown-footer">
			<div class="cart-total-price clearfix">
				<span>Total:</span>
				<div class="float-end">
					<span class="current-price">৳</span>
					{/* <!-- <span class="original-price">$94.99</span> --> */}
				</div>
			</div>
			<a href="http://bhaters.abrms.com/home/shopping_cart">Go to cart</a>
		</div>
	</div>
	<div class="empty-box text-center d-none">
		<p>Your cart is empty.</p>
		<a href="">Keep Shopping</a>
	</div>
</div>      </div>

      <span class="signin-box-move-desktop-helper"></span><div class="sign-in-box btn-group">

        <a href="http://bhaters.abrms.com/home/login" class="btn btn-sign-in">Log in</a>

        <a href="http://bhaters.abrms.com/home/sign_up" class="btn btn-sign-up">Sign up</a>

      </div>
       {/* <!--  sign-in-box end --> */}
    </nav>
  </div>
</section>
    </div>
  );
};

export default Navbar;