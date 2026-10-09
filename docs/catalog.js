(function(){
const products=window.CIRCULAR_PRODUCTS||[];
const qs=new URLSearchParams(location.search);
const slug=qs.get('slug')||products[0]?.slug;
const product=products.find(x=>x.slug===slug)||products[0];
const category=qs.get('categoria')||'Todos';
const img=(p)=>p.img?'<img loading="lazy" src="'+p.img+'" alt="'+p.title+'" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="image-fallback" hidden>Imagen disponible en Tiendanube</span>':'<span class="image-fallback">Imagen disponible en Tiendanube</span>';
const card=p=>'<a class="rio-card" href="producto.html?slug='+encodeURIComponent(p.slug)+'"><div class="rio-card-photo">'+img(p)+'</div><div class="rio-card-info"><span class="badge">Envío gratis</span><h3>'+p.title+'</h3><small>Consultar precio</small></div></a>';
function icons(){return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.65"><path d="M2 10l10-7 10 7v11H2z"/><path d="M8 21v-8h8v8"/></svg>'}
document.querySelectorAll('[data-products]').forEach(el=>{el.innerHTML=products.slice(0,Number(el.dataset.limit)||products.length).map(card).join('')});
const grid=document.querySelector('#catalog-grid');
if(grid){
let visible=products.filter(p=>category==='Todos'||p.cat===category);
const count=document.querySelector('#catalog-count');
const selector=document.querySelector('#catalog-sort');
function draw(){let arr=[...visible];if(selector?.value==='az')arr.sort((a,b)=>a.title.localeCompare(b.title));if(selector?.value==='za')arr.sort((a,b)=>b.title.localeCompare(a.title));grid.innerHTML=arr.map(card).join('');if(count)count.textContent=arr.length+' productos'}
selector?.addEventListener('change',draw);draw();
document.querySelectorAll('.filter-category').forEach(el=>{el.classList.toggle('active',el.dataset.cat===category)});
const search=document.querySelector('#catalog-search');search?.addEventListener('input',e=>{visible=products.filter(p=>(category==='Todos'||p.cat===category)&&p.title.toLowerCase().includes(e.target.value.toLowerCase()));draw()})
}
const detail=document.querySelector('#product-detail');
if(detail&&product){
document.title=product.title+' · Circular Sound';
detail.innerHTML='<div class="crumb"><a href="./">Inicio</a> / <a href="tienda.html">Productos</a> / '+product.title+'</div><div class="product-detail-grid"><div class="product-gallery"><div class="product-main-photo">'+img(product)+'</div><div class="thumbnail-row"><button class="thumb" aria-label="Foto principal">'+(product.img?'<img src="'+product.img+'" alt="">':'▣')+'</button></div></div><div class="product-description"><span class="eyebrow-dark">'+product.cat+'</span><h1>'+product.title+'</h1><div class="product-price">Consultá el precio actualizado</div><p class="availability">Disponibilidad y variantes sujetas al catálogo de Tiendanube.</p><div class="quantity"><label for="qty">Cantidad</label><input id="qty" type="number" min="1" value="1"></div><a class="primary-buy" href="https://www.tiendacircularsound.com/productos/'+product.slug+'/">Ver producto y comprar en la tienda ↗</a><a class="secondary-buy" href="https://wa.me/5491140524375?text='+encodeURIComponent('Hola, quiero consultar por '+product.title)+'">Consultar por WhatsApp</a><div class="product-info-list"><div>✓ Envíos a todo el país</div><div>✓ Medios de pago y financiación en la tienda</div><div>✓ Asesoramiento especializado</div></div></div></div><section class="detail-copy"><h2>Descripción del producto</h2><p>La descripción técnica, variantes y condiciones comerciales se mantienen en Tiendanube para evitar mostrar datos desactualizados en esta vista previa.</p><a href="https://www.tiendacircularsound.com/productos/'+product.slug+'/">Consultar la ficha técnica original ↗</a></section>';
}
})();