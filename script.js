//Loader 
 window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking a link (mobile UX fix)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
// const hamburger=document.querySelector(".hamburger");
// const navLinks=document.querySelector(".nav-links");

// hamburger.addEventListener("click",()=>{
// navLinks.classList.toggle("active");
// });

// Counter Animation
const counters=document.querySelectorAll(".counter");
const speed=200;

counters.forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute("data-target");
const count=+counter.innerText;
const inc=target/speed;
if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,20);
}else{
counter.innerText=target;
}
};
update();
});

// Form Validation
document.getElementById("repairForm").addEventListener("submit",function(e){
e.preventDefault();
const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const device=document.getElementById("device").value;
const issue=document.getElementById("issue").value;

if(name===""||phone===""||device===""||issue===""){
alert("Please fill all fields");
}else{
alert("Repair request submitted successfully!");
this.reset();
}
});

// Back to Top
document.getElementById("topBtn").addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});



// ================= LOADER =================
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

// DARK MODE
const darkBtn=document.getElementById("darkToggle");
const body=document.body;
const icon=darkBtn.querySelector("i");

if(localStorage.getItem("theme")==="dark"){
body.classList.add("dark");
icon.classList.replace("fa-moon","fa-sun");
}

darkBtn.addEventListener("click",()=>{
body.classList.toggle("dark");
if(body.classList.contains("dark")){
icon.classList.replace("fa-moon","fa-sun");
localStorage.setItem("theme","dark");
}else{
icon.classList.replace("fa-sun","fa-moon");
localStorage.setItem("theme","light");
}
});
// ================= CLEAN PRICING SYSTEM =================

// Stable Images (Reliable)
const pricingData = {
  android: [
    {
      title: "Screen Replacement",
      price: "$15 – $50",
      desc: "Basic models $15–25, Samsung A-series $30–50",
      img: "https://images.unsplash.com/photo-1583418855719-a559fc714089?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Battery Replacement",
      price: "$10 – $30",
      desc: "Fast battery replacement service",
      img: "https://plus.unsplash.com/premium_photo-1663047430590-f2947119c3f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Charging Port / Button Fix",
      price: "$8 – $20",
      desc: "Charging & power button repair",
      img: "https://plus.unsplash.com/premium_photo-1663047221844-3f67a69ae709?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Software Issues",
      price: "$5 – $15",
      desc: "Flashing & virus removal",
      img: "https://plus.unsplash.com/premium_photo-1700592623848-91fc17d2592d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Motherboard Repair",
      price: "$25 – $80",
      desc: "Advanced chip-level repair",
      img: "https://plus.unsplash.com/premium_photo-1663013225893-dac76c8f03ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],

  iphone: [
    {
      title: "Screen Replacement",
      price: "$40 – $120",
      desc: "iPhone 11–13: $50–80, Newer models $90+",
      img: "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Battery Replacement",
      price: "$25 – $50",
      desc: "Original quality battery",
      img: "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Back Glass Replacement",
      price: "$20 – $60",
      desc: "Charging or Face ID repair",
      img: "https://images.unsplash.com/photo-1609529669235-c07e4e1bd6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Software Issues",
      price: "$15 – $40",
      desc: "iOS restore & jailbreak fix",
      img: "https://images.unsplash.com/photo-1662468353955-d7adce63c1be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Logic Board Repair",
      price: "$50 – $100",
      desc: "Advanced board-level repair",
      img: "https://plus.unsplash.com/premium_photo-1682088344933-f70f2a5a083f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
};

const pricingContainer = document.querySelector(".pricing-container");
const toggleBtns = document.querySelectorAll(".toggle-btn");

// Render Pricing
function renderPricing(type) {
  pricingContainer.innerHTML = "";

  pricingData[type].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("price-card");

    card.innerHTML = `
      <img 
        src="${item.img}" 
        alt="${item.title}" 
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/400x300?text=Repair+Service'"
      >
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="price-range">${item.price}</div>
    `;

    pricingContainer.appendChild(card);
  });

  renderPlans();
  reObserveCards(); // re-activate animation
}

// Discount Plans
function renderPlans() {

  const combo = document.createElement("div");
  combo.classList.add("price-card","plan-card");
  combo.innerHTML = `
    <h3>🔥 Combo Saver Plan</h3>
    <p>Fix 2 Issues → <strong>10% OFF</strong></p>
    <p>Fix 3+ Issues → <strong>20% OFF</strong></p>
    <img>C:\Users\hp\Desktop\javascript\hornfix\images\Phone-repair-comp.jpg</img>
    <div class="price-range">Save More 💰</div>
  `;

  const premium = document.createElement("div");
  premium.classList.add("price-card","plan-card","premium");
  premium.innerHTML = `
    <h3>⭐ Premium Care Plan</h3>
    <p>Screen + Battery Combo</p>
    <p>Free Software Service</p>
    <div class="price-range">15% OFF Total</div>
  `;

  pricingContainer.appendChild(combo);
  pricingContainer.appendChild(premium);
}

// Fix Animation Observer
function reObserveCards() {
  document.querySelectorAll(".price-card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";
    observer.observe(card);
  });
}

// Toggle Buttons
toggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderPricing(btn.dataset.type);
  });
});


