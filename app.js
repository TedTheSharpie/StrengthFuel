const meals = [
  {id:'oats',name:'Protein Oats',cal:700,protein:46,carbs:94,fat:16,ingredients:['100 g oats','300 ml low-fat milk','30 g protein powder','1 banana','Cinnamon','Optional: 15 g peanut butter'],steps:['Cook oats with milk for a few minutes.','Remove from heat and stir in protein powder.','Top with sliced banana, cinnamon and optional peanut butter.']},
  {id:'eggs',name:'Eggs & Toast',cal:690,protein:47,carbs:55,fat:28,ingredients:['4 eggs','3 slices wholegrain bread','50 g ham or turkey slices','Tomato/cucumber','Optional: a little cheese'],steps:['Fry or scramble the eggs.','Add ham or turkey to the bread.','Serve with vegetables on the side.']},
  {id:'wraps',name:'Chicken Wraps',cal:760,protein:61,carbs:72,fat:22,ingredients:['200 g chicken breast','2 large tortillas','30 g grated cheese','Lettuce','Tomato','Cucumber','40–50 g yoghurt dressing or salsa'],steps:['Cut and season the chicken.','Fry until fully cooked.','Warm tortillas and fill with chicken, vegetables, cheese and dressing.']},
  {id:'taco',name:'Taco Bowl',cal:850,protein:60,carbs:92,fat:24,ingredients:['200 g lean minced beef','90 g rice','½ packet taco seasoning','100 g kidney beans','Corn','Lettuce','Salsa','30 g grated cheese'],steps:['Cook the rice.','Fry the beef and mix in taco seasoning.','Drain beans and assemble everything in a bowl.']},
  {id:'pasta',name:'Creamy Chicken Pasta',cal:860,protein:66,carbs:92,fat:25,ingredients:['200 g chicken breast','100 g pasta','100 ml light cooking cream','Onion','Spinach','Garlic','15–20 g parmesan'],steps:['Cook pasta.','Fry chicken with seasoning.','Add onion, spinach, garlic and cream.','Simmer briefly and mix with pasta and parmesan.']},
  {id:'salmon',name:'Salmon & Potatoes',cal:800,protein:48,carbs:78,fat:31,ingredients:['200 g salmon fillet','350–400 g potatoes','Broccoli','Carrots','50 g light sour cream','Lemon'],steps:['Cut potatoes into wedges and bake at 210°C for about 30–40 minutes.','Add salmon for the final 12–15 minutes, until safely cooked.','Steam vegetables and serve with sour cream mixed with lemon, salt and pepper.']},
  {id:'curry',name:'Chicken Curry & Rice',cal:840,protein:59,carbs:105,fat:20,ingredients:['200 g chicken breast','100 g basmati rice','150 ml light coconut milk','Curry powder or paste','Onion','Bell pepper','Broccoli'],steps:['Cook rice.','Fry chicken and onion.','Add vegetables, coconut milk and curry.','Simmer until chicken is cooked and sauce thickens.']},
  {id:'burger',name:'Homemade Burger & Potatoes',cal:900,protein:58,carbs:90,fat:33,ingredients:['200 g lean minced beef','1 burger bun','20–30 g cheese','Lettuce','Tomato','Onion','Ketchup/light burger dressing','300 g potatoes'],steps:['Shape and season the beef into patties.','Bake or air-fry potato wedges.','Cook patties thoroughly and assemble burger.']},
  {id:'pancakes',name:'Protein Pancakes',cal:700,protein:50,carbs:80,fat:20,ingredients:['2 eggs','80 g oats','30 g protein powder','1 banana','100 ml milk','Berries','Skyr'],steps:['Blend eggs, oats, protein powder, banana and milk.','Fry as small pancakes.','Serve with berries and Skyr.']},
  {id:'cottage',name:'Cottage Cheese Bowl',cal:420,protein:42,carbs:35,fat:12,ingredients:['300 g cottage cheese','100 g frozen berries','A little honey','Optional: 15–20 g nuts'],steps:['Add cottage cheese to a bowl.','Top with berries, honey and optional nuts.']}
];
const week = [
  ['Monday','Protein Oats','Chicken Wraps','Taco Bowl','Cottage Cheese Bowl'],
  ['Tuesday','Eggs & Toast','Taco Bowl','Creamy Chicken Pasta','Skyr + banana + nuts'],
  ['Wednesday','Protein Oats','Creamy Chicken Pasta','Salmon & Potatoes','Cottage Cheese Bowl'],
  ['Thursday','Eggs & Toast','Chicken Wraps','Chicken Curry & Rice','Protein shake + Skyr'],
  ['Friday','Protein Oats','Chicken Curry & Rice','Homemade Burger & Potatoes','Cottage Cheese Bowl'],
  ['Saturday','Protein Pancakes','Chicken Wraps','Taco Bowl','Skyr + fruit'],
  ['Sunday','Eggs & Toast','Taco Bowl','Creamy Chicken Pasta','Protein shake + cottage cheese']
];
const shopping = ['Chicken breast — 2–2.5 kg','Lean minced beef — 800 g–1 kg','Salmon — 400–500 g','Eggs — 18','Cottage cheese — 2–3 tubs','Skyr — 5–7','Ham/turkey slices','Grated cheese','Oats — 1 kg','Rice — 1 kg','Pasta — 500 g','Potatoes — 2 kg','Large tortillas — 2 packs','Wholegrain bread — 1 loaf','Burger buns','Bananas — 7–10','Frozen berries','Broccoli','Carrots','Bell peppers','Lettuce','Cucumber','Tomatoes','Onions','Spinach','Corn','Kidney beans','Salsa','Taco seasoning','Light sour cream','Light cooking cream','Light coconut milk','Curry powder/paste','Peanut butter','Honey','Soy sauce','Sweet chilli sauce','Parmesan','Garlic','Paprika powder','Salt & pepper'];

