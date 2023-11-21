

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-between items-center   text-neutral-content ">
  <div className=" bg-[#1F2937] w-[650px] h-[230px]">
  <aside className="mt-10">
    <h3 className="text-center ">CONTACT US</h3>
    <p className="text-center mt-4">123 ABS Street, Uni 21, Bangladesh <br />
+88 123456789 <br />
Mon - Fri: 08:00 - 22:00 <br />
Sat - Sun: 10:00 - 23:00</p>
  </aside> 
  </div>
 <div className=" bg-[#111827] w-[650px] h-[230px]">
 <nav className="mt-10">
    <header className="text-center text-lg">Follow US</header> 
    <h2 className="text-center text-xs my-2">Join us on social media</h2>
    <div className="flex justify-center gap-8 mt-6">
    <a href="https://www.facebook.com/"><img src="https://i.ibb.co/Wkc8wKb/facebook-app-symbol-1.png" alt="" /></a> 
      <a href="https://www.instagram.com/"><img src="https://i.ibb.co/K2QGkCS/Group-40.png" alt="" /></a> 
      <a href="https://www.twitter.com/"><img src="https://i.ibb.co/V3X6gRP/twitter-1.png" alt="" /></a>
    </div>
  </nav>
 </div>
 
</div>
<div className="footer footer-center p-4 bg-[#151515] text-neutral-content">
  <aside>
    <p>Copyright © CulinaryCloud. All rights reserved.</p>
  </aside>
</div>
        </footer>
    );
};

export default Footer;