// ================= DISCOUNT PLANS =================

function renderPlans(type) {

  pricingContainer.innerHTML += `
   
    <div class="price-card plan-card premium">
      <h3>⭐ Premium Care Plan</h3>
      <p>Screen + Battery Combo</p>
      <p>Free Software Service Included</p>
      <div class="price-range">15% OFF Total</div>
    </div>

    <div class="price-card plan-card text-combo">
      <h3>🔥 Combo Saver Plan</h3>
      <p>Fix 2 Issues → <strong>10% Discount</strong></p>
      <p>Fix 3+ Issues → <strong>20% Discount</strong></p>
      <div class="price-range">Save More 💰</div>
    </div>
  `;
}

// Toggle Buttons
toggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderPricing(btn.dataset.type);
  });
});

// Load default
renderPricing("android");



// ================= INTERSECTION OBSERVER =================
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
},{threshold:0.2});

document.querySelectorAll(".card,.price-card,.testimonial-card").forEach(el=>{
el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition="0.6s";
observer.observe(el);
});


// ================= FORM VALIDATION + MODAL =================
const form=document.getElementById("repairForm");

form.addEventListener("submit",(e)=>{
e.preventDefault();

const formData={
name:form.name.value,
phone:form.phone.value,
device:form.device.value,
issue:form.issue.value
};

if(Object.values(formData).includes("")){
showModal("Please fill all fields.");
return;
}

localStorage.setItem("lastRepairRequest",JSON.stringify(formData));
showModal("Repair request submitted successfully!");
form.reset();
});

function showModal(message){
const modal=document.createElement("div");
modal.style.position="fixed";
modal.style.top="0";
modal.style.left="0";
modal.style.width="100%";
modal.style.height="100%";
modal.style.background="rgba(0,0,0,0.7)";
modal.style.display="flex";
modal.style.alignItems="center";
modal.style.justifyContent="center";
modal.innerHTML=`
<div style="background:#fff;padding:30px;border-radius:10px;text-align:center;">
<p>${message}</p>
<button onclick="this.parentElement.parentElement.remove()" 
style="margin-top:15px;padding:8px 15px;background:#1CC8D1;border:none;cursor:pointer;">
Close
</button>
</div>
`;
document.body.appendChild(modal);
}


const container = document.getElementById("testimonialContainer");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// Get width of a card including margin
function getCardWidth() {
    const card = document.querySelector(".testimonial-card");
    const style = window.getComputedStyle(card);
    const margin = parseInt(style.marginRight) + parseInt(style.marginLeft);
    return card.offsetWidth + margin;
}

// How many cards fit in the visible wrapper
function getVisibleCards() {
    const wrapper = document.querySelector(".slider-wrapper");
    const cardWidth = getCardWidth();
    return Math.floor(wrapper.offsetWidth / cardWidth);
}

// Update the slide transform
function updateSlide() {
    const cardWidth = getCardWidth();
    container.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Next slide
function nextSlide() {
    const totalCards = document.querySelectorAll(".testimonial-card").length;
    const visibleCards = getVisibleCards();
    if (index < totalCards - visibleCards) {
        index++;
    } else {
        index = 0; // loop back
    }
    updateSlide();
}

// Previous slide
function prevSlide() {
    const totalCards = document.querySelectorAll(".testimonial-card").length;
    const visibleCards = getVisibleCards();
    if (index > 0) {
        index--;
    } else {
        index = totalCards - visibleCards;
    }
    updateSlide();
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Responsive: recalc transform on window resize
window.addEventListener("resize", updateSlide);