const state = JSON.parse(localStorage.getItem('strengthfuel')||'{}');
state.logged = state.logged || [];
state.creatine = !!state.creatine;
state.shake = !!state.shake;
state.shopping = state.shopping || {};
state.progress = state.progress || [];
function save(){localStorage.setItem('strengthfuel',JSON.stringify(state));renderToday();renderShopping();renderProgress();}

function renderMeals(){
  mealList.innerHTML = meals.map(m=>`<div class="meal-item"><div class="meal-top"><div><h3>${m.name}</h3><div class="macros">${m.cal} kcal · ${m.protein} g protein · ${m.carbs} g carbs · ${m.fat} g fat</div></div></div><div class="meal-actions"><button class="secondary" onclick="openMeal('${m.id}')">Recipe</button><button class="primary" onclick="logMeal('${m.id}')">Log meal</button></div></div>`).join('');
}
window.openMeal=(id)=>{const m=meals.find(x=>x.id===id);dialogContent.innerHTML=`<h2>${m.name}</h2><p class="macros">${m.cal} kcal · ${m.protein} g protein · ${m.carbs} g carbs · ${m.fat} g fat</p><h3>What to buy</h3><ul>${m.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul><h3>How to make it</h3><ol>${m.steps.map(s=>`<li>${s}</li>`).join('')}</ol><button class="primary" onclick="logMeal('${m.id}');mealDialog.close()">Log this meal</button>`;mealDialog.showModal();};
window.logMeal=(id)=>{state.logged.push(id);save();};
function renderToday(){
  const logged=state.logged.map(id=>meals.find(m=>m.id===id)).filter(Boolean);let cal=logged.reduce((s,m)=>s+m.cal,0);let p=logged.reduce((s,m)=>s+m.protein,0);if(state.shake){cal+=150;p+=30;}
  calText.textContent=`${cal} / 2800`;proteinText.textContent=`${p} / 200 g`;calBar.style.width=Math.min(100,cal/2800*100)+'%';proteinBar.style.width=Math.min(100,p/200*100)+'%';creatineCheck.checked=state.creatine;shakeCheck.checked=state.shake;
  loggedMeals.className='stack'+(logged.length?'':' empty-state');loggedMeals.innerHTML=logged.length?logged.map((m,i)=>`<div class="meal-item"><div class="meal-top"><div><h3>${m.name}</h3><div class="macros">${m.cal} kcal · ${m.protein} g protein</div></div><button class="text-btn" onclick="removeLogged(${i})">Remove</button></div></div>`).join(''):'No meals logged yet.';
}
window.removeLogged=(i)=>{state.logged.splice(i,1);save();};
function renderWeek(){weekPlan.innerHTML=week.map(d=>`<div class="week-item"><strong>${d[0]}</strong><div class="week-grid"><span>Breakfast</span><span>${d[1]}</span><span>Lunch</span><span>${d[2]}</span><span>Dinner</span><span>${d[3]}</span><span>Evening</span><span>${d[4]}</span></div></div>`).join('');}
function renderShopping(){shoppingList.innerHTML=shopping.map((item,i)=>`<label class="shopping-item ${state.shopping[i]?'done':''}"><input type="checkbox" ${state.shopping[i]?'checked':''} onchange="toggleShop(${i},this.checked)"><span>${item}</span></label>`).join('');}
window.toggleShop=(i,v)=>{state.shopping[i]=v;save();};
function renderProgress(){progressHistory.className='stack'+(state.progress.length?'':' empty-state');progressHistory.innerHTML=state.progress.length?[...state.progress].reverse().map(x=>`<div class="history-item"><strong>${x.date}</strong><div class="macros">Weight: ${x.weight} kg${x.waist?' · Waist: '+x.waist+' cm':''}</div></div>`).join(''):'No check-ins yet.';}

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.tab).classList.add('active');}));
creatineCheck.onchange=e=>{state.creatine=e.target.checked;save();};shakeCheck.onchange=e=>{state.shake=e.target.checked;save();};clearMeals.onclick=()=>{state.logged=[];save();};resetShopping.onclick=()=>{state.shopping={};save();};saveProgress.onclick=()=>{if(!weightInput.value)return;state.progress.push({date:new Date().toLocaleDateString('en-GB'),weight:Number(weightInput.value).toFixed(1),waist:waistInput.value?Number(waistInput.value).toFixed(1):''});weightInput.value='';waistInput.value='';save();};closeDialog.onclick=()=>mealDialog.close();resetBtn.onclick=()=>{if(confirm('Reset all StrengthFuel data on this device?')){localStorage.removeItem('strengthfuel');location.reload();}};
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{});}
renderMeals();renderToday();renderWeek();renderShopping();renderProgress();
